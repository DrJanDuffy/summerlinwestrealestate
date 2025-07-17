import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Check if Perplexity API key is available
    if (!process.env.PERPLEXITY_API_KEY) {
      return NextResponse.json(
        { error: "Perplexity API key not configured" },
        { status: 500 }
      );
    }

    const { prompt } = await req.json();

    // Validate prompt input
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: "Invalid prompt provided" },
        { status: 400 }
      );
    }

    // Sanitize and validate prompt length
    const sanitizedPrompt = prompt.trim();
    if (sanitizedPrompt.length === 0) {
      return NextResponse.json(
        { error: "Prompt cannot be empty" },
        { status: 400 }
      );
    }

    if (sanitizedPrompt.length > 1000) {
      return NextResponse.json(
        { error: "Prompt too long (max 1000 characters)" },
        { status: 400 }
      );
    }

    // Create AbortController for timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    try {
      // Use Perplexity's image generation API directly
      const response = await fetch("https://api.perplexity.ai/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.1-sonar-small-128k-online",
          messages: [
            {
              role: "user",
              content: `Generate an image based on this description: ${sanitizedPrompt}. Please provide a detailed visual description that could be used to create this image.`,
            },
          ],
          max_tokens: 1024,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Perplexity API error: ${response.status}`);
      }

      const data = await response.json();
      const imageDescription =
        data.choices[0]?.message?.content || "Image generation failed";

      // For now, return a placeholder since Perplexity doesn't generate images directly
      // You might want to use a different service for actual image generation
      return NextResponse.json({
        description: imageDescription,
        placeholder: true,
        message:
          "Perplexity provides image descriptions. For actual image generation, consider using a dedicated image service.",
      });
    } catch (fetchError) {
      clearTimeout(timeoutId);
      
      if (fetchError.name === 'AbortError') {
        return NextResponse.json(
          { error: "Request timeout - please try again" },
          { status: 408 }
        );
      }
      
      throw fetchError;
    }
  } catch (error) {
    console.error("Image generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate image" },
      { status: 500 }
    );
  }
}

const prompt = `Create a modern, professional about page component for Dr. Jan Duffy, a top Summerlin West real estate agent. Include:
1) Hero section with professional headshot and key credentials
2) Statistics section with sales volume and achievements  
3) Specializations grid with icons
4) Testimonials carousel
5) Contact form integration
6) Office location with map
7) Current listings section

Use Next.js 15, TypeScript, Tailwind CSS 4, and Framer Motion for animations. Make it SEO-optimized and mobile-responsive. Include RealScout widget integration points.`;

fetch('http://localhost:3000/api/v0/generate-component', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ prompt, model: 'gpt-5' }),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Generated Component:', data);
    if (data.component) {
      require('fs').writeFileSync('generated-about-component.tsx', data.component);
      console.log('Component saved to generated-about-component.tsx');
    }
  })
  .catch((error) => console.error('Error:', error));

import Image from "next/image";

export default function AgentAvatar({
  src,
  alt,
  size = 160,
  borderColor = "#FFD700",
}: {
  src: string;
  alt: string;
  size?: number;
  borderColor?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="rounded-full mx-auto mb-4"
      style={{
        border: `6px solid ${borderColor}`,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        background: "#fff",
      }}
      priority
    />
  );
} 
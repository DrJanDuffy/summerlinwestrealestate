import Image from "next/image";

export default function AboutImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = "",
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-2xl shadow-lg ${className}`}
      style={{ objectFit: "cover", background: "#fff" }}
      loading="lazy"
    />
  );
} 
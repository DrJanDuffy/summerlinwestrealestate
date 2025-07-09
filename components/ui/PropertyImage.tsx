import Image from "next/image";

export default function PropertyImage({
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
      className={`rounded-xl shadow-md ${className}`}
      style={{ objectFit: "cover", background: "#f7f9fc" }}
      loading="lazy"
    />
  );
} 
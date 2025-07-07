import React from "react";

type SectionCardProps = React.PropsWithChildren<{
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}>;

const SectionCard = ({
  children,
  className = "",
  style,
  ariaLabel,
}: SectionCardProps) => (
  <section
    className={`sectionCard ${className}`}
    style={style}
    aria-label={ariaLabel}
  >
    {children}
  </section>
);

export default SectionCard;

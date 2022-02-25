import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  maxWidth?: number | string;
  maxHeight?: number | string;
}

export const Card = ({
  children,
  className = "",
  maxHeight = "min-content",
  maxWidth = "min-content",
}: Props) => {
  return (
    <div className={`card ${className}`} style={{ maxWidth, maxHeight }}>
      {children}
    </div>
  );
};

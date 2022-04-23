import React from "react";
import { CSSProperties } from "react";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;

  gap?: number;

  width100?: boolean;
  height100?: boolean;

  flexDirection?: CSSProperties["flexDirection"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  overflow?: CSSProperties["overflow"];
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      className = "",
      onClick,

      gap = 0,

      justifyContent = "initial",
      alignItems = "initial",
      overflow = "initial",
      flexDirection = "initial",

      width100 = false,
      height100 = false,
    }: FlexProps,
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={className}
        onClick={onClick ? onClick : undefined}
        style={{
          display: "flex",
          gap,
          flexDirection,
          alignItems,
          justifyContent,

          width: width100 ? "100%" : "auto",
          maxWidth: width100 ? "100%" : "auto",
          height: height100 ? "100%" : "auto",
          maxHeight: height100 ? "100%" : "auto",

          overflow,
        }}
      >
        {children}
      </div>
    );
  }
);

export default Flex;

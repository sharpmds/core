import React from "react";
import { CSSProperties } from "react";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;

  gap?: number;

  flexDirectionColumn?: boolean;
  flexDirectionRow?: boolean;

  justifyContentCenter?: boolean;
  justifyContentFlexStart?: boolean;
  justifyContentFlexEnd?: boolean;
  justifyContentSpaceBetween?: boolean;
  justifyContentSpaceAround?: boolean;
  justifyContentSpaceEvenly?: boolean;

  alignItemsStart?: boolean;
  alignItemsCenter?: boolean;
  alignItemsEnd?: boolean;

  width100?: boolean;
  height100?: boolean;

  overflowAuto?: boolean;
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      className = "",
      onClick,

      gap = 0,

      flexDirectionColumn = false,
      flexDirectionRow = false,

      justifyContentCenter = false,
      justifyContentFlexStart = false,
      justifyContentFlexEnd = false,
      justifyContentSpaceAround = false,
      justifyContentSpaceEvenly = false,
      justifyContentSpaceBetween = false,

      alignItemsStart = false,
      alignItemsCenter = false,
      alignItemsEnd = false,

      width100 = false,
      height100 = false,

      overflowAuto = false,
    }: FlexProps,
    ref
  ) => {
    let flexDirection: CSSProperties["flexDirection"] = "row";
    if (flexDirectionRow) flexDirection = "row";
    if (flexDirectionColumn) flexDirection = "column";

    let justifyContent: CSSProperties["justifyContent"] = "center";
    if (justifyContentCenter) justifyContent = "center";
    if (justifyContentFlexStart) justifyContent = "flex-start";
    if (justifyContentFlexEnd) justifyContent = "flex-end";
    if (justifyContentSpaceAround) justifyContent = "space-around";
    if (justifyContentSpaceEvenly) justifyContent = "space-evenly";
    if (justifyContentSpaceBetween) justifyContent = "space-between";

    let alignItems: CSSProperties["alignItems"] = "center";
    if (alignItemsStart) alignItems = "start";
    if (alignItemsCenter) alignItems = "start";
    if (alignItemsEnd) alignItems = "end";

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

          overflow: overflowAuto ? "auto" : "initial",
        }}
      >
        {children}
      </div>
    );
  }
);

export default Flex;

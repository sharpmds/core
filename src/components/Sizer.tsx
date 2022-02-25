import React from "react";

interface Props {
  children: React.ReactNode;
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
}

const Sizer = ({
  children,
  width = "",
  height = "",
  maxWidth = "",
  maxHeight = "",
}: Props) => {
  return (
    <div
      className="sizer"
      style={{
        maxHeight,
        maxWidth,
        height,
        width,
      }}
    >
      {children}
    </div>
  );
};

export default Sizer;

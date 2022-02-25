import React from "react";

interface Props {
  children: React.ReactNode;
  margin?: string;
  padding?: string;
}

const Spacer = ({ children, margin = "", padding = "" }: Props) => {
  return <div style={{ margin, padding }}>{children}</div>;
};

export default Spacer;

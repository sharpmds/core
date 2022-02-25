import React from "react";

interface Props {
  type: "success" | "error" | "warning" | "info";
  children: React.ReactNode;
}

export const Alert = ({ type, children }: Props) => {
  return <div className={`alert alert--${type}`}>{children}</div>;
};

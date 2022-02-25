import React from "react";

interface Props {
  children: React.ReactNode;
  horizontal?: boolean;
}

export const Stack = ({ children, horizontal = false }: Props) => {
  return <div className={horizontal ? "stack-horizontal" : "stack"}>
    {children}
  </div>
}

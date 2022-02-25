import React from "react";

interface Props {
  children: React.ReactNode;
}

const TextLight = ({ children }: Props) => {
  return <p className="text-light">{children}</p>
}

export default TextLight;

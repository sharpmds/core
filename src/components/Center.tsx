import React from "react";

interface Props {
  children: React.ReactNode;
}

const Center = ({ children }: Props) => {
  return <div className="center">{children}</div>;
};

export default Center;

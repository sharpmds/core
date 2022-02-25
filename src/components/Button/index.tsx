import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  className = "",
  onClick = () => {},
}: Props) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

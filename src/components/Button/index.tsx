import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  round?: boolean;
}

export const Button = ({
  children,
  className = "",
  round = false,
  onClick = () => {},
}: Props) => {
  return (
    <button
      className={`button ${round ? "button--round" : ""} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Link = ({ children, href }: Props) => {
  return (
    <a className="link" href={href}>
      {children}
    </a>
  );
};

export default Link;

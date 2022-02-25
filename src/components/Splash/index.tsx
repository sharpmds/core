import React from "react";

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export const Splash = ({ title, subtitle, children }: Props) => {
  return <div className="splash">
    <h1 className="splash-title">{title}</h1>
    <p className="splash-subtitle">{subtitle}</p>
    {children}
  </div>
}

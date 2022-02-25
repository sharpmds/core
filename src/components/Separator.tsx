import React, { Children } from "react";

interface Props {
  children: React.ReactNode;
  margin?: string;
  padding?: string;
  noWrap?: boolean;
}

const Separator = ({ children, margin = "", padding = "", noWrap = false }: Props) => {
  const childrenArray = Children.toArray(children).reduce<React.ReactNode[]>((a, b, i) => {
    return [...a, <div style={{ margin, padding }}/>, b]
  }, []);

  if (noWrap) {
    return <>{childrenArray}</>;
  }

  return <div className="separator">{childrenArray}</div>;
};

export default Separator;

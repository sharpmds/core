import React from "react";

interface Props {
  className?: string;
  items: { label: string }[]
}

export const Checkboxes = ({ items, className = "" }: Props) => {
  return <>
    {items.map(item => (
      <label className="checkbox-wrapper">
	<input type="checkbox" className={`checkbox ${className}`} />
	<span className="checkbox-label">{item.label}</span>
      </label>
    ))}
  </>
  ;
};

import React from "react";

interface Props {
  name: string;
  items: {
    name: string;
    value: string;
  }[];
}

export const RadioButtons = ({ name,  items }: Props): React.ReactNode => {
  return (
    <>
      {items.map((item) => (
        <label className="radio-wrapper" key={item.value}>
          <input
            type="radio"
	    className="radio"
            name={name}
            id={item.value}
            value={item.value}
          />
          <span className="radio-label">{item.name}</span>
        </label>
      ))}
    </>
  );
};

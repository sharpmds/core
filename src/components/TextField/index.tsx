import React, { useState } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
}

export const TextField = ({
  type = "text",
  placeholder = "",
  value,
  onChange = () => {},
}: Props) => {
  return (
    <input
      className="text-field"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(ev) => {
        onChange(ev.currentTarget.value);
      }}
    />
  );
};

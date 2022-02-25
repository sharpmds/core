import React from "react";

interface Props {
  type?: string;
  placeholder?: string;
}

export const TextField = ({type = "text", placeholder = ""}: Props) => {
  return <input className="text-field" type={type} placeholder={placeholder}/>
}

import React from "react";

interface Props {
  children: React.ReactNode;
}

const ContainerFullScreen = ({ children }: Props) => {
  return <div className="container-full-screen">
    {children}
  </div>
}

export default ContainerFullScreen;

import React, { useEffect, useState } from "react";
import Services from "../services";

interface Props {
  routes: Record<string, React.ReactNode>;
}

const Router = ({ routes }: Props) => {
  const [page, setPage] = useState("default");

  useEffect(() => Services.router.watchPage(setPage), []);

  return <>{routes[page]}</>;
};

export default Router;

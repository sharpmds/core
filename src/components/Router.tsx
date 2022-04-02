import React, { useEffect, useState } from "react";
import Services from "../services";

interface Props {
  routes: Record<string, React.ReactNode>;
}

const Router = ({ routes }: Props) => {
  const [route, setRoute] = useState("/");

  useEffect(() => Services.router.setRoutes(Object.keys(routes)), []);

  useEffect(() => Services.router.watchCurrentRoute(setRoute), []);

  return <>{routes[route]}</>;
};

export default Router;

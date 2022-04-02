import React, { useEffect, useState } from "react";
import Services from "../services";

interface Props {
  routes: Record<string, React.ReactNode>;
}

const Router = ({ routes }: Props) => {
  const [route, setRoute] = useState("/");

  useEffect(() => Services.router.setRoutes(Object.keys(routes)), []);

  useEffect(() => Services.router.watchCurrentRoute(setRoute), []);

  useEffect(() => {
    setInterval(() => {
      const path = window.location.hash.slice(1);

      if (path === "") {
        Services.router.setPath("/");
      }

      if (path !== Services.router.getCurrentPath()) {
        Services.router.setPath(path);
      }
    }, 333);
  }, []);


  return <>{routes[route]}</>;
};

export default Router;

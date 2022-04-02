import Watcher from "../utils/Watcher";

interface RouteNode {
  path: string;
  isVariable: boolean;
  staticChilds: Record<string, RouteNode>;
  variableChilds: Record<string, RouteNode>;
}

const buildNode = (
  node: RouteNode,
  pathIterator: IterableIterator<RegExpMatchArray>
): void => {
  const iteratorResult = pathIterator.next();
  if (iteratorResult.done) {
    return;
  }

  const value = iteratorResult.value;
  const path = value[1];
  const isVariable = path.slice(0, 1) === "{";

  if (isVariable && node.variableChilds[path] === undefined) {
    node.variableChilds[path] = {
      path,
      isVariable,
      staticChilds: {},
      variableChilds: {},
    };
  }

  if (!isVariable && node.staticChilds[path] === undefined) {
    node.staticChilds[path] = {
      path,
      isVariable,
      staticChilds: {},
      variableChilds: {},
    };
  }

  if (isVariable) {
    return buildNode(node.variableChilds[path], pathIterator);
  }

  return buildNode(node.staticChilds[path], pathIterator);
};

const RouterService = (window: Window) => {
  const pathRegex = /\/([\w{}]*)/g;
  const [watchCurrentPath, setCurrentPath, getCurrentPath] = Watcher("/");
  const [watchCurrentRoute, setCurrentRoute, getCurrentRoute] = Watcher("/");
  const [watchParams, setParams, getParams] = Watcher<Record<string, string>>(
    {}
  );
  const routeMap: RouteNode = {
    path: "/",
    isVariable: false,
    staticChilds: {},
    variableChilds: {},
  };

  const setRoutes = (routes: string[]) => {
    routes.forEach((route) => {
      const pathIterator = route.matchAll(pathRegex);
      buildNode(routeMap, pathIterator);
    });
  };

  const setPath = (newPath: string) => {
    const pathIterator = newPath.matchAll(pathRegex);
    const params: Record<string, string> = {};

    let node = routeMap;
    let route = "";
    let result = pathIterator.next();

    while (!result.done) {
      const { value } = result;
      const path = value[1];

      if (node.staticChilds[path]) {
        node = node.staticChilds[path];
      } else if (
        node.variableChilds &&
        Object.values(node.variableChilds).length > 0
      ) {
        node = Object.values(node.variableChilds)[0];
        const match = node.path.match(/\w*/g);

        if (match && match[1]) {
          const key = match[1];
          params[key] = path;
        }
      } else {
        throw new Error(`Can't find route '${newPath}'`);
      }

      route += `/${node.path}`;
      result = pathIterator.next();
    }

    setCurrentRoute(route);
    setParams(params);
    setCurrentPath(newPath);

    window.location.hash = `#${newPath}`;
  };

  return {
    setPath,
    setRoutes,

    getCurrentPath,
    watchCurrentPath,

    getCurrentRoute,
    watchCurrentRoute,

    getParams,
    watchParams,
  };
};

export default RouterService;

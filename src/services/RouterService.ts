import Watcher from "../utils/Watcher";

const RouterService = () => {
  const [watchPage, setPage] = Watcher("default");

  return {
    watchPage,
    setPage,
  };
};

export default RouterService;

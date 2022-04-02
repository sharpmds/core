import RouterService from "./RouterService";

const Services = () => {
  const services = { router: RouterService(window) };

  return {
    ...services,
  };
};

export default Services();

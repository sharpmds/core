import RouterService from "./RouterService";

const Services = () => {
  const services = { router: RouterService() };

  return {
    ...services,
  };
};

export default Services();

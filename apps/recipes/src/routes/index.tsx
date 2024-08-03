import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RoutePathMap } from "./RoutePathMap";

const routes = Object.values(RoutePathMap);
const router = createBrowserRouter(routes);

const RouteProvider = () => {
  return <RouterProvider router={router} />;
};

export default RouteProvider;

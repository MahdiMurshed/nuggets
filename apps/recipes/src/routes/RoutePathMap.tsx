import { RouteObject } from "react-router-dom";
import App from "../App";
import Recursion from "../pages/recursion";

export const RoutePathMap: Record<string, RouteObject & { path: string }> = {
  root: {
    path: "/",
    element: <App />,
  },
  recursion: {
    path: "/recursion",
    element: <Recursion />,
  },
};

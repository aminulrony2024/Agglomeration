import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Layout/Home/Home";

import Visualization from "../component/Visualization";
import Integration from "../component/Integration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/visualization",
    element: <Visualization></Visualization>
  },
  {
    path: "/integration",
    element: <Integration></Integration>
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
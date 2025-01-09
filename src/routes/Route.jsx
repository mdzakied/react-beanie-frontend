import { createBrowserRouter, Navigate } from "react-router-dom";
import Error404 from "../shared/pages/Error404";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";

const Router = createBrowserRouter([
  {
    path: "*",
    element: <Error404 />,
  },
  {
    path: "/",
    element: <Navigate to="/home" replace={true} />,
  },
  {
    path: "home",
    element: <Home />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
]);

export default Router;

import { createBrowserRouter, Navigate } from "react-router-dom";
import Error404 from "../shared/pages/Error404";
import Home from "../pages/Home";

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
]);

export default Router;

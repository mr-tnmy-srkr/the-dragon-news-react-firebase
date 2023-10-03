import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },{
        path: "/login",
        element: <Login></Login>,
      },{
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default routes;
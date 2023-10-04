import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import DetailsNews from "../pages/DetailsNews/DetailsNews";
import PrivateRoute from "./PrivateRoute";
import { getProducts } from "../utils/getProducts";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: async () => fetch("/news.json"),
        loader: getProducts,
      },
      {
        path: "/news/:id",
        element: <PrivateRoute><DetailsNews></DetailsNews></PrivateRoute>,
        loader: getProducts,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);
export default routes;

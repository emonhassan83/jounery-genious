import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllGuides from "../pages/AllGuides/AllGuides";
import Bookings from "../pages/Bookings/Bookings";
import Blog from "../pages/Blog/Blog";
import AboutUs from "../pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/all-guides",
          element: <AllGuides/>,
        },
        {
          path: "/bookings",
          element: <Bookings/>,
        },
        {
          path: "/about-us",
          element: <AboutUs/>,
        },
        {
          path: "/blog",
          element: <Blog/>,
        },
      ]
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <SignUp />,
    },
  ]);

  export default router;
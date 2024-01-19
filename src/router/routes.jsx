import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/MainlayoutPages/Home/Home";
import AboutUs from "../pages/MainlayoutPages/AboutUs/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;

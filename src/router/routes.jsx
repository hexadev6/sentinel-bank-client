import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/MainlayoutPages/Home/Home";
import AboutUs from "../pages/MainlayoutPages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Overview from "../pages/Dashboard/Overview";

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
        path: "aboutUs/:section",
        element: <AboutUs />,
      },
      {
        path: "contact/:section",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [{ path: "/dashboard", element: <Overview /> }],
  },
]);

export default router;

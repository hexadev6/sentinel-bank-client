import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/MainlayoutPages/Home/Home";
import AboutUs from "../pages/MainlayoutPages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
<<<<<<< HEAD
import Dashboard from "../pages/Dashboard/Dashboard";
=======
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
>>>>>>> cc7e65c9ee843aa6a90c50fbeb3433db16366bfa

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
        element: <ContactUs></ContactUs>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/login',
        element: <Login></Login>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/MainlayoutPages/Home/Home";
import AboutUs from "../pages/MainlayoutPages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Overview from "../pages/Dashboard/Overview";
import QuickBank from "../pages/Dashboard/QuickBank";
import CreateAcc from "../pages/Dashboard/CreateAcc";
import Stepper from "../components/Stepper/Stepper";
import AccountManagement from "../pages/Dashboard/AccountManagement";
import UserProfile from "../components/Shared/Navbar/UserProfile";

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
      
    ],
  },
  {
    path: "registration",
    element: <Stepper/>,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path:'/my-profile',
    element:<UserProfile></UserProfile>
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "overview", element: <Overview /> },
      { path: "quickBanking", element: <QuickBank /> },
      { path: "createAcc", element: <CreateAcc /> },
      {path: 'accountManagement', element: <AccountManagement/>}
  ],
  },
]);

export default router;

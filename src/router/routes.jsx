import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/MainlayoutPages/Home/Home";
import AboutUs from "../pages/MainlayoutPages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login/Login";

import QuickBank from "../pages/Dashboard/QuickBank";
import CreateAcc from "../pages/Dashboard/CreateAcc";
import Stepper from "../components/Stepper/Stepper";
import AccountManagement from "../pages/Dashboard/AccountManagement";
import UserProfile from "../components/Shared/Navbar/UserProfile";
import CardManagement from "../pages/Dashboard/CardManagement";
import DebitCard from "../pages/Dashboard/DebitCard";
import CeditCard from "../pages/Dashboard/CeditCard";
import ApplicationCard from "../pages/Dashboard/ApplicationCard";
import Notice from "../components/DashBoard/Notice/Notice";
import BankUpdate from "../components/Home/News/BankUpdate";
import ReadNotice from "../components/Home/News/ReadNotice";
import ApplyLoan from "../pages/Dashboard/ApplyLoan";
import LoanManagement from "../pages/Dashboard/LoanManagement";
import LoanDetailsAdmin from "../pages/Dashboard/LoanDetailsAdmin";
import OverviewAdmin from "../pages/Dashboard/OverviewAdmin";
import OverviewUser from "../pages/Dashboard/OverviewUser";
import LoanOverview from "../pages/Dashboard/LoanOverview";
import AdminChatApp from "../components/DashBoard/ChatApp/AdminChatApp";
import UserChatApp from "../components/DashBoard/ChatApp/UserChatApp";

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
        path: "/bankUpdate",
        element: <BankUpdate />,
      },
      {
        path: "/bankUpdate/:id",
        element: <ReadNotice />,
        loader: ({ params }) =>
          fetch(
            `https://sentinel-bank-server-six.vercel.app/allNotice/${params?.id}`
          ),
      },
      {
        path: "contact/:section",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "registration",
    element: <Stepper />,
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "/my-profile",
    element: <UserProfile></UserProfile>,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin/overview",
        element: <OverviewAdmin />,
      },
      {
        path: "user/overview",
        element: <OverviewUser />,
      },
      {
        path: "quickBanking",
        element: <QuickBank />,
      },
      {
        path: "createAcc",
        element: <CreateAcc />,
      },
      {
        path: "accountManagement",
        element: <AccountManagement />,
      },
      {
        path: "cardManagement",
        element: <CardManagement />,
      },
      {
        path: "loanManagement",
        element: <LoanManagement />,
      },
      {
        path: "LoanDetailsAdmin/:id",
        element: <LoanDetailsAdmin />,
      },
      {
        path: "loanOverview/:id",
        element: <LoanOverview />,
      },
      {
        path: "applicationCard",
        element: <ApplicationCard />,
      },
      {
        path: "applyLoan",
        element: <ApplyLoan />,
      },
      {
        path: "applicationCard/debit",
        element: <DebitCard />,
      },
      {
        path: "applicationCard/cedit",
        element: <CeditCard />,
      },
      {
        path: "notice",
        element: <Notice />,
      },
      {
        path: "chat",
        element: <AdminChatApp />,
      },
      {
        path: "support",
        element: <UserChatApp />,
      },
    ],
  },
]);

export default router;

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
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import AdminRoute from "../components/PrivateRoute/AdminRoute";

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
    element: (
      <PrivateRoute>
        <UserProfile></UserProfile>
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "admin/overview",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <OverviewAdmin />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "user/overview",
        element: (
          <PrivateRoute>
            <OverviewUser />
          </PrivateRoute>
        ),
      },
      {
        path: "quickBanking",
        element: (
          <PrivateRoute>
            <QuickBank />
          </PrivateRoute>
        ),
      },
      {
        path: "createAcc",
        element: (
          <PrivateRoute>
            <CreateAcc />
          </PrivateRoute>
        ),
      },
      {
        path: "accountManagement",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AccountManagement />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "cardManagement",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <CardManagement />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "loanManagement",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <LoanManagement />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "LoanDetailsAdmin/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <LoanDetailsAdmin />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "loanOverview/:id",
        element: (
          <PrivateRoute>
              <LoanOverview />
          </PrivateRoute>
        ),
      },
      {
        path: "applicationCard",
        element: (
          <PrivateRoute>
            <ApplicationCard />
          </PrivateRoute>
        ),
      },
      {
        path: "applyLoan",
        element: (
          <PrivateRoute>
            <ApplyLoan />
          </PrivateRoute>
        ),
      },
      {
        path: "applicationCard/debit",
        element: (
          <PrivateRoute>
            <DebitCard />
          </PrivateRoute>
        ),
      },
      {
        path: "applicationCard/cedit",
        element: (
          <PrivateRoute>
            <CeditCard />
          </PrivateRoute>
        ),
      },
      {
        path: "notice",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Notice />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "chat",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminChatApp />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "support",
        element: (
          <PrivateRoute>
            <UserChatApp />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

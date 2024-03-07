import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from "react-router-dom";
import useStatus from '../../Hooks/useStatus';


const AdminRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    const { userinfo } = useStatus({ email: user?.email }) || {};

    if (loading) {
      return (
          <div className="container mx-auto mt-10 text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    }
    if (userinfo?.status === "admin") {
      return children;
    }
    return (
      <Navigate
        state={{ redirectTo: location.pathname }}
        to="/login"
      ></Navigate>
    );
};

export default AdminRoute;
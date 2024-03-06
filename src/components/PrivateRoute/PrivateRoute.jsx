import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
      return (
          <div className="container mx-auto mt-10 text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      );
    }
    if (user) {
      return children;
    }
    return (
      <Navigate
        state={{ redirectTo: location.pathname }}
        to="/login"
      ></Navigate>
    );
};

export default PrivateRoute;
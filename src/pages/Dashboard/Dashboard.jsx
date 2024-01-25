import React from "react";
import Sidebar from "../../components/Shared/Dashboard Sidebar/Sidebar";
import Topbar from "../../components/Shared/Dasboard Topbar/Topbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
      <div className="flex">
        <Sidebar />
        <Topbar />
      
      </div>
  );
};

export default Dashboard;

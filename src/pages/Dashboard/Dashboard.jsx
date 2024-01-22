import React from "react";
import Sidebar from "../../components/Shared/Dashboard Sidebar/Sidebar";
import Topbar from "../../components/Shared/Dasboard Topbar/Topbar";

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-8">
      <Sidebar />
      <Topbar />
      </div>
    </div>
  );
};

export default Dashboard;

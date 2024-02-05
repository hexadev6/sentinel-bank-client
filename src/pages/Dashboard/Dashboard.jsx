import Sidebar from "../../components/Shared/Dashboard Sidebar/Sidebar";
import Topbar from "../../components/Shared/Dasboard Topbar/Topbar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Topbar />
    </div>
  );
};

export default Dashboard;

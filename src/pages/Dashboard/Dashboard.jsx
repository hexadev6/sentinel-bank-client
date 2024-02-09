import Sidebar from "../../components/Shared/Dashboard Sidebar/Sidebar";
import Topbar from "../../components/Shared/Dasboard Topbar/Topbar";
import useDarkMode from "../../Hooks/useDarkMode";

const Dashboard = () => {
  const {darkMode, toggleDarkMode} = useDarkMode()

  return (
    <div className="flex"  data-theme={ darkMode==true  ? "night" : 'light'}>
            <Sidebar  darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        <Topbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>

    </div>
  );
};

export default Dashboard;

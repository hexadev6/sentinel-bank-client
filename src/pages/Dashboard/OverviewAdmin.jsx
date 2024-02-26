
import UserGraph from "../../components/DashBoard/Overview/UserGraph/UserGraph";
import AdminTransafer from "../../components/DashBoard/Overview/MoneyTransfer/AdminTransafer";
import ChatApp from "../../components/DashBoard/ChatApp/ChatApp";

const OverviewAdmin = () => {

  return (
    <>
      <div className=" justify-between items-start p-5">
        <div className=" space-y-6">
          <UserGraph />
          <ChatApp/>
        </div>
      </div>
    </>
  );
};

export default OverviewAdmin;

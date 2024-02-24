import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useStatus from "../../Hooks/useStatus";
import ChatApp from "../../components/DashBoard/ChatApp/ChatApp";
import UserGraph from "../../components/DashBoard/Overview/UserGraph/UserGraph";
import useFindByAccNum from "../../Hooks/useFindByAccNum";
import Transfer from "../../components/DashBoard/Overview/MoneyTransfer/Transfer";
import AdminTransafer from "../../components/DashBoard/Overview/MoneyTransfer/AdminTransafer";

const OverviewAdmin = () => {
  const { user } = useAuth();
  const { userinfo: normalUserInfo } = useStatus({ email: user?.email });

  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const [getTotalBalance, setGetTotalBalance] = useState(0);

  const [accountByNum, isLoading, refetch] = useFindByAccNum();

  useEffect(() => {
    refetch();
    setTotalBalance(accountByNum);
  }, [totalDeposits, refetch, accountByNum]);

  // Set userId and adminId dynamically
  const userId = normalUserInfo?._id;
  const adminId = "65c62bccbeb6949fbca80189";
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-5 justify-between items-start p-5">
        <div className="col-span-3 space-y-6">
        <AdminTransafer/>
          <UserGraph />

          <ChatApp key={user?._id} userId={userId} adminId={adminId} />
        </div>
      </div>
    </>
  );
};

export default OverviewAdmin;

import { useEffect, useState } from "react";
import Cards from "../../components/DashBoard/Overview/Cards/Cards";
import Transaction from "../../components/DashBoard/Overview/Transaction/Transaction";
import Transfer from "../../components/DashBoard/Overview/MoneyTransfer/Transfer";
import useAuth from "../../Hooks/useAuth";
import useStatus from "../../Hooks/useStatus";
import UserGraph from "../../components/DashBoard/Overview/UserGraph/UserGraph";

import useFindByAccNum from "../../Hooks/useFindByAccNum";
import ChatApp from "../../components/DashBoard/ChatApp/ChatApp";

const OverviewUser = () => {
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
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-y-3 md:gap-5 justify-between items-start p-5 overflow-x-hidden">
        <div className="xl:col-span-2 space-y-6">
          <Transfer />
          <UserGraph />
          {/* <Transaction /> */}
          {/* <ChatApp /> */}
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default OverviewUser;

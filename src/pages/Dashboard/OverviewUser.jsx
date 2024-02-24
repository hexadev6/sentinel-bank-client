import { useEffect, useState } from "react";
import Cards from "../../components/DashBoard/Overview/Cards/Cards";
import Transfer from "../../components/DashBoard/Overview/MoneyTransfer/Transfer";
import useAuth from "../../Hooks/useAuth";
import useStatus from "../../Hooks/useStatus";
import UserGraph from "../../components/DashBoard/Overview/UserGraph/UserGraph";
import useFindByAccNum from "../../Hooks/useFindByAccNum";

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

  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-y-3 md:gap-5 justify-between items-start p-5">
        <div className="lg:col-span-3 space-y-6">
          {userinfo?.status === "user" && <Transfer />}
          <UserGraph />
        </div>
        {userinfo?.status === "user" && <Cards />}
      </div>
    </>
  );
};

export default OverviewUser;

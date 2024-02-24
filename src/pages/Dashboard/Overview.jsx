import { useEffect, useState } from "react";
import Cards from "../../components/DashBoard/Overview/Cards/Cards";
import Transfer from "../../components/DashBoard/Overview/MoneyTransfer/Transfer";
import useAuth from "../../Hooks/useAuth";
import useStatus from "../../Hooks/useStatus";
import UserGraph from "../../components/DashBoard/Overview/UserGraph/UserGraph";
import useFindByAccNum from "../../Hooks/useFindByAccNum";

const Overview = () => {
  // const {darkMode, toggleDarkMode} = useDarkMode()
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });
  // const { userinfo:adminInfo } = useStatus({ email: 'team.hexadev@gmail.com' });
  // const axiosPublic = useAxiosPublic();
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  // const [getTotalBalance, setGetTotalBalance] = useState(0);
  // const { isPending, error, allDeposits } = useHistory();
  const [accountByNum, isLoading, refetch] = useFindByAccNum();

  useEffect(() => {
    refetch();
    setTotalBalance(accountByNum);
  }, [totalDeposits]);

  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-5 gap-y-3 md:gap-5 justify-between items-start p-5">
        <div className="lg:col-span-3 space-y-6">
          {userinfo?.status === "user" && <Transfer />}
          <UserGraph />
          {/* {userinfo?.status === "user" && <Transaction />} */}
        </div>
        {userinfo?.status === "user" && <Cards />}
      </div>
    </>
  );
};

export default Overview;

import React, { useEffect, useState } from "react";
import Cards from "../../components/DashBoard/Overview/Cards/Cards";
import Transaction from "../../components/DashBoard/Overview/Transaction/Transaction";
import Transfer from "../../components/DashBoard/Overview/MoneyTransfer/Transfer";
import useAuth from "../../Hooks/useAuth";
import useStatus from "../../Hooks/useStatus";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useSingleAccount from "../../Hooks/useSingleAccount";
import UserGraph from "../../components/DashBoard/Overview/UserGraph/UserGraph";
import useDarkMode from "../../Hooks/useDarkMode";
import useHistory from "../../Hooks/useHistory";

const Overview = () => {
  // const {darkMode, toggleDarkMode} = useDarkMode()
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });
  const axiosPublic = useAxiosPublic();
  const [totalDeposits, setTotalDeposits] = useState(0);

  const [totalBalance, setTotalBalance] = useState(0);
  const [getTotalBalance, setGetTotalBalance] = useState(0);
  const { isPending, error, allDeposits, refetch } = useHistory();

 

  useEffect(() => {
    axiosPublic
      .get(`/findByAccNum/${userinfo?.acc_num}`)
      .then((res) => setTotalBalance(res.data.data))
      .catch((error) => console.log(error));
  }, [totalDeposits]);

  useEffect(() => {
    const sumOfDeposits = allDeposits?.reduce(
      (total, deposit) => total + deposit.amount,
      0
    );
    const total = totalBalance?.initial_deposit + sumOfDeposits;

    setTotalDeposits(sumOfDeposits);
    setGetTotalBalance(total);
  }, [allDeposits, totalBalance]);

  // console.log(totalBalance);

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-5 justify-between items-start p-5'>
      <div className='col-span-2 space-y-6'>
        
        <Transfer
          totalDeposits={totalDeposits}
          getTotalBalance={getTotalBalance}
        />
        <UserGraph/>
        <Transaction  />
      </div>
      <Cards />
    </div>
  );
};

export default Overview;

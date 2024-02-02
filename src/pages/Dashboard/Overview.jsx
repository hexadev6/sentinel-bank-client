import React, { useEffect, useState } from "react";
import Cards from "../../components/DashBoard/Overview/Cards/Cards";
import Transaction from "../../components/DashBoard/Overview/Transaction/Transaction";
import Transfer from "../../components/DashBoard/Overview/MoneyTransfer/Transfer";
import useAuth from "../../Hooks/useAuth";
import useStatus from "../../Hooks/useStatus";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Overview = () => {
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });
  const axiosPublic = useAxiosPublic();
  const [totalDeposits, setTotalDeposits] = useState(0);
  const {
    isPending,
    error,
    data: allDeposits,
    refetch,
  } = useQuery({
    queryKey: ["allDeposits"],
    queryFn: async () => {
      try {
        console.log(userinfo?.acc_num);
        const res = await axiosPublic.get(`/getDeposit/${userinfo?.acc_num}`);
        console.log(res.data);
        return res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  });


  useEffect(()=>{
    const sumOfDeposits = allDeposits?.reduce((total, deposit) => total + deposit.amount, 0);
    setTotalDeposits(sumOfDeposits);
  },[allDeposits])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-5 justify-between items-start p-5">
      <div className="col-span-2">
        <Cards />
        <Transaction allDeposits={allDeposits} isPending={isPending}  />
      </div>
      <Transfer totalDeposits={totalDeposits} />
    </div>
  );
};

export default Overview;

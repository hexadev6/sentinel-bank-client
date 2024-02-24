import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import useAuth from "../../../../Hooks/useAuth";
import useStatus from "../../../../Hooks/useStatus";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useFindByAccNum from "../../../../Hooks/useFindByAccNum";
import { useQuery } from "@tanstack/react-query";

const Transfer = () => {
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });
  const axiosPublic = useAxiosPublic();
  const [totalBalance, setTotalBalance] = useState(0);
  const [getTotalBalance, setGetTotalBalance] = useState(0);
  const [accountByNum, isLoading, refetch] = useFindByAccNum();

  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalWithDraws, setTotalWithDraws] = useState(0);

  const {
    isPending,
    error,
    data: allDeposits,
  } = useQuery({
    queryKey: ["allDeposits"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/getDeposit/${userinfo?.acc_num}`);
        return res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  useEffect(() => {
    refetch();
    setTotalBalance(accountByNum);
  }, [totalDeposits]);

  useEffect(() => {
    const depositsForAccount = allDeposits?.filter(
      (deposit) => deposit.transactionType === "deposit"
    );
    const sumOfDeposits = depositsForAccount?.reduce(
      (total, deposit) => total + deposit.amount,
      0
    );
    setTotalDeposits(sumOfDeposits || 0);
  }, [allDeposits, accountByNum]);

  // sum of withdraw
  useEffect(() => {
    const withdrawForAccount = allDeposits?.filter(
      (withdraw) => withdraw.transactionType === "withdraw"
    );
    // console.log(withdrawForAccount);
    const sumOfWithdraw = withdrawForAccount?.reduce(
      (total, withdraw) => total + withdraw.amount,
      0
    );
    setTotalWithDraws(sumOfWithdraw || 0);
  }, [allDeposits, accountByNum]);

  // total balance
  useEffect(() => {
    const totalBalance =
      accountByNum?.initial_deposit +
      (totalDeposits || 0) -
      (totalWithDraws || 0);

    setGetTotalBalance(totalBalance || 0);
  }, [totalDeposits, totalWithDraws, totalBalance, accountByNum]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
      {/* deposit */}
      <Card className="border shadow-lg bg-green-100 rounded-lg text-light-gray">
        <CardBody>
          <Typography variant="paragraph" className="mb-2 font-light">
            Deposit
          </Typography>
          <Typography variant="h5" className="font-medium">
            ${totalDeposits}
          </Typography>
          <span className="bg-nevy-blue text-white text-xs  rounded px-2 py-1 flex items-center w-fit mt-3">
            <span>6.0545%</span>
            <FaArrowTrendUp className="ml-4" />
          </span>
        </CardBody>
      </Card>
      {/* withdraw */}
      <Card className="border shadow-lg bg-orange-100 rounded-lg text-light-gray">
        <CardBody>
          <Typography variant="paragraph" className="mb-2 font-light">
            Withdraw
          </Typography>
          <Typography variant="h5" className="font-medium">
            ${totalWithDraws}
          </Typography>
          <span className="bg-nevy-blue text-white text-xs  rounded px-2 py-1 flex items-center w-fit mt-3">
            <span>43.354%</span>
            <FaArrowTrendDown className="ml-4" />
          </span>
        </CardBody>
      </Card>
      {/* Savings */}
      <Card className="border shadow-lg bg-deep-orange-50 rounded-lg text-light-gray">
        <CardBody>
          <Typography variant="paragraph" className="mb-2 font-light">
            Savings
          </Typography>
          <Typography variant="h5" className="font-medium">
            $2343.00
          </Typography>
          <span className="bg-nevy-blue text-white text-xs  rounded px-2 py-1 flex items-center w-fit mt-3">
            <span>10.873%</span>
            <FaArrowTrendDown className="ml-4" />
          </span>
        </CardBody>
      </Card>
      {/* for total balance */}
      <Card className="border shadow-lg bg-blue-100 rounded-lg text-light-gray">
        <CardBody>
          <Typography variant="paragraph" className="mb-2 font-light">
            Total Balance
          </Typography>
          <Typography variant="h5" className="font-medium">
            ${getTotalBalance}
          </Typography>
          <span className="bg-nevy-blue text-white text-xs  rounded px-2 py-1 flex items-center w-fit mt-3">
            <span>26.0532%</span>
            <FaArrowTrendUp className="ml-4" />
          </span>
        </CardBody>
      </Card>
    </div>
  );
};

export default Transfer;

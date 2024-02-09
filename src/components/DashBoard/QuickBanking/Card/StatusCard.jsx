import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import DepoWithdraw from "../QuickBank/DepoWithdraw";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useStatus from "../../../../Hooks/useStatus";
import useAuth from "../../../../Hooks/useAuth";
import useFindByAccNum from "../../../../Hooks/useFindByAccNum";

const StatusCard = () => {
  // all state
  const [total, setTotal] = useState(1000);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
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
    console.log(withdrawForAccount);
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
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  justify-between items-center">
        <Card className=" bg-nevy-blue  rounded text-white">
          {/* total balance */}
          <CardBody>
            <Typography variant="h6" className="mb-2 font-light">
              Total Balance
            </Typography>
            <Typography variant="h3" className="font-medium" id="total">
              ${getTotalBalance}
            </Typography>
          </CardBody>
        </Card>
        <Card className=" bg-nevy-blue  rounded text-white">
          {/* total deposit */}
          <CardBody>
            <Typography variant="h6" className="mb-2 font-light">
              Deposit
            </Typography>
            <Typography variant="h3" className="font-medium">
              ${totalDeposits}
            </Typography>
          </CardBody>
        </Card>
        <Card className=" bg-nevy-blue  rounded text-white">
          {/* total withdraw */}
          <CardBody>
            <Typography variant="h6" className="mb-2 font-light">
              Withdraw
            </Typography>
            <Typography variant="h3" className="font-medium">
              ${totalWithDraws}
            </Typography>
          </CardBody>
        </Card>
      </div>
      {/* depo-withdraw calculation */}
      <DepoWithdraw
        allDeposits={allDeposits}
        isPending={isPending}
        refetch={refetch}
        setTotal={setTotal}
        total={total}
        deposit={deposit}
        setDeposit={setDeposit}
        setWithdraw={setWithdraw}
        withdraw={withdraw}
        user={user}
      />
    </>
  );
};

export default StatusCard;

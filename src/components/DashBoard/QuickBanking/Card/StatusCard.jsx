import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import DepoWithdraw from "../QuickBank/DepoWithdraw";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useStatus from "../../../../Hooks/useStatus";
import useAuth from "../../../../Hooks/useAuth";

const StatusCard = () => {
  // all state
  const [total, setTotal] = useState(1000);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);
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
  useEffect(() => {
    const sumOfDeposits = allDeposits?.reduce(
      (total, deposit) => total + deposit.amount,
      0
    );
    setTotalDeposits(sumOfDeposits);
  }, [allDeposits]);

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
              ${total}
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
              ${withdraw}
            </Typography>
          </CardBody>
        </Card>
      </div>
      {/* depo-withdraw calculation */}
      <DepoWithdraw
        allDeposits={allDeposits}
        isPending={isPending}
        // totalDeposits={totalDeposits}
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

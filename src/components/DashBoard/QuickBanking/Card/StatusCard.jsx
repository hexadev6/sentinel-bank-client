import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import DepoWithdraw from "../QuickBank/DepoWithdraw";

const StatusCard = () => {
  // all state
  const [total, setTotal] = useState(1000);
  const [deposit, setDeposit] = useState(0);
  const [withdraw, setWithdraw] = useState(0);

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
              ${deposit}
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
        setTotal={setTotal}
        total={total}
        deposit={deposit}
        setDeposit={setDeposit}
        setWithdraw={setWithdraw}
        withdraw={withdraw}
      />
    </>
  );
};

export default StatusCard;

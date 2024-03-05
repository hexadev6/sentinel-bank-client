import { Card, CardBody, Typography } from "@material-tailwind/react";
import React from "react";
import { BiTransfer } from "react-icons/bi";
import useTransaction from "../../../../Hooks/useTransaction";
import { FaUser } from "react-icons/fa6";
import { PiWaveSineBold } from "react-icons/pi";

const AdminTransafer = () => {
  const { totalTransaction} = useTransaction();
  return (
    <div>
      <h2 className="text-2xl py-4">General Statistics</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-2">
        <Card className="border shadow-lg bg-nevy-blue rounded-lg text-white">
          <CardBody className="flex items-center gap-4 justify-between">
            <div className="text-xl">
              <Typography variant="paragraph" className="mb-2 font-light">
                Transaction
              </Typography>
              <Typography variant="h5" className="font-medium">
                {totalTransaction?.totalTransaction}
              </Typography>
            </div>
            <div className="text-6xl">
              <BiTransfer></BiTransfer>
            </div>
          </CardBody>
        </Card>
        <Card className="border shadow-lg bg-red-300 rounded-lg text-white">
          <CardBody className="flex items-center gap-4 justify-between">
            <div className="text-xl">
              <Typography variant="paragraph" className="mb-2 font-light">
                Total User
              </Typography>

              <Typography variant="h5" className="font-medium">
                {totalTransaction?.totalUser}
              </Typography>
            </div>
            <div className="text-6xl">
              <FaUser></FaUser>
            </div>
          </CardBody>
        </Card>
        <Card className="border shadow-lg bg-[#158958] rounded-lg text-white">
          <CardBody className="flex items-center gap-4 justify-between">
            <div className="text-xl">
              <Typography variant="paragraph" className="mb-2 font-light">
                Income
              </Typography>
              <Typography variant="h5" className="font-medium">
                $20212
              </Typography>
            </div>
            <div className="text-6xl">
              <PiWaveSineBold></PiWaveSineBold>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default AdminTransafer;

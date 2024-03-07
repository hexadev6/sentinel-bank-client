import { Card, Typography } from "@material-tailwind/react";
import Container from "../../Shared/container/Container";
import SubHeading from "../../Shared/Heading Title/SubHeading";
import { useEffect, useState } from "react";
import axios from "axios";

const TABLE_HEAD = [
  "SL",
  "District",
  "Branch",
  "Branch Code",
  "Address",
  "Mobile",
];

const WhatOffer = () => {
  const [branch, setBranch] = useState([]);
  useEffect(() => {
    axios.get("/Branches.json").then((res) => {
      setBranch(res.data);
    });
  }, []);
  return (
    <div id="branch">
      <div className="container mx-auto px-4 mt-10">
      <SubHeading title={"Our Branches"}></SubHeading>
      <div id="branch ">
        <Card className="h-full mt-20 w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b  border-nevy-blue bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold text-nevy-blue leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {branch.map((item, index) => {
                const isLast = index === branch.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={item.id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {index + 1}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.district}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.branch}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {item.branch_code}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {item.address}
                      </Typography>
                    </td>
                    <td className={`${classes} bg-blue-gray-50/50`}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        {item.mobile}
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default WhatOffer;

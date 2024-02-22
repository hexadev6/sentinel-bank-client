import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Spinner,
  Typography,
} from "@material-tailwind/react";

import useAllLoan from "../../Hooks/useAllLoan";
import { Link } from "react-router-dom";
const TABLE_HEAD = ["Account Holder", "Amount", "Acount", "Email", "Status"];

const LoanManagement = () => {
  const [loan, isLoading, refetch] = useAllLoan();
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner color="blue" />
      </div>
    );

  return (
    <div className="px-8 py-8">
      {/* table */}
      <Card className="h-full w-full min-h-screen">
        <CardHeader floated={false} shadow={false} className="rounded-none ">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                All Loan list
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                See information about all Loan
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 min-h-screen">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loan.map(
                (
                  { _id, name, status, acc_num, profileImg, loanAmount, email },
                  index
                ) => {
                  const isLast = index === loan?.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr
                      key={_id}
                      className="cursor-pointer hover:bg-gray-200 group"
                    >
                      <td className={classes}>
                        <Link
                          to={"/dashboard/LoanDetailsAdmin"}
                          className="flex items-center gap-3"
                        >
                          <Avatar src={profileImg} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {name}
                            </Typography>
                          </div>
                        </Link>
                      </td>
                      <td className={classes}>
                        <Link
                          to={"/dashboard/LoanDetailsAdmin"}
                          className="flex flex-col"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            ${loanAmount}
                          </Typography>
                        </Link>
                      </td>
                      <td className={classes}>
                        <Link
                          to={"/dashboard/LoanDetailsAdmin"}
                          className="flex flex-col"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {acc_num}
                          </Typography>
                        </Link>
                      </td>
                      <td className={classes}>
                        <Link
                          to={"/dashboard/LoanDetailsAdmin"}
                          className="flex flex-col"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {email}
                          </Typography>
                        </Link>
                      </td>

                      <td className={classes}>
                        <Link
                          to={"/dashboard/LoanDetailsAdmin"}
                          className="w-max"
                        >
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={status === "issue" ? "issue" : "Panding.."}
                            color={status === "issue" ? "green" : "blue-gray"}
                          />
                        </Link>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoanManagement;

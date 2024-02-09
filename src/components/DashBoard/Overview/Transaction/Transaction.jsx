import React, { useEffect } from "react";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  Spinner,
} from "@material-tailwind/react";
import useAuth from "../../../../Hooks/useAuth";
import useStatus from "../../../../Hooks/useStatus";
import useDarkMode from "../../../../Hooks/useDarkMode";
import useHistory from "../../../../Hooks/useHistory";

const Transaction = ({}) => {

  const { isPending, error, allDeposits, refetch } = useHistory();
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });
  const { darkMode, toggleDarkMode } = useDarkMode();

  const TABLE_HEAD = [
    "Transaction",
    "Amount",
    "Date",
    "Status",
    "Last 4 Digit",
  ];

  useEffect(() => {
    refetch();
  }, [user, userinfo?.acc_num]);


  return (
    <>
      <div className="px-2 py-7 rounded">
      <h4 className="text-xl font-medium ml-2 py-4">Last Transactions</h4>
      <Card
        className={`rounded shadow-none overflow-auto ${
          darkMode == true ? "bg-[#25324b] border-blue-gray-600" : "border "
        }`}
      >
        <CardBody className="py-0 px-0">
          <table className="w-full text-left overflow-auto">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className={` p-4 border-b  text-center ${
                      darkMode == true ? "border-b-blue-gray-600" : ""
                    }`}
                  >
                    <Typography
                      variant="small"
                      className={`font-normal leading-none ${
                        darkMode == true ? "text-gray-200" : "text-light-gray"
                      } `}
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isPending ? (
                <Spinner />
              ) : (
                <>
                  {allDeposits &&
                    allDeposits?.map((deposit) => (
                      <tr key={deposit._id}  className={` p-4 border-b  text-center ${
                        darkMode == true ? "border-b-blue-gray-600" : ""
                      }`}>
                        <td className="p-4" >
                          <Typography
                            variant="small"
                            color="blue-gray"
                             className={`capitalize ${
                              darkMode == true ? "text-gray-200" : "text-light-gray"
                            } `}
                          >
                            {deposit?.depsitBy}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` font-normal ${
                              darkMode == true ? "text-gray-200" : "text-light-gray"
                            } `}
                          >
                            ${deposit?.amount}
                          </Typography>
                        </td>
                        <td className="p-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className={` font-normal ${
                              darkMode == true ? "text-gray-200" : "text-light-gray"
                            } `}
                          >
                            {new Date(
                              deposit?.transactionDate
                            ).toLocaleString()}
                          </Typography>
                        </td>

                        <td className="p-4">
                          <Chip
                            size="sm"
                            variant="ghost"
                            value={deposit?.transactionType}
                            className="rounded "
                            color={
                              deposit?.transactionType === "deposit"
                                ? "green"
                                : "red"
                            }
                          />
                        </td>
                        <td className="p-4">
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className={` font-normal ${
                                darkMode == true ? "text-gray-200" : "text-light-gray"
                              } `}
                            >
                              {deposit?.depsitId}
                            </Typography>
                          </div>
                        </td>
                      </tr>
                    ))}
                </>
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      </div>
    </>
  );
};

export default Transaction;

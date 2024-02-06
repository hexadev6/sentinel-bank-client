import React from "react";
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

const Transaction = ({ allDeposits, isPending }) => {
  const TABLE_HEAD = [
    "Transaction",
    "Amount",
    "Date",
    "Status",
    "Last 4 Digit",
  ];

  return (
    <>
      <div className="px-2 py-7 rounded-lg shadow-lg">
      <h4 className="text-xl font-medium ml-2 py-4">Last Transactions</h4>
        <Card className='rounded border shadow-none overflow-auto'>
          <CardBody className='py-0 px-0'>
            <table className='w-full text-left overflow-auto'>
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className=' border-b p-4 text-center'>
                      <Typography
                        variant='small'
                        color='blue-gray'
                        className='font-normal leading-none  text-light-gray'>
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
                        <tr
                          key={deposit._id}
                          className=' border-b text-center '>
                          <td className='py-4'>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='capitalize'>
                              {deposit?.depsitBy}
                            </Typography>
                          </td>
                          <td className='py-4'>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='font-normal'>
                              ${deposit?.amount}
                            </Typography>
                          </td>
                          <td className='py-4'>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='font-normal'>
                              {new Date(
                                deposit?.transactionDate
                              ).toLocaleString()}
                            </Typography>
                          </td>

                          <td className='py-4'>
                            <Chip
                              size='sm'
                              variant='ghost'
                              value={deposit?.transactionType}
                              className='rounded '
                              color={
                                deposit?.transactionType === "deposit"
                                  ? "green"
                                  : "red"
                              }
                            />
                          </td>
                          <td className='py-4'>
                            <div className='flex flex-col'>
                              <Typography
                                variant='small'
                                color='blue-gray'
                                className='font-normal capitalize'>
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

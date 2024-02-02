import React from "react";
import useSingleAccount from "../../../Hooks/useSingleAccount";
import { Avatar, Card, Spinner, Typography } from "@material-tailwind/react";
import PropTypes from "prop-types";

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

const AccountDetails = ({ id }) => {
  const [account, isLoading, refetch] = useSingleAccount(id);
  console.log('from 38-------',account)
  if (isLoading)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Spinner color='blue' />
      </div>
    );

  const {
    holderEmail,
    holderName,
    profileImg,
    nominee,
    status,
    nidnumber,
    acc_num,
    documents,
    phnNumber,
    holderDOB,
    address,
    nationality,
    occupation,
    type,
    initial_deposit,
  } = account;
  console.log(account);
  return (
    <div className='flex items-center justify-center gap-2 md:gap-16 flex-col md:flex-row w-full'>
      <div className='text-center'>
        <Avatar src={profileImg} size='xxl' />

        <div>
          <h1 className='text-2xl font-bold text-nevy-blue mt-4'>
            Important Documents
          </h1>
          <hr className='my-2 border-1 border-green-600' />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-1'>
            {documents.map((document, idx) => (
              <img
                key={idx}
                className='w-20 h-20 rounded-md border-2 border-black'
                src={document}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center '>
        <Card className='h-full w-full'>
          <table className='w-full min-w-max table-auto text-left'>
            <tbody>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Account Holder
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {holderName}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Holder Email
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {holderEmail}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Account Number
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {acc_num}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Account Type
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {type}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Account Status
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {status}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Account Balance
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {initial_deposit}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Nominee Name
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {nominee}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    NID
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {nidnumber}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Phone Number
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {phnNumber}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Holder Date of Birth
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {holderDOB}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Address
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {address}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Nationality
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {nationality}
                  </Typography>
                </td>
              </tr>
              <tr className='w-full'>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-semibold'>
                    Occupation
                  </Typography>
                </td>
                <td className='p-4 border-b border-blue-gray-50'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'>
                    {occupation}
                  </Typography>
                </td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

AccountDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default AccountDetails;

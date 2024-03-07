import React, { useEffect } from "react";
import useSingleAccount from "../../../Hooks/useSingleAccount";
import {
  Avatar,
  Card,
  DialogHeader,
  Spinner,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import useDarkMode from "../../../Hooks/useDarkMode";

const AccountDetails = ({ id }) => {
  const [account, isLoading, refetch] = useSingleAccount(id);
  const { darkMode, toggleDarkMode } = useDarkMode();

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner color="blue" />
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
  return (
    <div
      className={` items-center justify-center gap-2 md:gap-16 w-full h-full`}
    >
      <div className="text-center">
        <img src={profileImg} className="w-52 h-52 rounded mx-auto" />
        <div>
          <h1
            className={`text-2xl font-bold  mt-4 ${
              darkMode ? "text-gray-300" : "text-nevy-blue"
            }`}
          >
            Important Documents
          </h1>
          <div className="flex flex-wrap justify-center gap-5 mt-6 mb-24">
            {documents.map((document, idx) => (
              <Zoom key={idx}>
                <img
                  className="w-20 h-20 rounded-md cursor-pointer"
                  src={document}
                />
              </Zoom>
            ))}
          </div>
        </div>
      </div>
      <DialogHeader
        className={` py-5 text-center  ${
          darkMode ? "text-gray-300" : "text-nevy-blue"
        } `}
      >
        Account Details
      </DialogHeader>
      <div className={`flex items-center justify-center `}>
        <Card
          className={`h-full w-full rounded border ${
            darkMode
              ? "text-gray-300 bg-[#25324b] border  border-blue-gray-400"
              : "bg-white"
          }`}
        >
          <table className="w-full min-w-max table-auto text-left">
            <tbody>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-semibold"
                  >
                    Account Holder
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {holderName}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-semibold"
                  >
                    Holder Email
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {holderEmail}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-semibold"
                  >
                    Account Number
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {acc_num}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-semibold"
                  >
                    Account Type
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {type}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-semibold"
                  >
                    Account Status
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {status}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-semibold"
                  >
                    Account Balance
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {initial_deposit}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-semibold"
                  >
                    Nominee Name
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {nominee}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-semibold"
                  >
                    NID
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-normal"
                  >
                    {nidnumber}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    // color="blue-gray"
                    className="font-semibold"
                  >
                    Phone Number
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {phnNumber}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Holder Date of Birth
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {holderDOB}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Address
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {address}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Nationality
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {nationality}
                  </Typography>
                </td>
              </tr>
              <tr className="w-full">
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-semibold"
                  >
                    Occupation
                  </Typography>
                </td>
                <td
                  className={`p-4 border-b ${
                    darkMode ? " border-blue-gray-400 " : "border-blue-gray-50 "
                  }}`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
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

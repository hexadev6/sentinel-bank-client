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
  IconButton,
  Spinner,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import swal from "sweetalert";

import useAllAccounts from "../../Hooks/useAllAccounts";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import AccountDetails from "../../components/DashBoard/AccountDetails/AccountDetails";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useDarkMode from "../../Hooks/useDarkMode";
const TABLE_HEAD = [
  "Account Holder",
  "Account Number",
  "NID",
  "Nominee",
  "Status",
  "Action",
  "",
];

const AccountManagement = () => {
  const [allAcounts, isLoading, refetch] = useAllAccounts();
  const axiosPublic = useAxiosPublic();
  const [open, setOpen] = useState(false);
  const [dialogId, setDialogId] = useState("");
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleOpen = (id) => {
    setOpen(!open);
    setDialogId(id);
  };
  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner color="blue" />
      </div>
    );

  const handleUpdataStatus = (id, status) => {
    swal({
      title: "Are you sure?",
      text: "Account status will be updated",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willUpdate) => {
      if (willUpdate) {
        const res = await axiosPublic.patch(`/updateAccount/${id}`, {
          status: status,
        });
        if (res.data.success) {
          refetch();
          swal("Poof! The account status is updated", {
            icon: "success",
          });
        }
      } else {
        swal("Account status is not updated!");
      }
    });
  };
  // console.log(allAcounts);
  return (
    <div className="px-4 py-4 ">
      {/* table */}
      <Card
        className={`w-full  rounded ${
          darkMode ? "text-gray-400 bg-[#25324b]" : "bg-white shadow-gray-100"
        }`}
      >
        <div
          className={`mb-8 flex items-center p-10 pb-0 justify-between gap-8${
            darkMode ? "text-gray-300 bg-[#25324b]" : "bg-white"
          }`}
        >
          <div>
            <Typography
              variant="h5"
              // color="blue-gray"
            >
              All Account list
            </Typography>
            <Typography
              // color="gray"
              className="mt-1 font-normal"
            >
              See information about all accounts
            </Typography>
          </div>
        </div>

        <CardBody className=" overflow-auto px-0">
          <table className="mt-4 w-full table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className={`border-y  p-4 ${
                      darkMode
                        ? "text-white border-blue-gray-400 "
                        : "bg-blue-gray-50/50 border-blue-gray-100 "
                    }`}
                  >
                    <Typography
                      variant="small"
                      // color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allAcounts.map(
                (
                  {
                    _id,
                    holderEmail,
                    holderName,
                    profileImg,
                    nominee,
                    status,
                    nidnumber,
                    acc_num,
                  },
                  index
                ) => {
                  const isLast = index === allAcounts.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : `${
                        darkMode
                          ? "p-4 border-b border-blue-gray-400"
                          : "p-4 border-b border-blue-gray-50"
                      }`;

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={profileImg} alt={holderName} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              // color="blue-gray"
                              className="font-normal"
                            >
                              {holderName}
                            </Typography>
                            <Typography
                              variant="small"
                              // color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {holderEmail}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            // color="blue-gray"
                            className="font-normal"
                          >
                            {acc_num}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            // color="blue-gray"
                            className="font-normal"
                          >
                            {nidnumber}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            // color="blue-gray"
                            className="font-normal"
                          >
                            {nominee}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={
                              status === "active" ? "Active" : "Not Active"
                            }
                            color={status === "active" ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Button
                          onClick={() => {
                            handleUpdataStatus(
                              _id,
                              status === "active" ? "not-active" : "active"
                            );
                          }}
                          color={status === "active" ? "red" : "green"}
                        >
                          {status === "active" ? "Deactivate" : "Activate"}
                        </Button>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Details">
                          <IconButton
                            onClick={() => {
                              handleOpen(_id);
                            }}
                            variant="text"
                          >
                            <CiMenuKebab className="h-6 w-6" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      {/* pop up menu */}
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className={` ${darkMode ? "text-gray-300 bg-[#25324b]" : "bg-white"} `}
      >
        <DialogBody>
          <AccountDetails id={dialogId} />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default AccountManagement;

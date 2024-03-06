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
import swal from "sweetalert";

import { useState } from "react";
import AccountDetails from "../../components/DashBoard/AccountDetails/AccountDetails";

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAllCard from "../../Hooks/useallCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useDarkMode from "../../Hooks/useDarkMode";

const TABLE_HEAD = [
  "Account Holder",
  "Account Number",
  "Card",
  "Type",
  "Status",
  "Action",
];

const CardManagement = () => {
  const [card, isLoading, refetch] = useAllCard();
  // console.log(card);
  const axios = useAxiosSecure();
  // const axios = useAxiosPublic();
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
        const res = await axios.patch(`/updateCard/${id}`, {
          status: status,
        });
        if (res?.data.success) {
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

  return (
    <div className="p-5">
      {/* table */}
      <Card
        className={`h-full w-full  rounded ${
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
              //  color="blue-gray"
            >
              All Card list
            </Typography>
            <Typography
              // color="gray"
              className="mt-1 font-normal"
            >
              See information about all Card
            </Typography>
          </div>
        </div>
        <CardBody className="overflow-x-scroll px-0 min-min-h-screen">
          <table className="mt-4 w-full min-w-max table-auto text-left">
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
                    // className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
              {card.map(
                (
                  {
                    _id,

                    name,
                    profileImg,
                    card_type,

                    status,
                    card,

                    acc_num,
                  },
                  index
                ) => {
                  const isLast = index === card?.length - 1;
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
                          <Avatar src={profileImg} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              // color="blue-gray"
                              className="font-normal"
                            >
                              {name}
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
                            {card}
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
                            {card_type}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={status === "issue" ? "issue" : "Not issue"}
                            color={status === "issue" ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Button
                          onClick={() => {
                            handleUpdataStatus(
                              _id,
                              status === "issue" ? "not-issue" : "issue"
                            );
                          }}
                          color={status === "issue" ? "red" : "green"}
                        >
                          {status === "issue" ? "Deactivate" : "Activate"}
                        </Button>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      {/* pop up menu
      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        className={` ${darkMode ? "text-gray-300 bg-[#25324b]" : "bg-white"} `}
      >
        <DialogHeader>Account Details</DialogHeader>
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
      </Dialog> */}
    </div>
  );
};

export default CardManagement;

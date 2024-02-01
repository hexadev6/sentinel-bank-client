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
import swal from 'sweetalert';


import useAllAccounts from "../../Hooks/useAllAccounts";
import { CiMenuKebab } from "react-icons/ci";
import { useState } from "react";
import AccountDetails from "../../components/DashBoard/AccountDetails/AccountDetails";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const TABLE_HEAD = ["Account Holder","Account Number", "NID", "Nominee", "Status", "Action", ""];

const AccountManagement = () => {
  const [allAcounts, isLoading, refetch] = useAllAccounts();
const axiosPublic = useAxiosPublic();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  if (isLoading)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Spinner color='blue' />
      </div>
    );


    const handleUpdataStatus =  (id, status) => {
      swal({
        title: "Are you sure?",
        text: "Account status will be updated",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(async(willUpdate) => {
        if (willUpdate) {
          const res = await axiosPublic.patch(`/updateAccount/${id}`, {status: status})
          if(res.data.success) {
            refetch();
            swal("Poof! The account status is updated", {
              icon: "success",
            });
          }
        } else {
          swal("Account status is not updated!");
        }
      });
    }
  console.log(allAcounts);
  return (
    <div className='px-8 py-8'>
      {/* table */}
      <Card className='h-full w-full'>
        <CardHeader floated={false} shadow={false} className='rounded-none'>
          <div className='mb-8 flex items-center justify-between gap-8'>
            <div>
              <Typography variant='h5' color='blue-gray'>
                All Account list
              </Typography>
              <Typography color='gray' className='mt-1 font-normal'>
                See information about all accounts
              </Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className='overflow-scroll px-0'>
          <table className='mt-4 w-full min-w-max table-auto text-left'>
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className='border-y border-blue-gray-100 bg-blue-gray-50/50 p-4'>
                    <Typography
                      variant='small'
                      color='blue-gray'
                      className='font-normal leading-none opacity-70'>
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
                    acc_num
                  },
                  index
                ) => {
                  const isLast = index === allAcounts.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className='flex items-center gap-3'>
                          <Avatar src={profileImg} alt={holderName} size='sm' />
                          <div className='flex flex-col'>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='font-normal'>
                              {holderName}
                            </Typography>
                            <Typography
                              variant='small'
                              color='blue-gray'
                              className='font-normal opacity-70'>
                              {holderEmail}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {acc_num}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {nidnumber}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className='flex flex-col'>
                          <Typography
                            variant='small'
                            color='blue-gray'
                            className='font-normal'>
                            {nominee}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className='w-max'>
                          <Chip
                            variant='ghost'
                            size='sm'
                            value={
                              status === "active" ? "Active" : "Not Active"
                            }
                            color={status === "active" ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Button onClick={() => {
                          handleUpdataStatus(_id, status === 'active' ? "not-active":"active")
                        }} color={status === "active" ? "red" : "green"}>
                          {status === "active" ? "Deactivate" : "Activate"}
                        </Button>
                      </td>
                      <td className={classes}>
                        <Tooltip content='Details'>
                          <IconButton
                            onClick={() => {
                              handleOpen();
                            }}
                            variant='text'>
                            <CiMenuKebab className='h-6 w-6' />
                          </IconButton>
                        </Tooltip>
                        {/* pop up menu */}
                        <Dialog size='xl' open={open} handler={handleOpen}>
                          <DialogHeader>Account Details</DialogHeader>
                          <DialogBody>
                            <AccountDetails id={_id} />
                          </DialogBody>
                          <DialogFooter>
                            <Button
                              variant='text'
                              color='red'
                              onClick={handleOpen}
                              className='mr-1'>
                              <span>Close</span>
                            </Button>
                          </DialogFooter>
                        </Dialog>
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

export default AccountManagement;

import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Button, Chip, Spinner } from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";
import useStatus from "../../../Hooks/useStatus";
import swal from "sweetalert";
import toast from "react-hot-toast";

const AllAccounts = ({ allUsers, isPending }) => {
  const { user } = useAuth();
  const { userinfo ,refetch} = useStatus({ email: user?.email });
  const axiosPublic = useAxiosPublic();

  const HandleSwitch = (accountNumber, status) => {
    const id = userinfo._id;
    if (status === "active") {
      swal({
        title: "Are you sure?",
        text: "You will switch into another account",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willUpdate) => {
        if (willUpdate) {
          await axiosPublic
            .patch(`/updateUser/${id}`, { acc_num: accountNumber })
            .then((res) => {
              if (res.data.data!=null) {
                swal("Poof! You have switched successfully", {
                  icon: "success",
                });
                refetch()
              } else {
                swal("Account switching is not possible at this moment!");
              }
            })
            .catch(err=>{
              console.log(err)
            })
        }
      });
    } else {
      toast.error(`Switch is not allow for ${status} account`);
    }
  };

  return (
    <div className="flex flex-wrap gap-5 justify-start content-start col-span-2 h-full">
      {isPending ? (
        <Spinner color="indigo" />
      ) : (
        <>
          {allUsers?.map((user) => (
            <div
              key={user._id}
              className="p-6 shadow-lg w-full flex flex-col md:h-fit hover:bg-blue-gray-50 duration-300 transition"
              onClick={() => HandleSwitch(user?.acc_num, user?.status)}
            >
              <h1 className="text-lg font-semibold">{user?.type} Account</h1>
              <p className="text-gray-500 text-sm">
                Account no. {user?.acc_num}
              </p>
              <p className="mb-4 text-gray-500 text-sm flex-1">
                Nominee: {user?.nominee}
              </p>
              <Chip
                className="w-fit"
                variant="ghost"
                size="sm"
                value={user?.status === "active" ? "Active" : "Not Active"}
                color={user?.status === "active" ? "green" : "blue-gray"}
              />
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default AllAccounts;

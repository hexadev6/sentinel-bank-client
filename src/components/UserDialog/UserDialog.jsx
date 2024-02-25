import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
const UserDialog = ({ userinfo, refetch }) => {
  const [open, setOpen] = React.useState(false);
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit } = useForm();
  const handleOpen = () => setOpen(!open);
  const { _id, name, email, dateOfBirth, mobile, location, nationality } =
    userinfo || {};
  // console.log("user",userinfo);
  const onSubmit = async (data) => {
    const updateProfile = {
      name: data?.name,
      DOB: data?.DOB,
      email: email,
      mobile: data?.mobile,
      location: data?.location,
      nationality: data?.nationality,
    };
    // console.log(updateProfile);
    await axiosSecure
      .patch(`/updateUser/${_id}`, updateProfile)
      .then((res) => {
        // console.log(res.data.message=='success');
        if (res.data.message == "success") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        refetch();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex sm:flex-nowrap flex-wrap gap-3 mt-16 justify-end">
        <Link to="/">
          <Button variant="outlined" className="rounded">Go Home</Button>
        </Link>
        <Button onClick={handleOpen}  variant="outlined" className=" rounded " >
          Edit Profile
        </Button>
      </div>
      <Dialog open={open} size="md" handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader className="flex flex-col items-start"></DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogBody>
            <div className="grid gap-6">
              <Input
                {...register("name")}
                defaultValue={name}
                label="Username"
              />
              <Input
                {...register("DOB")}
                defaultValue={dateOfBirth}
                type="date"
                label="Date of birth"
              />
              <Input
                disabled
                {...register("email")}
                defaultValue={email}
                label="Email"
              />
              <Input
                {...register("mobile")}
                defaultValue={mobile}
                label="Mobile"
              />
              <Input
                {...register("location")}
                defaultValue={location}
                label="Location"
              />
              <Input
                {...register("nationality")}
                defaultValue={nationality}
                label="Nationality"
              />
            </div>
          </DialogBody>
          <DialogFooter className="space-x-2">
            <Button variant="text" color="gray" onClick={handleOpen}>
              Cancel
            </Button>
            <Button
              onClick={handleOpen}
              variant="gradient"
              type="submit"
              color="gray"
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default UserDialog;

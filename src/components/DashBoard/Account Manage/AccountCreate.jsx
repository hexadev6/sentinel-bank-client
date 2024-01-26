import React from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import axios from "axios";
import toast from "react-hot-toast";

const AccountCreate = () => {
  const HandleCreatAcc = (e) => {
    e.preventDefault();
    console.log(e);

    const form = e.target;

    const name = form.holder_name.value;
    const num = form.holder_number.value;
    const nid = form.holder_nid.value;
    const nominee = form.nominee.value;
    const refernumber = form.reference.value;

    const accountInfo = {
      ac_name: name,
      ac_num: num,
      nid: nid,
      no_name: nominee,
      number: refernumber,
    };
    console.log(accountInfo);

    axios
      .post("http://localhost:5000/createAccount")
      .then((res) => {
        if (res.data.insertedId) {
          toast.success(
            "Your application has been submitted. Wait for next response!"
          );
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-xl  shadow p-5">
      <div>
        <Typography variant="h4" color="blue-gray" className="text-nevy-blue">
          Open a Bank Account
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Start your journey to a seamless experience by
          opening a bank account with us today!.
        </Typography>
        <form className="mt-8 mb-2  " onSubmit={HandleCreatAcc}>
          <div className="mb-1 flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-between  items-center">
              <div className="flex flex-col gap-3">
                {/* account holder name */}
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-light"
                >
                  Your Name
                </Typography>
                <input
                  name="holder_name"
                  type="text"
                  placeholder="examle name"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* reference account number */}
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-light"
                >
                  Give Reference Account Number
                </Typography>
                <input
                  type="number"
                  name="reference"
                  placeholder="xxxxxxxxxxxxxxxxxxx"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
            </div>
            {/* holder nid number */}
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 font-light"
            >
              Your NID Number
            </Typography>
            <input
              type="number"
              name="holder_nid"
              placeholder="xxxxxxxxxxxxxx"
              className="  py-2 px-4 border rounded outline-0"
            />

            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3 justify-between  items-center">
              <div className="flex flex-col gap-3">
                {/* holder number */}
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-light"
                >
                  Your Number
                </Typography>
                <input
                  type="number"
                  name="holder_number"
                  placeholder="017XXXXXXXX"
                  className="  py-2 px-4 border rounded outline-0"
                />
              </div>
              <div className="flex flex-col gap-3">
                {/* account nominee name */}
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="-mb-3 font-light"
                >
                  Nominee Name
                </Typography>
                <input
                  name="nominee"
                  type="text"
                  placeholder="name@mail.com"
                  className="   py-2 px-4 border rounded outline-0"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              variant="text"
              className="border hover:bg-black py-2 px-4 hover:text-text-white mt-3  rounded bg-nevy-blue text-white"
            >
              Submit your information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountCreate;

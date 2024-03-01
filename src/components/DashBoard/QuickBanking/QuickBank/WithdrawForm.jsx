import React, { useState } from "react";
import useDarkMode from "../../../../Hooks/useDarkMode";
import useStatus from "../../../../Hooks/useStatus";
import useFindByAccNum from "../../../../Hooks/useFindByAccNum";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { Button, Input, Typography } from "@material-tailwind/react";

const WithdrawForm = ({ userInfo, refetch }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const currentDate = new Date(Date.now()).toLocaleString();

  const { userinfo } = useStatus({ email: userInfo?.userEmail });
  const [accountByNum, isLoading] = useFindByAccNum();
  const axiosPublic = useAxiosPublic();

  const HandleWithdrawPay = (e) => {
    e.preventDefault();
    const paymentInfo = {
      amount: userInfo.depoAmount,
      userEmail: accountByNum.holderEmail,
      userName: accountByNum.holderName,
      address: accountByNum.address,
      number: accountByNum.phnNumber,
      acc_Num: userinfo.acc_num,
      transactionType: "withdraw",
      transactionDate: currentDate,
    };

    console.log(paymentInfo);
    axiosPublic
      .post("/ssl-banking", paymentInfo)
      .then((res) => {
        // console.log("url====", res.data);
        window.location.replace(res.data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      id="payment-form"
      onSubmit={HandleWithdrawPay}
      className={`shadow-lg p-5 mt-5 ${
        darkMode ? "bg-[#25324b] text-blue-gray-200" : ""
      }`}
    >
      <Typography variant="h3" className=" text-center mb-5 ">
        Withdraw From your account
      </Typography>
      <Typography variant="h6" className=" text-lg font-normal  capitalize">
        Account Holder: {userInfo?.userName}
      </Typography>
      <Typography variant="h6" className=" text-lg font-normal ">
        Withdraw Amount: {userInfo.depoAmount}$
      </Typography>
      <Typography variant="h6" className=" text-lg font-normal mb-5">
        Withdraw Date: {currentDate}
      </Typography>

      <div className="text-right">
        <button
          type="submit"
          className="uppercase w-full mt-2 py-2 px-5 tracking-widest text-white btn border-none btn-outline bg-nevy-blue rounded"
        >
          Comfirm Withdraw
        </button>
      </div>
    </form>
  );
};

export default WithdrawForm;

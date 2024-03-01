import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Typography } from "@material-tailwind/react";
import useStatus from "../../../../Hooks/useStatus";
import useDarkMode from "../../../../Hooks/useDarkMode";
import useFindByAccNum from "../../../../Hooks/useFindByAccNum";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";

const CheckoutForm = ({ userInfo, refetch }) => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  const currentDate = new Date(Date.now()).toLocaleString();
  const { userinfo } = useStatus({ email: userInfo?.userEmail });
  const [accountByNum, isLoading] = useFindByAccNum();
  const axiosPublic = useAxiosPublic();

  const HandlePayment = (e) => {
    e.preventDefault();
    const paymentInfo = {
      amount: userInfo?.depoAmount,
      userEmail: accountByNum?.holderEmail,
      userName: accountByNum?.holderName,
      address: accountByNum?.address,
      number: accountByNum?.phnNumber,
      acc_Num: userinfo?.acc_num,
      transactionType: "deposit",
      transactionDate: currentDate,
    };
console.log(paymentInfo )

    axiosPublic.post("/ssl-banking", paymentInfo)
      .then((res) => {
        console.log("url====", res.data.url);
        console.log(res.data)
        window.location.replace(res.data.url);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      id="payment-form"
      onSubmit={HandlePayment}
      className={`shadow-lg p-5 mt-5 ${
        darkMode ? "bg-[#25324b] text-blue-gray-200" : ""
      }`}
    >
      <Typography variant="h3" className=" text-center mb-5 ">
        Deposit in your account
      </Typography>
      <Typography variant="h6" className=" text-lg font-normal  capitalize">
        Account Holder: {userInfo?.userName}
      </Typography>
      <Typography variant="h6" className=" text-lg font-normal ">
        Deposit Amount: {userInfo.depoAmount}$
      </Typography>
      <Typography variant="h6" className=" text-lg font-normal mb-5">
        Deposit Date: {currentDate}
      </Typography>
    
      <div className="text-right">
        <button
          type="submit"
          className="uppercase w-full mt-2 py-2 px-5 tracking-widest text-white btn border-none btn-outline bg-nevy-blue rounded"
        >
          Comfirm Deposit
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;

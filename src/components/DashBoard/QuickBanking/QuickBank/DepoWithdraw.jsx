import React, { useEffect, useState } from "react";
import History from "./History";
import { Button, Input, Radio } from "@material-tailwind/react";
import toast from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useAuth from "../../../../Hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_Payment);

const DepoWithdraw = ({
  total,
  setTotal,
  setDeposit,
  setWithdraw,
  deposit,
  withdraw,
}) => {
  // state
  const [depoMethod, setDepoMethod] = useState(false);
  const [depoAmount, setDepoAmount] = useState(0);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [isTrue, setIsTrue] = useState(false);
const { user} =useAuth()


  // history function
  const recordTransaction = (type, amount) => {
    const newTransaction = {
      type,
      amount,
    };
    setTransactionHistory((prevHistory) => [...prevHistory, newTransaction]);
  };

  // deposit func
  const HandleDeposit = (e) => {
    e.preventDefault();
    const newDeposit = e.target.elements.deposit.value;
    setDepoAmount(newDeposit);
    setDepoMethod(true);
  };

  
  const userInfo = {
    userName : user?.displayName,
    userEmail : user?.email,
    depoAmount:depoAmount
  }

  // withdraw func
  const HandleWithdraw = (e) => {
    e.preventDefault();
    const newWithdraw = e.target.elements.withdraw.value;
    if (total >= newWithdraw) {
      const newAmount = total - parseFloat(newWithdraw);

      console.log(newAmount);
      setWithdraw(withdraw+parseFloat(newWithdraw));
      setTotal(newAmount);
      recordTransaction("withdraw", newWithdraw);
    } else {
      toast.error("You don't have sufficient balance");
    }
  };

  // deposit info store
  const depositInfo = {
    amount: depoAmount,
    name: "hema",
    email: "demo@gmail.com",
    totalAmount: total,
  };

  // payment handle
  const HandlePayment = (e) => {
    console.log(e.target.value);
    setIsTrue(true);
  };

  // other method handle
  const HandleOthers = () => {
    setIsTrue(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-start mt-5">
      <div className="">
        {/* deposite input */}
        <form className="flex flex-wrap sm:flex-nowrap gap-2 " onSubmit={HandleDeposit}>
          <Input
            label="Deposit Amount"
            className="rounded h-full"
            name="deposit"
          />
          <Button
            variant="outlined"
            className="sm:w-fit w-full flex-shrink-0 rounded border border-nevy-blue"
            type="submit"
          >
            Deposit Money
          </Button>
        </form>
        {/* withdraw input */}
        <form className="flex gap-2 mt-2 flex-wrap sm:flex-nowrap" onSubmit={HandleWithdraw}>
          <Input
            label="Withdraw Amount"
            className="rounded h-full"
            name="withdraw"
          />
          <Button
            variant="outlined"
            className="sm:w-fit w-full flex-shrink-0 rounded border border-nevy-blue"
            type="submit"
          >
            Withdraw Money
          </Button>
        </form>
        {/* deposit method */}
        <div>
          {depoMethod && (
            <div className="p-5 border shadow mt-3">
              <div className="flex flex-wrap gap-2 justify-between items-center">
                <div className="flex gap-2 ">
                  <Radio name="type" label="Bkash" onClick={HandleOthers} />
                  <img
                    src={
                      "https://freelogopng.com/images/all_img/1656235223bkash-logo.png"
                    }
                    alt=""
                    className="w-10 h-10  rounded-full"
                  />
                </div>
                <div className="flex gap-2 ">
                  <Radio name="type" label="Nagad" onClick={HandleOthers} />
                  <img
                    src={
                      "https://freelogopng.com/images/all_img/1679248787Nagad-Logo.png"
                    }
                    alt=""
                    className="w-10 h-10  rounded-full"
                  />
                </div>
                <div className="flex gap-2 ">
                  <Radio name="type" label="Rocket" onClick={HandleOthers} />
                  <img
                    src={
                      "https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png"
                    }
                    alt=""
                    className="w-10 h-10  rounded-full"
                  />
                </div>
                <div className="flex gap-2 ">
                  <Radio
                    name="type"
                    label="Stripe"
                    onClick={HandlePayment}
                    value="stripe"
                  />
                  <img
                    src={
                      "https://cdn-icons-png.flaticon.com/512/5968/5968312.png"
                    }
                    alt=""
                    className="w-10 h-10  rounded-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* stripe card pay */}
        <div>
        {isTrue &&  (
        <Elements  stripe={stripePromise}>
          <CheckoutForm
          userInfo={userInfo}
           />
        </Elements>
      )}

      

        </div>
      </div>
      {/* history show */}
      <div>
        <History
          recordTransaction={recordTransaction}
          transactionHistory={transactionHistory}
          withdraw={withdraw}
        />
      </div>
    </div>
  );
};

export default DepoWithdraw;

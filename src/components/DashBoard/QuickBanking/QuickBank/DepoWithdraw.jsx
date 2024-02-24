import React, { useEffect, useState } from "react";
import { Button, Input, Radio } from "@material-tailwind/react";
import CheckoutForm from "./CheckoutForm";
import Transaction from "../../Overview/Transaction/Transaction";
import useDarkMode from "../../../../Hooks/useDarkMode";
import WithdrawForm from "./WithdrawForm";
import swal from "sweetalert";


const DepoWithdraw = ({
  refetch,
  user,
  getTotalBalance
}) => {
  // state
  const [depoAmount, setDepoAmount] = useState(0);
  // const [transactionHistory, setTransactionHistory] = useState([]);
  // const [depositBy, setDepositBy] = useState("");
  const [isDepoTrue, setIsDepoTrue] = useState(false);
  const [isWDTrue, setIsWDTrue] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  // deposit func
  const HandleDeposit = (e) => {
    e.preventDefault();
    const newDeposit = e.target.elements.deposit.value;
    setDepoAmount(newDeposit);
    setIsDepoTrue(true);
    setIsWDTrue(false)
  };

  const userInfo = {
    userName: user?.displayName,
    userEmail: user?.email,
    depoAmount: depoAmount,
  };

  // withdraw func
  const HandleWithdraw = (e) => {
    e.preventDefault();
    const newWithdraw = e.target.elements.withdraw.value;
    if (newWithdraw > getTotalBalance) {
      setIsDepoTrue(false);
      swal("Your don't have sufficient balance");
      return;
    }
    else{
      setDepoAmount(newWithdraw);
      setIsWDTrue(true);
      setIsDepoTrue(false);
    }
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 justify-center items-start mt-5">
      <div className="grid-cols-1 md:grid-cols-2 grid gap-5 justify-between items-center">
        {/* deposite input */}
        <form
          className="flex flex-wrap  gap-2  p-10 py-9 rounded bg-nevy-blue"
          onSubmit={HandleDeposit}
        >
          <Input
            label="Deposit Amount"
            required
            color="white"
            className="rounded h-full"
            name="deposit"
          />
          <Button
            variant="outlined"
            className={` w-full flex-shrink-0 rounded   ${
              darkMode
                ? "bg-[#25324b] text-blue-gray-200 border-0"
                : "bg-white border-0"
            }`}
            type="submit"
          >
            Deposit Money
          </Button>
        </form>
        {/* withdraw input */}
        <form
          className="flex gap-2  flex-wrap  p-10 py-9 rounded bg-nevy-blue"
          onSubmit={HandleWithdraw}
        >
          <Input
                      color="white"

            label="Withdraw Amount"
            className="rounded h-full"
            name="withdraw"
            required
          />
          <Button
            variant="outlined"
            className={`w-full flex-shrink-0 rounded   ${
              darkMode
                ? "bg-[#25324b] text-blue-gray-200 border-0"
                : "bg-white border-0"
            }`}
            type="submit"
          >
            Withdraw Money
          </Button>
        </form>

        <div>
          {isDepoTrue && <CheckoutForm userInfo={userInfo} refetch={refetch} />}
          {isWDTrue && <WithdrawForm userInfo={userInfo} refetch={refetch} />}
        </div>
      </div>
      {/* history show */}
      <div>
        <Transaction />
      </div>
    </div>
  );
};

export default DepoWithdraw;

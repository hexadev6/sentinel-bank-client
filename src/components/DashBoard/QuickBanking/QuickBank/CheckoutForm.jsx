import React, { useState } from "react";
import { CardElement, useElements } from "@stripe/react-stripe-js";
import { Button } from "@material-tailwind/react";
import toast from "react-hot-toast";

const CheckoutForm = ({ depositInfo, setTotal, setDeposit,recordTransaction ,deposit}) => {
  const [error, setError] = useState();

  const elements = useElements();

  // payment handle
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("works");

    const card = elements.getElement(CardElement);
    if (card == null) {
      setError("Card is not valid");
      return;
    }

    toast.success("Your Deposit successfully done!");
    const newAmount = depositInfo.totalAmount + parseFloat(depositInfo.amount);
    setTotal(newAmount);
    setDeposit(parseFloat(depositInfo.amount)+deposit);
    recordTransaction("deposit", depositInfo.amount);

  };

  return (
    <form className="p-5 mt-3 border shadow-md">
      {/* payment card */}
      <CardElement
        className="text-white input-bordered input p-3 rounded-none"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "black",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {error != "" && (
        <p className="text-nevy-blue font-medium  my-2">{error}</p>
      )}

      <div className="text-right">
        <Button
          onClick={handleSubmit}
          variant="text"
          className="border hover:bg-black hover:text-text-white rounded bg-nevy-blue text-white"
        >
          Deposit
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;

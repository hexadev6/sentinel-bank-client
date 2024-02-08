import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Typography } from "@material-tailwind/react";
import useStatus from "../../../../Hooks/useStatus";
import useDarkMode from "../../../../Hooks/useDarkMode";

const CheckoutForm = ({ userInfo ,refetch}) => {
  const stripe = useStripe();
  const elements = useElements();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const currentDate = new Date(Date.now()).toLocaleString();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [clientSecret, setClientSecret] = useState("");

  const { userinfo } = useStatus({ email: userInfo?.userEmail });

  useEffect(() => {
    if (userInfo.depoAmount != undefined) {
      axios
        .post("http://localhost:5000/create-payment-intent", userInfo)
        .then((res) => {
          // console.log(res.data)
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const HandlePayment = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !userInfo.depoAmount) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.

      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      // console.log("[PaymentMethod]", paymentMethod.card);
      setError("");
    }

    // confirm payment

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userInfo?.userName || "anonymous",
            email: userInfo?.userEmail || "anonymous",
          },
        },
      });

    if (confirmError) {
      setSuccess("");
      setError(confirmError.message);

      // console.log("error payment intent", confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        // console.log("Payment success. Transaction ID : ", paymentIntent);

        if (paymentMethod.card) {
          const depositInfo = {
            acc_Num: userinfo.acc_num,
            userEmail: userInfo?.userEmail,
            transactionType: "deposit",
            amount: parseFloat(userInfo?.depoAmount),
            depsitBy: paymentMethod?.card?.brand,
            depsitId: parseInt(paymentMethod?.card?.last4),
            transactionDate: currentDate,
          };

          // console.log(depositInfo);
            axios
          .post("http://localhost:5000/deposit", depositInfo)
          .then((res) => {
            // console.log(res.data);
            setSuccess("Your deposit is successfully done");
            refetch()
          })
          .catch((error) => {
            console.log(error);
          });
        }
      }
    }
  };

  return (
    <form
      id="payment-form"
      onSubmit={HandlePayment}
      className={`shadow p-5 mt-5 ${
        darkMode ? "bg-[#25324b] text-blue-gray-200" : ""
      }`}

    >
      <Typography variant="h3"  className=" text-center mb-5 ">
        Deposit in your account
      </Typography>
      <Typography
        variant="h6"
        className=" text-lg font-normal  capitalize"
      >
        Account Holder: {userInfo?.userName}
      </Typography>
      <Typography
        variant="h6"
        className=" text-lg font-normal "
      >
        Deposit Amount: {userInfo.depoAmount}$
      </Typography>
      <Typography
        variant="h6"
        className=" text-lg font-normal mb-5"
      >
        Deposit Date: {currentDate}
      </Typography>
      <CardElement
      className={`text-white p-3 rounded${
        darkMode ? "" : "border"
      }`}
    
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "blue-gray",
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

      {/* ------------- */}
      {error != "" && <p className="font-roboto my-2">{error}</p>}
      {success != "" && (
        <p className="text-black font-roboto my-2">{success}</p>
      )}

      <div className="text-right">
        <button
          disabled={!stripe || !clientSecret}
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

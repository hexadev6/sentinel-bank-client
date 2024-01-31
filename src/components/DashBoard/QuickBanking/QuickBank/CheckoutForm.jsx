import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Input, Typography } from "@material-tailwind/react";

const CheckoutForm = ({ userInfo }) => {
  const stripe = useStripe();
  const elements = useElements();

  // console.log(userInfo);
  //   state
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [clientSecret, setClientSecret] = useState("");

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
      console.log("[PaymentMethod]", paymentMethod);
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

      console.log("error payment intent", confirmError.message);
    } else {
      if (paymentIntent.status === "succeeded") {
        console.log("Payment success. Transaction ID : ", paymentIntent?.id);
        axios
          .post("http://localhost:5000/transactions", userInfo)
          .then((res) => {
            console.log(res.data);
            setSuccess("Your deposit is successfully done");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  return (
    <form
      id="payment-form"
      onSubmit={HandlePayment}
      className="shadow p-5 mt-5"
    >
     

      <Typography
        variant="h6"
        color="blue-gray"
        className=" text-lg font-normal mb-5"
      >
        Deposit Amount: {userInfo.depoAmount}
      </Typography>
      <CardElement
        className="text-white border p-3 rounded"
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

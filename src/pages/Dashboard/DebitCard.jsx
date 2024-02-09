import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useStatus from "../../Hooks/useStatus";
import useAuth from "../../Hooks/useAuth";
import useFindsingleByAC from "../../Hooks/usefindsingleByAC";

const DebitCard = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });
  console.log(userinfo);
  const account = useFindsingleByAC(userinfo?.acc_num);

  console.log(account);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const cardinfo = {
      ...data,
      acc_num: account[0]?.acc_num,
      profileImg: account[0]?.profileImg,
      card: "debit",
      status: "not issue",
    };
    console.log(cardinfo);
    axios
      .post(`/applicationCard`, cardinfo)
      .then((result) => console.log(result.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className=" mt-8 p-6 border rounded-lg shadow-lg bg-white mx-20 px-20">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Apply for debit Card
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-5 w-full justify-between mb-4">
          <div className="flex-1">
            <Input
              type="text"
              name="name"
              label="Name:"
              defaultValue={account[0]?.holderName}
              {...register("name", { required: true })}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="flex-1">
            <Input
              type="text"
              name="address"
              label="address:"
              defaultValue={account[0]?.address}
              {...register("address", { required: true })}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>
        <div className="flex gap-5 w-full justify-between mb-4">
          <div className="flex-1">
            <Input
              type="text"
              name="city"
              label="city :"
              {...register("city", { required: true })}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="flex-1">
            <Input
              type="text"
              name="Nationality"
              label="Nationality:"
              defaultValue={account[0]?.nationality}
              {...register("nationality", { required: true })}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>

        <div className="flex gap-5 w-full justify-between mb-4">
          <div className="flex-1">
            <Input
              type="number"
              name="phnNumber"
              label="Phone:"
              defaultValue={account[0]?.phnNumber}
              {...register("phnNumber", { required: true })}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="flex-1">
            <Input
              type="text"
              name="zipCode"
              label="ZIP Code:"
              {...register("zipCode", { required: true })}
              className="w-full border rounded px-4 py-2"
            />
          </div>
        </div>
        <div className="flex gap-5 w-full justify-between mb-4">
          <div className="flex-1">
            <Input
              type="email"
              name="email"
              label="Email:"
              defaultValue={account[0]?.holderEmail}
              {...register("email", { required: true })}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="flex-1">
            <select
              {...register("card_type", { required: true })}
              className="w-full border py-2 rounded-md"
            >
              <option value="MasterCard">MasterCard</option>
              <option value="Visa">Visa</option>
              <option value="International">International</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DebitCard;

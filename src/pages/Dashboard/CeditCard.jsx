import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useStatus from "../../Hooks/useStatus";
import useAuth from "../../Hooks/useAuth";
import useFindsingleByAC from "../../Hooks/useFindsingleByAC";
import { useNavigate } from "react-router-dom";

const CeditCard = () => {
  const axios = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });

  const account = useFindsingleByAC(userinfo?.acc_num);
  const notify = () =>
    toast("application successfuly ", {
      duration: 4000,
      position: "top-right",

      // Styling
      style: {},
      className: "",

      // Custom Icon
      icon: "👏",

      // Change colors of success/error/loading icon
      iconTheme: {
        primary: "#000",
        secondary: "#fff",
      },

      // Aria
      ariaProps: {
        role: "status",
        "aria-live": "polite",
      },
    });

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
      card: "Cedit",
      status: "not issue",
    };
    // console.log(cardinfo);
    axios
      .post(`/applicationCard`, cardinfo)
      .then(() => {
        notify();
        navigate(`/dashboard/user/overview`);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" p-5 rounded-lg shadow-lg m-5 min-h-screen ">
      <h2 className="text-2xl font-bold mb-10 text-center">
        Apply for Cedit Card
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col md:flex-row gap-5 w-full justify-between mb-4">
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
        <div className="flex flex-col md:flex-row gap-5 w-full justify-between mb-4">
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

        <div className="flex flex-col md:flex-row gap-5 w-full justify-between mb-4">
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
        <div className="flex flex-col md:flex-row gap-5 w-full justify-between mb-4">
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
              className="w-full border py-2 rounded-md bg-transparent"
            >
              <option value="MasterCard">MasterCard</option>
              <option value="Visa">Visa</option>
              <option value="International">International</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="border ease-linear duration-300 hover:bg-nevy-blue hover:text-white font-bold py-2 px-4 rounded md:w-auto w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CeditCard;

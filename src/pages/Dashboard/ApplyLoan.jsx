import {
  Checkbox,
  Input,
  Option,
  Radio,
  Select,
} from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useStatus from "../../Hooks/useStatus";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { MdRotateLeft } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const ApplyLoan = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [select, setSelect] = useState("House Buying");
  const [loanSubmit, setLoanSubmit] = useState("");
  const [duration, setDuration] = useState("");
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    data.loanPurpose = select;
    data.acc_num = userinfo?.acc_num;
    data.profileImg = userinfo?.image;
    data.userId = userinfo?._id;
    data.duration = duration;
    data.loanSubmit = loanSubmit;
    const toastLoding = toast.loading("Loding...");
    if (consent1 && consent2) {
      // console.log(data);
      setError("");
      axios
        .post("/applyLoan", data)
        .then((result) => {
          // console.log(result?.data?.result?._id);
          const loanId = result?.data?.result?._id;
          const loanStatus = { loanId };
          axios
            .patch(`/updateUser/${userinfo._id}`, { loanStatus })
            .then(navigate(`/dashboard/LoanOverview/${loanId}`))
            .catch();
          setLoading(false);
          toast.success("Success", { id: toastLoding });
        })
        .catch((err) => {
          toast.error(err.message, { id: toastLoding });
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(false);
      // console.log("please select Consent");
      setError("Please file input file");
    }
  };
  return (
    <div className="m-5 shadow-2xl p-5">
      <h1 className="text-xl font-bold">Loan Application Form</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {" "}
          <Input
            label="Desired Loan Amount "
            placeholder="$0"
            {...register("loanAmount", { required: true })}
          />
          <Input
            label="Annual Income"
            placeholder="$0"
            {...register("anIncome", { required: true })}
          />
          <Input
            label="occupation"
            placeholder="job title"
            {...register("occupation", { required: true })}
          />
          <Input
            label="monthly income"
            placeholder="$0"
            {...register("mnIncome", { required: true })}
          />
          <Select label="Duration">
            <Option onClick={() => setDuration("6")}> 6-month </Option>
            <Option onClick={() => setDuration("12")}>12-month</Option>
            <Option onClick={() => setDuration("24")}>24-month</Option>
          </Select>
          <Select label="Loan Submit">
            <Option onClick={() => setLoanSubmit("weekly")}> weekly </Option>
            <Option onClick={() => setLoanSubmit("monthly")}>Monthly</Option>
          </Select>
        </div>
        <p className="mt-5">Loan will be used for</p>
        <div className="flex gap-2 text-xs flex-wrap">
          <Radio
            onClick={() => setSelect("Business Launching")}
            name="type"
            defaultChecked
            label="Business Launching"
          />
          <Radio
            onClick={() => setSelect("House Buying")}
            name="type"
            label="House Buying"
          />
          <Radio
            onClick={() => setSelect("House Improvement")}
            name="type"
            label="House Improvement"
          />
          <Radio
            onClick={() => setSelect("Investment")}
            name="type"
            label="Investment"
          />

          <Radio name="type" label="Eduction" />
          <Radio onClick={() => setSelect("other")} name="type" label="Other" />
        </div>
        <p className="mt-5">Contact Information</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-2">
          {" "}
          <Input
            type="text"
            label="Name"
            placeholder="Your name "
            {...register("name", { required: true })}
          />
          <Input
            type="email"
            label="Email"
            placeholder="xyz123@gmail.com"
            {...register("email", { required: true })}
          />
          <Input
            type="number"
            label="Phone Number"
            placeholder="+08 000-000"
            {...register("number", { required: true })}
          />
        </div>
        <p className="mt-5">Present Address</p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 my-2">
          {" "}
          <Input
            type="text"
            label="Street Address"
            placeholder="Yoers Address"
            {...register("streetAd", { required: true })}
          />
          <Input
            type="text"
            label="City"
            placeholder="your city"
            {...register("city", { required: true })}
          />
          <Input
            type="text"
            label="State / Province"
            placeholder="100-mirpur"
            {...register("state", { required: true })}
          />
          <Input
            type="text"
            label="Postal / Zip Code"
            placeholder="12400"
            {...register("postCode", { required: true })}
          />
        </div>

        <p className="">Consent</p>
        <div className="flex  flex-col  my-2 text-xs">
          <p>
            I authorize prospective Credit Grantors/Lending/Leasing Companies to
            obtain personal and credit information about me from my employer and
            credit bureau, or credit reporting agency, any person who has or may
            have any financial dealing with me, or from any references I have
            provided. This information, as well as that provided by me in the
            application, will be referred to in connection with this lease and
            any other relationships we may establish from time to time. Any
            personal and credit information obtained may be disclosed from time
            to time to other lenders, credit bureaus or other credit reporting
            agencies.
          </p>
          <Checkbox
            onClick={() => setConsent1(!consent1)}
            id="fdfgd"
            label="Yes"
            ripple={true}
          />
          <p>
            I hereby agree that the information given is true, accurate and
            complete as of the date of this application submission.
          </p>
          <Checkbox
            onClick={() => setConsent2(!consent2)}
            className="p-0"
            id="ripple-on"
            label="Yes"
            ripple={true}
          />
        </div>
        <button
          type="submit"
          className={`px-4 md:px-8 py-2 border border-nevy-blue font-bold hover:bg-nevy-blue hover:text-white ease-linear duration-300 cursor-pointer flex items-center gap-3 md:w-auto w-full justify-center`}
        >
          <MdRotateLeft className={`${!loading && "hidden"}`} />

          <p>Send Application Now</p>
        </button>
      </form>
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default ApplyLoan;

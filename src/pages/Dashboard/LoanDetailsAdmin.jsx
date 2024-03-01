import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoanDocTab from "../../components/DashBoard/Loan/LoanDocTab";
import LoanChart from "../../components/DashBoard/Loan/LoanChart";
import Swal from "sweetalert2";

const LoanDetailsAdmin = () => {
  const axios = useAxiosSecure();
  const { id } = useParams();

  const {
    data: singleLoan,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleLoan"],
    queryFn: async () => {
      const res = await axios.get(`/singleUserLoan/${id}`);
      return res?.data?.data;
    },
  });
  if (isLoading) {
    return <h1>loading....</h1>;
  }

  const due = singleLoan?.loanAmount - singleLoan?.loanCompRang;
  const chartArr = [
    { _id: "loanCompRang", count: singleLoan?.loanCompRang },
    { _id: "loanDue", count: due },
  ];
  const handleApprove = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`/updateLoan/${id}`, {
            status: "active",
          })
          .then(
            Swal.fire({
              title: "Approved!",
              text: "Your file has been deleted.",
              icon: "success",
            })
              .then(refetch())
              .catch()
          )
          .catch();
      }
    });
  };
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-between  gap-5 text-white text-center">
        <div className="bg-nevy-blue p-16 rounded-md w-full">
          <p>$ {singleLoan?.loanAmount}</p>
          <p>Total Loan</p>
        </div>
        <div className="bg-nevy-blue p-16 rounded-md w-full">
          <p>$ {singleLoan?.loanCompRang}</p>
          <p>loan Complete</p>
        </div>
        <div className="bg-nevy-blue p-16 rounded-md w-full">
          <p>$ {singleLoan?.loanDue}</p>
          <p>Loan Due</p>
        </div>
        <div className="bg-nevy-blue p-16 rounded-md w-full">
          <p>{singleLoan?.duration}</p>
          <p>Duration</p>
        </div>
      </div>

      {/* Loan details table & Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-10">
        <div className="lg:col-span-6">
          {" "}
          <LoanDocTab />
        </div>
        <div className="lg:col-span-6">
          <LoanChart chartArr={chartArr} />
        </div>
      </div>
      {/* user info */}
      <div className="mt-20 ">
        {/* profile */}
        <div className="flex flex-wrap items-center gap-5">
          <img
            src={singleLoan?.profileImg}
            className="w-40 h-40 rounded-full"
          />
          <div>
            <h2>Name : {singleLoan?.name}</h2>
            <h3>Account No. : {singleLoan?.acc_num}</h3>
            <h3>Loan id. : {singleLoan?._id}</h3>
          </div>
        </div>
        {/*bio information */}
        <div className="mt-10">
          <h1 className="my-5">Information :</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 border rounded-xl overflow-x-scroll sm:overflow-hidden">
            <div className="flex border ">
              <p className="border-r p-2 w-[150px]">Email</p>
              <p className=" p-2">{singleLoan?.email}</p>
            </div>
            <div className="flex border">
              <p className="border-r  p-2 w-[150px]">occupation</p>
              <p className=" p-2">{singleLoan?.occupation}</p>
            </div>
            <div className="flex border">
              <p className="border-r p-2 w-[150px]">Number</p>
              <p className=" p-2">{singleLoan?.number}</p>
            </div>
            <div className="flex border">
              <p className="border-r  p-2 w-[150px]">loanSubmit</p>
              <p className="  p-2">{singleLoan?.loanSubmit}</p>
            </div>
            <div className="flex border">
              <p className="border-r p-2 w-[150px]">Loan Amount</p>
              <p className=" p-2">{singleLoan?.loanAmount}</p>
            </div>
            <div className="flex border">
              <p className="border-r  p-2 w-[150px]">interest</p>
              <p className="  p-2">{singleLoan?.interest}%</p>
            </div>
            <div className="flex border">
              <p className="border-r p-2 w-[150px]">Loan Purpose</p>
              <p className=" p-2">{singleLoan?.loanPurpose}</p>
            </div>
            <div className="flex border">
              <p className="border-r  p-2 w-[150px]">Monthly Income</p>
              <p className="  p-2">$ {singleLoan?.mnIncome}</p>
            </div>
            <div className="flex border">
              <p className="border-r p-2 w-[150px]">Duration</p>
              <p className=" p-2">{singleLoan?.duration} Month</p>
            </div>
            <div className="flex border">
              <p className="border-r  p-2 w-[150px]">Annual Income</p>
              <p className="  p-2">$ {singleLoan?.anIncome}</p>
            </div>
          </div>
          <h1 className="my-5">Address :</h1>
          <div className="grid grid-cols-2 border rounded-xl overflow-x-scroll sm:overflow-hidden">
            <div className="flex border">
              <p className="border-r p-2 w-[150px]">city</p>
              <p className=" p-2">{singleLoan?.city}</p>
            </div>
            <div className="flex border">
              <p className="border-r  p-2 w-[150px]">state</p>
              <p className=" p-2">{singleLoan?.state}</p>
            </div>
            <div className="flex border">
              <p className="border-r p-2 w-[150px]">streetAd</p>
              <p className=" p-2">{singleLoan?.streetAd}</p>
            </div>
            <div className="flex border">
              <p className="border-r  p-2 w-[150px]">Per Loan</p>
              <p className="  p-2">$ {singleLoan?.perLoan}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <button
          onClick={handleApprove}
          className={`px-4 md:px-8 py-2 border border-nevy-blue font-bold hover:bg-nevy-blue hover:text-white ease-linear duration-300 cursor-pointer flex items-center gap-3 ${
            singleLoan?.status === "active" && "hidden"
          }`}
        >
          Approve
        </button>
      </div>
    </div>
  );
};

export default LoanDetailsAdmin;

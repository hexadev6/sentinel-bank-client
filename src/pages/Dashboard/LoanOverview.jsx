import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoanDocTab from "../../components/DashBoard/Loan/LoanDocTab";
import LoanSubForm from "../../components/DashBoard/Loan/LoanSubForm";
import LoanChart from "../../components/DashBoard/Loan/LoanChart";
import useDarkMode from "../../Hooks/useDarkMode";

const LoanOverview = () => {
  const axios = useAxiosSecure();
  const { darkMode, toggleDarkMode } = useDarkMode();

  const { id } = useParams();
  console.log(id);
  const {
    data: singleLoan,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["overviewLon"],
    queryFn: async () => {
      const res = await axios.get(`/singleUserLoan/${id}`);
      return res?.data?.data;
    },
  });
  if (isLoading) {
    return <h1>loading....</h1>;
  }
  console.log(singleLoan);
  const due = singleLoan?.loanAmount - singleLoan?.loanCompRang;
  const chartArr = [
    { _id: "loanCompRang", count: singleLoan?.loanCompRang },
    { _id: "loanDue", count: due },
  ];
  console.log(chartArr);

  return (
    <div className="p-5">
      <h2 className="mb-5 font-bold">Loan Status : {singleLoan?.status}</h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  justify-between  gap-5 text-white text-center">
        <div className="bg-nevy-blue p-8 rounded-md w-full">
          <p>{singleLoan?.loanAmount}</p>
          <p>Total Loan</p>
        </div>
        <div className="bg-nevy-blue p-8 rounded-md w-full">
          <p>{singleLoan?.loanCompRang}</p>
          <p>loan Complete</p>
        </div>
        <div className="bg-nevy-blue p-8 rounded-md w-full">
          <p>{due}</p>
          <p>Loan Due</p>
        </div>
        <div className="bg-nevy-blue p-8 rounded-md w-full">
          <p>{singleLoan?.duration}</p>
          <p>Duration</p>
        </div>
      </div>
      {/* Loan submit Form */}
      <LoanSubForm />

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
      <div className="mt-5">
        <Link
          to={"/dashboard/applyLoan"}
          className={`px-4 md:px-8 py-2 border border-nevy-blue font-bold hover:bg-nevy-blue hover:text-white ease-linear duration-300 cursor-pointer `}
        >
          Apply Lone
        </Link>
      </div>
    </div>
  );
};

export default LoanOverview;

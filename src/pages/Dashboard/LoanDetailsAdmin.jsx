import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const LoanDetailsAdmin = () => {
  const axios = useAxiosSecure();
  const { id } = useParams();
  console.log(id);
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
  console.log(singleLoan);

  const due = singleLoan?.loanAmount - singleLoan?.loanCompRang;

  return (
    <div className="p-5">
      <div className="flex justify-between  gap-5 text-white text-center">
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
    </div>
  );
};

export default LoanDetailsAdmin;

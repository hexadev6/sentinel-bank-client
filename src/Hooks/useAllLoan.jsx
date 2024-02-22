import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const useAllLoan = () => {
  const axios = useAxiosSecure();

  const {
    data: loan,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["loan"],
    queryFn: async () => {
      const res = await axios.get("/allLoan");
      return res.data?.data;
    },
  });

  return [loan, isLoading, refetch];
};

export default useAllLoan;

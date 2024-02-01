import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSingleAccount = (id) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: singleAccount,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["account", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/findBankAccountOne/${id}`);
      return res.data.data;
    },
  });
  return [singleAccount, isLoading, refetch];
};

export default useSingleAccount;

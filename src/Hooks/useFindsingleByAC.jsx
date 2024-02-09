import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useFindsingleByAC = (acc_num) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: singleAccount,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["acc_num", acc_num],
    queryFn: async () => {
      const res = await axiosPublic.get(`/findByAccNum/${acc_num}`);
      return res.data.data;
    },
  });
  return [singleAccount, isLoading, refetch];
};

export default useFindsingleByAC;

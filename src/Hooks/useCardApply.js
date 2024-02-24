import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useCardApply = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: CardApply,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["CardApply"],
    queryFn: async () => {
      const res = await axiosPublic.get("/getcardapply");
      return res?.data;
    },
  });
  console.log(CardApply);
  return {CardApply, isLoading, refetch};
};

export default useCardApply;

import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";

const useAllCard = () => {
  const axios = useAxiosSecure();
  // const axios = useAxiosPublic();
  const {
    data: card,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allAcounts"],
    queryFn: async () => {
      const res = await axios.get("/findAllCard");
      return res.data?.data;
    },
  });

  return [card, isLoading, refetch];
};

export default useAllCard;

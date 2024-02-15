import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";

const useAllCard = () => {
  const axios = useAxiosSecure();
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

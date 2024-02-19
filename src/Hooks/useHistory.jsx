import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import useStatus from "./useStatus";
import useAuth from "./useAuth";

const useHistory = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });

  const {
    isPending,
    error,
    data: allDeposits,
    refetch,
  } = useQuery({
    queryKey: ["allDeposits"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/getDeposit/${userinfo?.acc_num}`);
        return res.data.data;
      } catch (error) {
        console.error(error);
        return { error: "An error occurred while fetching data." };
      }
    },
  });

  return { isPending, error, allDeposits, refetch };
};

export default useHistory;

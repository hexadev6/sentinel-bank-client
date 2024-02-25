import React from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useStatus from "./useStatus";
import useAuth from "./useAuth";

const useFindByAccNum = () => {
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });
  
  const axiosPublic = useAxiosPublic();
  const {
    data: accountByNum,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["accountByNum", userinfo?.acc_num],
    queryFn: async () => {
      const res = await axiosPublic.get(`/findByAccNum/${userinfo?.acc_num}`);
      return res.data.data;
    },
  });
  return [accountByNum, isLoading, refetch];
};

export default useFindByAccNum;

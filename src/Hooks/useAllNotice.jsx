import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "./useAxiosPublic";

const useAllNotice = () => {
  const axiosPublic = useAxiosPublic();
  const {
    isFetching: isPending,
    refetch,
    error,
    data: allnotice,
  } = useQuery({
    queryKey: ["allnotice"],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get("/allNotice");
        return res.data;
      } catch (error) {
        throw new Error("Error fetching data: " + error.message);
      }
    },
  });

  return { isPending, refetch, error, allnotice };
};

export default useAllNotice;

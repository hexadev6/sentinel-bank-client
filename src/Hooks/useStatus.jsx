import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStatus = ({ email }) => {
  const axios = useAxiosPublic();

  const { data: status, refetch } = useQuery({
    queryKey: [email],
    queryFn: async () => {
      const res = await axios(`/findUserOne?email=${email}`);
      const userinfo = res.data?.data;
      return userinfo?.status;
    },
  });

  return { status, refetch };
};

export default useStatus;

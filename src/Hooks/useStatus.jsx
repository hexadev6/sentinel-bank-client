import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStatus = ({ email }) => {
  const axiosPublic = useAxiosPublic();

  const { data: status, refetch } = useQuery({
    queryKey: [email],
    queryFn: async () => {
      const res = await axiosPublic(`/findUserOne?email=${email}`);
      const userinfo = res.data?.data;
      return userinfo?.status;
    },
  });

  return { status, refetch };
};

export default useStatus;

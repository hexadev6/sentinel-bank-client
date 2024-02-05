import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useStatus = ({ email }) => {
  const axiosPublic = useAxiosPublic();
  console.log(email);

  const { data: status, refetch } = useQuery({
    queryKey: [email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/findUserOne?email=${email}`);
      const userinfo = res.data?.data?.status;

      return userinfo;
    },
  });
  return { status, refetch };
};

export default useStatus;

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useStatus from "./useStatus";
import useAuth from "./useAuth";


const useGetChat = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email });


  const {
    isPending,
    error,
    data: allChat,
    refetch,
  } = useQuery({
    queryKey: ["allChat", userinfo],
    queryFn: async () => {
      try {
        const res = await axiosPublic.get(`/allChat/${userinfo?._id}`);
        return res.data;
      } catch (error) {
        console.error(error);
        return { error: "An error occurred while fetching data." };
      }
    },
  });


  return { isPending, error, allChat, refetch };
};


export default useGetChat;
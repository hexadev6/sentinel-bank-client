import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import useStatus from "./useStatus";


const useAllTrasaction = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth()
    const { userinfo } = useStatus({ email: user?.email });
    const {data:Alltrasactions, isLoading, refetch} = useQuery({
        queryKey: ['allTrasaction', userinfo?.acc_num],
        queryFn: async () => {
            const res = await axiosPublic.get(`/transactionSummary/${userinfo?.acc_num}`)
            return res.data;
        }
    })

    return [Alltrasactions, isLoading, refetch]
};



export default useAllTrasaction;
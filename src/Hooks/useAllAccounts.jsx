import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllAccounts = () => {
    const axiosPublic = useAxiosPublic();
    const {data:allAccount, isLoading, refetch} = useQuery({
        queryKey: ['allAcounts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/getAllAccounts')
            return res.data;
        }
    })

    return [allAccount, isLoading, refetch]
};

export default useAllAccounts;
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useTransaction = () => {
    const axiosPublic= useAxiosPublic()
    const {data:totalTransaction,isLoading,refetch}=useQuery({
        queryKey:['allAccountByUser'],
        queryFn: async()=>{
            const res= await axiosPublic.get('/statistics')
            return res?.data;

        }
        
    })
    console.log(totalTransaction);
    return {totalTransaction, isLoading, refetch};
}
export default useTransaction;
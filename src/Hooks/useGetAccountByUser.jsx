import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGetAccountByUser = () => {
    const axiosPublic= useAxiosPublic()
    const {data:allAccountByUser,isLoading,refetch}=useQuery({
        queryKey:['allAccountByUser'],
        queryFn: async()=>{
            const res= await axiosPublic.get('/userEngagement')
            return res.data;

        }
        
    })
    // console.log(allAccountByUser);
    return {allAccountByUser, isLoading, refetch};
}
export default useGetAccountByUser;
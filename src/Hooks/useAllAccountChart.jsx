import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllAccountChart = () => {
    const axiosPublic= useAxiosPublic()
    const {data:allaccountChart,isLoading,refetch}=useQuery({
        queryKey:['allAccountChart'],
        queryFn: async()=>{
            const res= await axiosPublic.get('/getAccountChart')
            return res.data;

        }
        
    })
    console.log(allaccountChart);
    return [allaccountChart, isLoading, refetch];
};

export default useAllAccountChart;
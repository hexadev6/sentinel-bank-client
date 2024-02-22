import { useEffect, useState } from "react";
import Cards from "../../components/DashBoard/Overview/Cards/Cards";
import Transaction from "../../components/DashBoard/Overview/Transaction/Transaction";
import Transfer from "../../components/DashBoard/Overview/MoneyTransfer/Transfer";
import useAuth from "../../Hooks/useAuth";
import useStatus from "../../Hooks/useStatus";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useSingleAccount from "../../Hooks/useSingleAccount";
import UserGraph from "../../components/DashBoard/Overview/UserGraph/UserGraph";
import useDarkMode from "../../Hooks/useDarkMode";
import useHistory from "../../Hooks/useHistory";
import useFindByAccNum from "../../Hooks/useFindByAccNum";
import ChatApp from "../../components/DashBoard/ChatApp/ChatApp";

const Overview = () => {
  // const {darkMode, toggleDarkMode} = useDarkMode()
  const { user } = useAuth();
  const { userinfo: normalUserInfo } = useStatus({ email: user?.email });
  // const { userinfo:adminInfo } = useStatus({ email: 'team.hexadev@gmail.com' });
  const axiosPublic = useAxiosPublic();
  const [totalDeposits, setTotalDeposits] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  // const [getTotalBalance, setGetTotalBalance] = useState(0);
  // const { isPending, error, allDeposits } = useHistory();
  const [accountByNum, isLoading, refetch] = useFindByAccNum();

  useEffect(() => {
    refetch();
    setTotalBalance(accountByNum);
  }, [totalDeposits]);

  // Set userId and adminId dynamically
  const userId = normalUserInfo?._id;
  const adminId = "65c62bccbeb6949fbca80189";
if(isLoading){
  return <h1>Loading....</h1>
}
  return (
    <>
     {normalUserInfo?.status== 'admin'?
     <> <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-5 justify-between items-start p-5">
     <div className="col-span-2 space-y-6">
      
       <UserGraph />
       
       <ChatApp  key={user?._id} userId={userId} adminId={adminId} />
     </div>
     
   </div></>  : <>
     
     <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-5 justify-between items-start p-5">
        <div className="col-span-2 space-y-6">
          <Transfer />
          <UserGraph />
          <Transaction />
          <ChatApp key={user?._id} userId={userId} adminId={adminId} />
        </div>
        <Cards />
      </div>
     
     
     
     </>
    
    
    
    
    
    
    }
    </>
  );
};

export default Overview;

import useStatus from "../../../../Hooks/useStatus";
import useAuth from "../../../../Hooks/useAuth";
import ApexChart from "./ApexChart";
import useAllAccountChart from "../../../../Hooks/useAllAccountChart";



const UserGraph = () => {

  const {user} = useAuth()
  const { userinfo } = useStatus({ email: user?.email }) || {};
  const [allaccountChart, isLoading, refetch]= useAllAccountChart()
  console.log(allaccountChart);
  const total = parseFloat(allaccountChart?.reduce((acc, item) => acc + item.count, 0))
 

  return (
  <div>
      {
        userinfo?.status == 'admin'? <>  <div style={{ width: "100%" }} className="px-2 py-7 rounded-lg shadow-lg">
        <h4 className="text-xl font-medium ml-2 py-4">Total Account of users : {total}</h4>
        <ApexChart allaccountChart={allaccountChart}/>
      
      </div></> : <>   <div style={{ width: "100%" }} className="px-2 py-7 rounded-lg shadow-lg">
      <h4 className="text-xl font-medium ml-2 py-4">Available Balance</h4>
     
    </div></>
      }




  </div>
  );
};

export default UserGraph;

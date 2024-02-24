import useStatus from "../../../../Hooks/useStatus";
import useAuth from "../../../../Hooks/useAuth";
import ApexChart from "./ApexChart";
import useAllAccountChart from "../../../../Hooks/useAllAccountChart";
import CardApply from "./CardApply";
import NewChart from "./NewChart";

const UserGraph = () => {
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email }) || {};
  const [allaccountChart, isLoading, refetch] = useAllAccountChart() || [];
  const total = allaccountChart?.reduce((acc, item) => acc + item?.count, 0);

  console.log("allacc", allaccountChart);
  console.log(total);

  if (isLoading) {
    return <h1>loadding...</h1>;
  }

  return (
    <div>
      {userinfo?.status === "admin" ? (
        <div>
          {" "}
          <div className="w-full px-2 py-7 rounded-lg shadow-lg">
            <h4 className="text-xl font-medium ml-2 py-4">
              Total Account of users : {total}
            </h4>
            <ApexChart
              allaccountChart={allaccountChart}
              isLoading={isLoading}
            ></ApexChart>
          </div>
          <div className=" w-96 px-2 py-7 rounded-lg shadow-lg">
            <h4 className="text-xl font-medium ml-2 py-4">Apply for Cards:</h4>
            <CardApply />
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{ width: "100%" }}
            className="px-2 py-7 rounded-lg shadow-lg"
          >
            <h4 className="text-xl font-medium ml-2 py-4">Available Balance</h4>
            <NewChart/>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserGraph;

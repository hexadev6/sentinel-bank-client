import useStatus from "../../../../Hooks/useStatus";
import useAuth from "../../../../Hooks/useAuth";
import ApexChart from "./ApexChart";
import useAllAccountChart from "../../../../Hooks/useAllAccountChart";
import CardApply from "./CardApply";
import NewChart from "./NewChart";
import useGetAccountByUser from "../../../../Hooks/useGetAccountByUser";
import UserChart from "./UserChart";
import AdminTransafer from "../MoneyTransfer/AdminTransafer";
import useCardApply from "../../../../Hooks/useCardApply";

const UserGraph = () => {
  const { user } = useAuth();
  const { userinfo } = useStatus({ email: user?.email }) || {};

  const [allaccountChart, isLoading] = useAllAccountChart() || [];
  const total = allaccountChart?.reduce((acc, item) => acc + item?.count, 0);
  const { allAccountByUser } = useGetAccountByUser();

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
          <div className="my-6">
            <AdminTransafer />
          </div>
          <div className="flex justify-center mx-6">
            <div className=" w-96 px-2 py-7 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium ml-2 py-4">
                Apply for Loan & Cards
              </h4>
              <CardApply />
            </div>
            <div className="w-full px-2 py-7 rounded-lg shadow-lg">
              <h4 className="text-xl font-medium ml-2 py-4">User Engagment</h4>
              <UserChart allAccountByUser={allAccountByUser}></UserChart>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            style={{ width: "100%" }}
            className="px-2 py-7 rounded-lg shadow-lg"
          >
            <h4 className="text-xl font-medium ml-2 py-4">Trasaction</h4>
            <NewChart />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserGraph;

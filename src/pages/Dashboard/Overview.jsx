import React from "react";
import Cards from "../../components/DashBoard/Overview/Cards/Cards";
import Transaction from "../../components/DashBoard/Overview/Transaction/Transaction";
import Transfer from "../../components/DashBoard/Overview/MoneyTransfer/Transfer";

const Overview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-5 justify-between items-start p-5">
      <div className="col-span-2">
        <Cards />
        <Transaction />
      </div>
        <Transfer />
    
    </div>
  );
};

export default Overview;

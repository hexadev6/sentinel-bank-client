import React from "react";
import Transaction from "../../components/Overview/Transaction/Transaction";
import Cards from "../../components/Overview/Cards/Cards";
import Transfer from "../../components/Overview/MoneyTransfer/Transfer";

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

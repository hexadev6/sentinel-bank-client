import React from "react";
import Transaction from "../../components/Overview/Transaction/Transaction";
import Cards from "../../components/Overview/Cards/Cards";
import Transfer from "../../components/Overview/MoneyTransfer/Transfer";

const Overview = () => {
  return (
    <>
      <Cards />
      <Transaction />
      {/* <Transfer /> */}
    </>
  );
};

export default Overview;

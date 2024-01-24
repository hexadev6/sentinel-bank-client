import React from "react";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyRate from "./CurrencyRate";

const MoneyExchange = () => {
  return (
    <div className="bg-nevy-blue p-10 container mx-auto mt-20 grid grid-cols-2 gap-10 justify-center items-center">
      <CurrencyRate />
      {/* <CurrencyConverter /> */}
    </div>
  );
};

export default MoneyExchange;

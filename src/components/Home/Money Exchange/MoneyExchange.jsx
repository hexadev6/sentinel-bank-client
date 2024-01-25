import React from "react";
import CurrencyConverter from "./CurrencyConverter";
import CurrencyRate from "./CurrencyRate";

const MoneyExchange = () => {
  return (
   <div className="px-4 mb-16">
     <div className="bg-nevy-blue p-10 container mx-auto mt-20 grid  grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
      <CurrencyRate />
      <CurrencyConverter />
    </div>
   </div>
  );
};

export default MoneyExchange;

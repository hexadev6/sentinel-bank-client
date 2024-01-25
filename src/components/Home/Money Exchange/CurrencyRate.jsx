import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import "./scroll.css";
import useExchangeRate from "../../../Hooks/useExchangeRate";


const CurrencyRate = () => {
  const { currencyRate, publishedDate } = useExchangeRate() || {
    currencyRate: null,
    publishedDate: null,
  };

  return (
    <div className="text-white">
      <h2 className="text-3xl  font-light mb-1">Exchange Rates</h2>
      {/* API updated date */}
      <p>As on {publishedDate}</p>
      <div>
        <Card className="h-96 w-full overflow-auto mt-10 rounded-none">
          {/* currency rate table */}
          <table className="w-full table-auto text-center">
            <thead className="sticky top-0">
              {/* table head row */}
              <tr>
                <th className=" bg-gray-300 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="  text-nevy-blue font-semibold"
                  >
                    Currency
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-gray-300 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="  text-nevy-blue font-semibold"
                  >
                    Rate
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody className="">
              {/* table data maping */}
              {currencyRate !== null &&
                currencyRate.map((item) => (
                  <tr
                    key={item.currency}
                    className="border-b border-blue-gray-100 "
                  >
                    <td>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="py-2"
                      >
                        {item.currency}
                      </Typography>
                    </td>
                    <td>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className=""
                      >
                        {item.rate}
                      </Typography>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default CurrencyRate;

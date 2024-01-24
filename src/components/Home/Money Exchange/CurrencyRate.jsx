import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import "./scroll.css";

const CurrencyRate = () => {
  const [currencyRate, setCurrencyRate] = useState(null);
  const [publishedDate, setPublishedDate] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/728cd6765dbebb3b7c63cc99/latest/USD"
      )
      .then((res) => {
        const data = res.data;
        const inputDatetimeString = data.time_last_update_utc;
        const inputDate = new Date(inputDatetimeString);
        var options = {
          weekday: "short",
          day: "numeric",
          month: "short",
          year: "numeric",
        };
        const publishedDate = new Intl.DateTimeFormat("en-US", options).format(
          inputDate
        );
        setPublishedDate(publishedDate);
        setCurrencyRate(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="text-white">
      <h2 className="text-3xl  font-light mb-1">Exchange Rates</h2>
      <p>As on {publishedDate}</p>
      <div>
        <Card className="h-96 w-full overflow-auto mt-10 rounded-none">
          <table className="w-full table-auto text-center">
            <thead className="sticky top-0">
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
              {currencyRate !== null &&
                Object.entries(currencyRate.conversion_rates).map(
                  ([currency, rate]) => (
                    <tr
                      key={currency}
                      className="border-b border-blue-gray-100 "
                    >
                      <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="py-2"
                        >
                          {currency}
                        </Typography>
                      </td>
                      <td>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className=""
                        >
                          {rate}
                        </Typography>
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default CurrencyRate;

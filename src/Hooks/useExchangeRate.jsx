import axios from "axios";
import { useEffect, useState } from "react";

const useExchangeRate = () => {
  const [exchangeData, setExchangeData] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://v6.exchangerate-api.com/v6/${
            import.meta.env.VITE_Currency_API_KEY
          }/latest/USD`
        );
        const conversion_rates = Object.entries(
          response.data.conversion_rates
        ).map(([currency, rate]) => ({ currency, rate }));
        const inputDatetimeString = response.data.time_last_update_utc;
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

        setExchangeData({
          currencyRate: conversion_rates,
          publishedDate: publishedDate,
        });
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    fetchExchangeRate();
  }, []);

  return exchangeData;
};

export default useExchangeRate;

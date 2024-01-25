import { Option, Select, Slider } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import useExchangeRate from "../../../Hooks/UseExchangeRate";

const CurrencyConverter = () => {
  // all states
  const [sliderValue, setSliderValue] = useState(20);
  const [convertFrom, setConvertFrom] = useState("USD");
  const [convertTo, setConvertTo] = useState("USD");
  const [convertAmount, setConvertAmount] = useState(0);

  // custom hooks
  const { currencyRate } = useExchangeRate() || { currencyRate: null };

  // get exchangable currecy value
  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
  };

  // get convert from value
  const HandleConvertFrom = (event) => {
    const rate_value = event.target.value;
    setConvertFrom(rate_value);
  };

  // get convert To value
  const HandleConvertTo = (event) => {
    const rate_value = event.target.value;
    setConvertTo(rate_value);
  };

  // convert calculation
  useEffect(() => {
    axios
      .get(
        `https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_Currency_API_KEY}/latest/${convertFrom}`
      )
      .then((res) => {
        const conversion_rates = Object.entries(res.data.conversion_rates).map(
          ([currency, rate]) => ({ currency, rate })
        );

        const rates = conversion_rates.find(
          (data) => data.currency === convertTo
        );
        const convertedAmount = (rates.rate * sliderValue).toFixed(2);
        setConvertAmount(convertedAmount);
      })
      .catch((err) => console.log(err));
  }, [sliderValue, convertTo, convertFrom]);

  return (
    <div className="text-white">
      <div className="text-center mb-10">
        <p className="text-xl">Calculator</p>
        <h2 className="text-3xl  font-light mb-2">
          How much would I get on money exchange?
        </h2>
      </div>
      <div>
        {/* slider */}
        <h2 className="text-xl">Amount : {sliderValue.toString()}</h2>
        <input
          className="mt-5  w-full"
          onChange={handleSliderChange}
          type="range"
          min="0"
          max="10000"
          step="1"
        />
        <h1 className=" text-end ">Can convert till 10000</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between items-end mt-10 ">
        <div>
          <label>Exchange Currency From</label> <br />
          {/* select convert from  */}
          <select
            className="w-full text-center py-3 px-2 rounded mt-2 outline-0 text-light-gray"
            onChange={HandleConvertFrom}
          >
            {currencyRate !== null &&
              currencyRate.map((item) => (
                <option key={item.currency} value={item.currency}>
                  {item.currency}
                </option>
              ))}
          </select>
        </div>
        <div>
          {/* select convert to */}
          <label>Exchange Currency To</label> <br />
          <select
            className="w-full text-center py-3 px-2 rounded mt-2 outline-0 text-light-gray"
            onChange={HandleConvertTo}
            defaultValue={"USD"}
          >
            {currencyRate !== null &&
              currencyRate.map((item) => (
                <option key={item.currency} value={item.currency}>
                  {item.currency}
                </option>
              ))}
          </select>
        </div>
      </div>
      {/* convertted currency */}
      <h2 className="text-3xl font-light mt-16">
        Total Amount : {convertAmount}
      </h2>
    </div>
  );
};

export default CurrencyConverter;

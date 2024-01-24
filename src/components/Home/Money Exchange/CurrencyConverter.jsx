import { Option, Select, Slider } from "@material-tailwind/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CurrencyConverter = () => {
  const [sliderValue, setSliderValue] = useState(20);
  const handleSliderChange = (event) => {
    const value = event.target.value;
    setSliderValue(value);
  };
  const [currencyRate, setCurrencyRate] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://v6.exchangerate-api.com/v6/728cd6765dbebb3b7c63cc99/latest/USD"
      )
      .then((res) => {
        setCurrencyRate(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [convertFrom, setConvertFrom] = useState(0);
  const HandleConvertFrom = (event) => {
    console.log(event)
  };
  const [convertTo, setConvertTo] = useState(0);
  const HandleConvertTo = (event) => {
    console.log(event)
    // setConvertTo(event)
  };

//   const [convertAmount, setConvertAmount] = useState(0);
//   useEffect(()=>{
//       const convertedAmount = sliderValue * convertTo;
//       setConvertAmount(convertedAmount)
//   },[sliderValue,convertTo])

  return (
    <div className="text-white">
      <div className="text-center mb-10">
        <p className="text-xl">Calculator</p>
        <h2 className="text-3xl  font-light mb-2">
          How much would I get on money exchange?
        </h2>
      </div>
      <div>
        <h1>Amount : {sliderValue.toString()}</h1>
        <input
          className="mt-5  w-full"
          onChange={handleSliderChange}
          type="range"
          min="0"
          max="10000"
          step="1"
        />
      </div>
      <div className="flex flex-wrap gap-5 justify-between items-center mt-10 ">
        <div>
          <label>Exchange Currency From</label>
          <Select variant="static" color="white" className="text-white" onChange={HandleConvertFrom}>
            {currencyRate?.conversion_rates &&
              Object.entries(currencyRate?.conversion_rates).map(
                ([currency, rate]) => <Option key={currency} value={rate}>{currency}</Option>
              )}
          </Select>
        </div>
        <div>
          <label>Exchange Currency To</label>
          <Select variant="static" color="white" className="text-white" onChange={HandleConvertTo}>
            {currencyRate?.conversion_rates &&
              Object.entries(currencyRate?.conversion_rates).map(
                ([currency, rate]) => <Option key={currency} value={rate}>{currency}</Option>
              )}
          </Select>
        </div>
      </div>
      <h2 className="text-3xl font-light mt-20">Total Amount :</h2>
    </div>
  );
};

export default CurrencyConverter;

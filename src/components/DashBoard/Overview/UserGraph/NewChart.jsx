import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import useAllTrasaction from "../../../../Hooks/useAllTrasaction";

const NewChart = () => {
 const [Alltrasactions, isLoading, refetch]=useAllTrasaction()
  const data = Alltrasactions?.depositSummary?.map((item, index) => ({
    name: new Date(item?.transactionDate).toLocaleDateString(),
    deposit: item?.amount,
    withdraw: Alltrasactions?.withdrawSummary?.[index]?.amount
  }));
  

  return (
    <LineChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis yAxisId="left" />
    <YAxis yAxisId="right" orientation="right" />
    <Tooltip />
    <Legend />
    <Line
      yAxisId="left"
      type="monotone"
      dataKey="withdraw"
      stroke="#8884d8"
      activeDot={{ r: 8 }}
    />
    <Line yAxisId="right" type="monotone" dataKey="deposit" stroke="#82ca9d" />
  </LineChart>
  );
};

export default NewChart;
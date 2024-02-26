import React from 'react';
import ReactApexChart from 'react-apexcharts';
import useAllTrasaction from '../../../../Hooks/useAllTrasaction';

const AreaChart = () => {
  const [Alltrasactions, isLoading, refetch] = useAllTrasaction();

  const data = Alltrasactions?.depositSummary?.map((item, index) => ({
    name: new Date(item?.transactionDate).toLocaleDateString(),
    deposit: item?.amount,
    withdraw: Alltrasactions?.withdrawSummary?.[index]?.amount
  }));

  const series = [
    {
      name: 'Withdraw',
      data: data?.map(item => item.withdraw)
    },
    {
      name: 'Deposit',
      data: data?.map(item => item.deposit)
    }
  ];

  const options = {
    chart: {
      height: 300,
      type: 'area'
    },
    xaxis: {
      type: 'category',
      categories: data?.map(item => item.name)
    },
    yaxis: [
      {
        title: {
          text: 'Withdraw',
          style: {
            color: '#8884d8'
          }
        }
      },
      {
        opposite: true,
        title: {
          text: 'Deposit',
          style: {
            color: '#82ca9d'
          }
        }
      }
    ]
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={300}
    />
  );
};

export default AreaChart;

import ReactApexChart from "react-apexcharts";

const ApexChart = ({ allaccountChart, isLoading }) => {
  // console.log(allaccountChart);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const options = {
    chart: {
      width: 100,
      type: "donut",
    },

    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: allaccountChart?.map((item) => item._id),
    },
    fill: {
      colors: ["#00A8FF"], // Customize the colors as needed
    },
    // height: 'auto',
  };

  const series = [
    {
      name: "Count",
      data: allaccountChart?.map((item) => item.count),
    },
  ];

  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="donut"
      height={200}
    />
  );
};

export default ApexChart;

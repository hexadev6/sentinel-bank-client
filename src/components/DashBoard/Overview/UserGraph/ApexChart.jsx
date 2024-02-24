import ReactApexChart from "react-apexcharts";

const ApexChart = ({ allaccountChart, isLoading }) => {
  // console.log(allaccountChart);
  if (isLoading) {
    return <h1>lodding</h1>;
  }
  const options = {
    series: allaccountChart?.map((item) => item.count),
    labels: allaccountChart?.map((item) => item._id),
    chart: {
      width: 100, 
      type: "donut",
    },

    dataLabels: {
      enabled: true,
    },
    fill: {
      type: "gradient",
    },
    // height: 'auto',
  };

  return (
    <ReactApexChart  options={options} series={options.series} type="donut"         height={200}
    />
  );
};

export default ApexChart;
import ReactApexChart from "react-apexcharts";

const ApexAreaChart = ({ allaccountChart, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const options = {
    chart: {
      type: "area",
    },
    plotOptions: {
      area: {
        fillTo: "origin",
        opacity: 0.5,
      },
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
      colors: ["#00A8FF"],
    },
    // responsive: [
    //   {
    //     breakpoint: 280,
    //     options: {
    //       chart: {
    //         width: 350,
    //       },
    //       legend: {
    //         position: "bottom",
    //       },
    //     },
    //   },
    // ],
  };

  const series = [
    {
      name: "Count",
      data: allaccountChart?.map((item) => item.count),
    },
  ];

  return (
    <ReactApexChart
      className="w-full"
      options={options}
      series={series}
      type="area"
      height={350}
    />
  );
};

export default ApexAreaChart;

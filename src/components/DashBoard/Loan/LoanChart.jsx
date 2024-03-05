import ReactApexChart from "react-apexcharts";

const LoanChart = ({ chartArr }) => {
  const chartOptions = {
    series: chartArr?.map((item) => item?.count),
    chart: {
      width: 100,
      type: "pie",
    },
    labels: chartArr?.map((item) => item?._id),

    responsive: [
      {
        breakpoint: 280,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="w-full  border h-full rounded-xl shadow-md" id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default LoanChart;

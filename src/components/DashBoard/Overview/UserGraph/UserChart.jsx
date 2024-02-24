import ReactApexChart from "react-apexcharts";

const ApexPieChart = ({ allAccountByUser, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const options = {
    chart: {
      type: "pie",
      height: 500,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "14px",
        colors: ["#304758"],
      },
    },
    fill: {
      colors: ["#00A8FF", "#70B420"], // Customize the colors as needed
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [allAccountByUser?.countUsersWithAccount, allAccountByUser?.totalUsers];

  return (
    <ReactApexChart
      className="w-full"
      options={options}
      series={series}
      type="pie"
    />
  );
};

export default ApexPieChart;

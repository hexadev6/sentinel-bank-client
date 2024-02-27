import ReactApexChart from "react-apexcharts";

const ApexPieChart = ({ allAccountByUser, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const options = {
    chart: {
      type: "pie",
      height: 450,
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
        colors: ["#1CBDC1"],
      },
    },
    fill: {
      colors: ["#8B5387", "#E3633A"],
    },
    labels: ['Registered User', 'Users With Accounts'],
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
    theme: {
      palette: 'palette8' 
    }
  };

  const series = [allAccountByUser?.totalUsers, allAccountByUser?.countUsersWithAccount];

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


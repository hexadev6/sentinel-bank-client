import ReactApexChart from "react-apexcharts";

const ApexPieChart = ({ allAccountByUser, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const options = {
    chart: {
      height: 350,
      type: "pie",
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
    labels: ["Registered User", "Users With Accounts"],
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
    theme: {
      palette: "palette8",
    },
  };

  const series = [
    allAccountByUser?.totalUsers,
    allAccountByUser?.countUsersWithAccount,
  ];

  return (
    <div>
      <div className="w-full" id="pie">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          height={350}
        />
      </div>
    </div>
  );
};

export default ApexPieChart;

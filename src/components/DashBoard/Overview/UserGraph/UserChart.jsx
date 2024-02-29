import ReactApexChart from "react-apexcharts";

const ApexPieChart = ({ allAccountByUser, isLoading }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const options = {
    chart: {
      width: 100,
      type: 'area'
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
    theme: {
      palette: 'palette8' 
    }
  };

  const series = [allAccountByUser?.totalUsers, allAccountByUser?.countUsersWithAccount];

  return (
    <div  className="w-full" >

      {/* <ReactApexChart
        height={350}
       
        options={options}
        series={series}
        type="pie"
      /> */}

<ReactApexChart
          options={options}
          series={series}
          type="pie"
          height={350}
        />
        
    </div>
  );
};

export default ApexPieChart;


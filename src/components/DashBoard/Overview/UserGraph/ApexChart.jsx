import ReactApexChart from 'react-apexcharts';

const ApexChart = ({allaccountChart}) => {
    
   
  const options = {
    series: allaccountChart?.map(item=> (item.count)),
    labels: allaccountChart?.map(item=> (item._id)),
    chart: {
      width: 380,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: true,
    },
    fill: {
      type: 'gradient',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    
  };

  return (
    <ReactApexChart
    options={options} series={options.series} type="donut" 
    />
  );
};

export default ApexChart;

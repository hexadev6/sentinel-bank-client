import ReactApexChart from "react-apexcharts";
import useCardApply from "../../../../Hooks/useCardApply";


const CardApply = () => {
    const [CardApply, isLoading, refetch] = useCardApply()

    console.log(CardApply);
    const chartOptions= ({
        series: CardApply?.map(item=> item?.count),
        chart: {
          width: 100,
          type: 'pie',
        },
        labels:CardApply?.map(item=> item?._id) ,
        responsive: [
          {
            breakpoint: 280,
            options: {
              chart: {
                width: 100,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      });
    
    return (
        <div className="w-80" id="chart">
        <ReactApexChart options={chartOptions} series={chartOptions.series} type="pie" height={350} />
      </div>
    );
};

export default CardApply;
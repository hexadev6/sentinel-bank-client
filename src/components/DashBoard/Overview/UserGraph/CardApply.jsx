import ReactApexChart from "react-apexcharts";
import useCardApply from "../../../../Hooks/useCardApply";
import { useState } from "react";

const CardApply = () => {
    const [CardApply, isLoading, refetch] = useCardApply()

    console.log(CardApply);
    const [chartOptions, setChartOptions] = useState({
        series: CardApply?.map(item=> item?.count),
        chart: {
          width: 380,
          type: 'pie',
        },
        labels:CardApply?.map(item=> item?._id) ,
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
      });
    
    return (
        <div id="chart">
        <ReactApexChart options={chartOptions} series={chartOptions.series} type="pie" height={350} />
      </div>
    );
};

export default CardApply;
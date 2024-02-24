import ReactApexChart from "react-apexcharts";
import useCardApply from "../../../../Hooks/useCardApply";

const CardApply = () => {
  const [cardApplyData, isLoading, refetch] = useCardApply();

  

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const chartOptions = {
    series: cardApplyData?.map((item) => item?.count),
    chart: {
      width: 100,
      type: "pie",
    },
    labels: cardApplyData?.map((item) => item?._id),
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
    <div className="w-96" id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default CardApply;

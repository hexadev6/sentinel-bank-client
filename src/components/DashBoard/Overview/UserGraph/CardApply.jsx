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
  
  };

  return (
    <div className="w-full" id="chart">
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="pie"
        height={200}
      />
    </div>
  );
};

export default CardApply;

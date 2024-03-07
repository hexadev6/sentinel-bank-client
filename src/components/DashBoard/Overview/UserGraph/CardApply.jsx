import ReactApexChart from "react-apexcharts";
import useCardApply from "../../../../Hooks/useCardApply";

const CardApply = () => {
  const { CardApply: cardApplyObject, isLoading } = useCardApply();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const cardApplyArray = cardApplyObject.CardApply;
  const loanCount = cardApplyObject.loan;

  const chartData = [
    ...cardApplyArray.map((item) => ({
      id: item?._id,
      count: item?.count,
      type: "CardApply",
    })),
    {
      id: "loan",
      count: loanCount,
      type: "Loan",
    },
  ];

  const chartOptions = {
    series: chartData.map((item) => item.count),
    chart: {
      height: 350,
      type: "donut",
    },
    labels: chartData.map((item) => item.id),
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
  };

  return (
    <div>
      <div className="w-full" id="chart">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="donut"
          height={350} // Set the height to the same value
        />
      </div>
    </div>
  );
};

export default CardApply;

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
      width: 100,
      type: "pie",
    },
    labels: chartData.map((item) => item.id),
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
    <div>
      <div className="w-80" id="chart">
        <ReactApexChart
          options={chartOptions}
          series={chartOptions.series}
          type="donut"
          height={350}
        />
      </div>
    </div>
  );
};

export default CardApply;

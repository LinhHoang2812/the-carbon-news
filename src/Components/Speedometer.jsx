import { fetchSpeedo } from "./fetchData";

const Speedometer = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const { data, isLoading } = fetchSpeedo(
    `https://api.carbonintensity.org.uk/intensity/stats/${yesterday.toISOString()}/${today.toISOString()}`
  );
  if (isLoading) {
    return (
      <>
        <h4 style={{ marginTop: "2rem", marginLeft: "3rem" }}>Loading.....</h4>
      </>
    );
  }
  const intensity = data.data.data[0].intensity;
  const index = intensity.index;

  const c = `{
    type: "gauge",
    data: {
      datasets: [
        {
          value: ${intensity.average},
          data: [${intensity.min}, ${intensity.max}],
          backgroundColor: ["green", "orange"],
          borderWidth: 2,
        },
      ],
    },
    options: {
      valueLabel: {
        fontSize: 20,
        backgroundColor: "transparent",
        color: "black",
        formatter: (val) => val+" gCO2/kWH",

        bottomMarginPercentage: 17,
      },
    },
  }`;

  return (
    <>
      <h4>Status: {index}</h4>
      <img
        src={`https://quickchart.io/chart?c=${encodeURIComponent(c)}`}
        className="chart"
      />
    </>
  );
};
export default Speedometer;

import { fetchLine } from "./fetchData";
import axios from "axios";
const myCOLOR = [
  "rgb(255, 68, 68)",
  "rgb(255, 187, 51)",
  "rgb(51, 181, 229)",
  "rgb(0, 200, 81)",
  "rgb(121, 82, 179)",
  "rgb(255, 139, 0)",
  "rgb(37, 71, 133)",
  "rgb(206, 145, 230)",
  "rgb(29, 131, 72)",
  "rgb(131, 145, 146)",
  "rgb(227, 69, 150)",
];
const Linechart = () => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const { data, isLoading } = fetchLine(
    `https://api.carbonintensity.org.uk/intensity/${yesterday.toISOString()}/fw48h`
  );
  if (isLoading) {
    return (
      <>
        <h4 style={{ marginTop: "2rem", marginLeft: "3rem" }}>Loading.....</h4>
      </>
    );
  }
  const options = {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
  };
  const forecast = data.data.data.map((item) => item.intensity.forecast);
  const actual = data.data.data.map((item) => item.intensity.actual);
  let labels = data.data.data.map((item) =>
    item.to.replace("T", " ").replace("Z", "").slice(5)
  );
  labels = labels.map((label, index) => {
    if (index % 3 === 0) {
      return label;
    }
    return "";
  });

  return (
    <img
      className="chart"
      src={`https://quickchart.io/chart?c={
    type: "line",
    data: {
      labels: ${JSON.stringify(labels)},
      datasets: [
        {
          label: "Actual",
          data: [${actual}],
          fill: false,
          pointRadius:"0",
          borderWidth: 1,
          borderColor:"rgb(255, 68, 68)" ,
        },
        {
          label: "Forecast",
          data: [${forecast}],
          fill: false,
          pointRadius:"0",
          borderWidth: 1,
          borderColor: "rgb(255, 187, 51)",
        },
      ],
    },
  }`}
    />
  );
};
export default Linechart;

import { fetchBar } from "./fetchData";
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

const HorizontalBar = () => {
  const { data, isLoading } = fetchBar(
    "https://api.carbonintensity.org.uk/intensity/factors"
  );

  if (isLoading) {
    return (
      <>
        <h4 style={{ marginTop: "2rem", marginLeft: "3rem" }}>Loading.....</h4>
      </>
    );
  }
  const myData = data.data.data[0];
  const values = Object.values(myData);
  const labels = Object.keys(myData);

  return (
    <img
      className="chart"
      src={`https://quickchart.io/chart?c={type:'horizontalBar',data:{labels:${JSON.stringify(
        labels
      )},datasets:[{label:'Carbon Intensity factors for each fuel type',data:[${values}],backgroundColor:${JSON.stringify(
        myCOLOR
      )}}]}}`}
    />
  );
};

export default HorizontalBar;

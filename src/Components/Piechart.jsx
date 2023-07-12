import { fetchPie } from "./fetchData";
const Piechart = () => {
  const { data, isLoading } = fetchPie(
    "https://api.carbonintensity.org.uk/generation"
  );
  if (isLoading) {
    return (
      <>
        <h4 style={{ marginTop: "2rem", marginLeft: "3rem" }}>Loading.....</h4>
      </>
    );
  }
  const generationMix = data.data.data.generationmix;
  const labels = generationMix.map((item) => item.fuel);
  const values = generationMix.map((item) => item.perc);

  const c = `{
  type: "pie",
  data: {
    labels: ${JSON.stringify(labels)},
    datasets: [{ data: [${values}] }],
  },
  options: {
    plugins: {
      datalabels: {
        color: "white",
        offset:70,
        formatter: (val) => {
            if (val<5) {return "" }
            return val + "%"},
        align: 'center',
        
      },
    },
  }
}`;

  return (
    <img
      className="chart"
      src={`https://quickchart.io/chart?c=${encodeURIComponent(c)}`}
    />
  );
};
export default Piechart;

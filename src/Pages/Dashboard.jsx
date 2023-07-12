import DashboardNav from "../Components/DashboardNav";
import HorizontalBar from "../Components/HorizontalBar";
import Linechart from "../Components/Linechart";
import Piechart from "../Components/Piechart";
import Speedometer from "../Components/Speedometer";

const Dashboard = () => {
  // const date = new Date();
  // const options = { month: "short", day: "numeric", year: "numeric" };
  // const formattedDate = date.toLocaleString("en-US", options);
  return (
    <>
      <DashboardNav />
      <section className="main-section">
        <section className="intro">
          <h2>Carbon intensity forecast</h2>
          <p>
            National Grid’s Carbon Intensity provides an indicative trend of
            regional carbon intensity of the electricity system in Great Britain
            (GB) up to 2 days ahead of real-time. It provides programmatic and
            timely access to both forecast and estimated carbon intensity data.
          </p>
        </section>
        <section className="main-chart">
          <h4>Carbon Intensity Forecast -24hrs to +48hrs </h4>
          <Linechart />
        </section>
        <section className="dashboard">
          <article>
            <h5>Generation mix for the current half hour in %</h5>
            <Piechart />
          </article>
          <article>
            <h5>Carbon Intensity average in last 24 hours</h5>
            <Speedometer />
          </article>
        </section>
      </section>
    </>
  );
};
export default Dashboard;

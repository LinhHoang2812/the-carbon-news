import Headlines from "../Components/Headlines";
import Navbar from "../Components/Navbar";
import Tab from "../Components/Tab";
import TopStories from "../Components/TopStories";

const Home = () => {
  return (
    <main>
      <Navbar />
      <TopStories />
      <Headlines />
      <Tab />
    </main>
  );
};
export default Home;

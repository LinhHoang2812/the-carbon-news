import { useGlobalContext } from "../context";
import { home } from "../data";
import { news } from "../data";
import defaultImage2 from "../default_img2.jpg";
const TopStories = () => {
  const { selected } = useGlobalContext();

  const articles =
    selected === "Home"
      ? [...home]
      : news.find((page) => page.page === selected).articles;

  return (
    <section className="top-stories">
      <div className="top-stories-container">
        <div className="main-story">
          <article>
            <img
              src={
                articles[0].urlToImage ? articles[0].urlToImage : defaultImage2
              }
            />
            <h4>{articles[0].title}</h4>
            <p>{articles[0].description}</p>
            <a href={articles[0].url} className="read-more">
              Read more...
            </a>
          </article>
        </div>
        <div className="support-stories">
          <article>
            <img
              src={
                articles[1].urlToImage ? articles[1].urlToImage : defaultImage2
              }
            />
            <h5>{articles[1].title}</h5>

            <small>
              <a href={articles[1].url} className="read-more">
                Read more...
              </a>
            </small>
          </article>
          <article>
            <img
              src={
                articles[2].urlToImage ? articles[2].urlToImage : defaultImage2
              }
            />
            <h5>{articles[2].title}</h5>
            <small>
              <a href={articles[2].url} className="read-more">
                Read more...
              </a>
            </small>
          </article>
        </div>
      </div>
    </section>
  );
};
export default TopStories;

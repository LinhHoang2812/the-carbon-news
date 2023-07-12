import defaultImg2 from "../default_img2.jpg";
import { news, home } from "../data";
import { nanoid } from "nanoid";
import { useGlobalContext } from "../context";

const Tab = () => {
  const { selected } = useGlobalContext();
  const articles =
    selected === "Home"
      ? [...home]
      : news.find((page) => page.page === selected).articles;
  console.log(articles);
  return (
    <section className="all-articles">
      <div>
        {articles.slice(3).map(({ urlToImage, url, title, description }) => (
          <article className="news" key={nanoid()}>
            <img src={urlToImage ? urlToImage : defaultImg2} />
            <div className="news-info">
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={url} className="read-more">
                Read more....
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="empty-div"></div>
    </section>
  );
};
export default Tab;

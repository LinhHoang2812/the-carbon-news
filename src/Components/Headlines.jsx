// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import defaultImg from "../default_img.jpg";
import Slider from "react-slick";
import { headlines } from "../data";
import { nanoid } from "nanoid";
const Headlines = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <section className="headlines-section">
      <div className="headlines-banner">Headline stories</div>

      <Slider {...settings}>
        {headlines.map(({ title, urlToImage: image, url }) => (
          <div key={nanoid()}>
            <img src={image ? image : defaultImg} className="headlines-img" />
            <p>
              <a href={url} className="headlines-story-link">
                {title}
              </a>
            </p>
          </div>
        ))}
      </Slider>
    </section>
  );
};
export default Headlines;

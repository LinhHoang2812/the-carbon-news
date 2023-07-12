import { social } from "../data";

const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <div className="location">
          <h5>Find us at:</h5>
          <p>Europe, Earth</p>
        </div>
        <div className="social-links">
          <h5>Our social media:</h5>
          {social.map(({ id, url, icon }) => (
            <a href={url} key={id}>
              {icon}
            </a>
          ))}
        </div>
      </section>
      <div className="copyright">
        <small> © 2023 by Linh Hoang</small>
      </div>
    </footer>
  );
};
export default Footer;

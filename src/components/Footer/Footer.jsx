import "./Footer.css";

// Is at the bottom of Layout component
const Footer = () => (
  <footer>
    <div className="footer-icons">
      <div className="icon-box"></div>
      <div className="icon-box"></div>
      <div className="icon-box"></div>
    </div>
    <div className="footer-links">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">support</a>
        </li>
        <li>
          <a href="/">github</a>
        </li>
        <li>
          <a href="/">other projects</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;

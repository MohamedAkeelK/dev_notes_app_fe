import "./Layout.css";
import Nav from "../Nav/Nav";
// import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

// wrap each page in this layout,   except sign up / sign in, or shhould you... idk?
const Layout = (props) => (
  <div className="layout">
    <Nav user={props.user} />
    <div className="after-nav-elems">
      <Sidebar user={props.user} />
      <div className="children">{props.children}</div>
      {/* <Footer /> */}
    </div>
  </div>
);

export default Layout;

import './Layout.css'
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props) => (
  <div className="layout">
    
    <Sidebar user={props.user} />

    <div className="main-content">
      <Nav user={props.user} />
      <div className="layout-children">{props.children}</div>
      <Footer />
    </div>

  </div>
);

export default Layout;

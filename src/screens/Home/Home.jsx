import "./Home.css";
import { Layout } from "../../components";
import AllProjectCards from "../../components/AllProjectCards/AllProjectCards";
import LatestProjectCards from "../../components/LatestProjectCards/LatestProjectCards.jsx";

import { NavLink } from "react-router-dom";

const Home = (props) => {
  // console.log("THE USER : ", props.user)
  return (
    <Layout user={props.user}>
      <div className="">
        <section className="hero">
          <div className="hero-left">
            <div className="hero-text">
              <h1 className="">We help you get organized.</h1>
              <h2>Start boosting your productivity now! </h2>
              <br />
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat, explicabo? Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Ipsam, quos!
              </p>
              <br />
              <NavLink className="cta" to="/add-project">
                Start Creating
              </NavLink>
            </div>
          </div>
        </section>
        {/* section below latest cards on home page */}
        <LatestProjectCards />

        <section className="">
          <h1 className="all-p-title">Featured Projects</h1>
          <AllProjectCards />
        </section>
        <section>
          
        </section>
      </div>
    </Layout>
  );
};

export default Home;

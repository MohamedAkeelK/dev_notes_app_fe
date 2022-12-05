import './Home.css'
import { Layout, ProjectCards } from '../../components'

import AllProjectCards from '../../components/AllProjectCards/AllProjectCards'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <section className="home-hero">
          <div className="home-left-hero">
            <h1 className='home-title'>Need organization? Start boosting your productivity now! </h1>
            <p className='home-caption'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, explicabo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quos!</p>
            <a href="/" className='cta-btn'>
              Start Creating
            </a>
          </div>
          <div className="home-right-hero">
            {/* <div className="hero-right-img"> */}

            {/* </div> */}
          </div>
        
        </section>

        <ProjectCards />

        <section className="home-all-projects">
          <h1 className="home-all-project-title">
            All Projects  
          </h1>
          <AllProjectCards />
          

        </section>

      </div>
    </Layout> 
  )
}

export default Home


    
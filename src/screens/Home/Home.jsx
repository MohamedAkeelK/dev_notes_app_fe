import './Home.css'
import { Layout, ProjectCards } from '../../components'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <section className="home-hero">
          <h1 className='home-title'>Welcome To DevNotes</h1>
          <p className='home-caption'>Need organization? Your solution to managing your projects! <br /> be clean, cut and precise.</p>
        </section>
        <h1 className='latest-projects-title'>Latest Projects</h1>

        <ProjectCards />

        <section className="home-all-projects">
          <h1 className="home-all-project-title">
            All Projects  
          </h1>
        <ProjectCards />

        </section>

      </div>
    </Layout> 
  )
}

export default Home


    
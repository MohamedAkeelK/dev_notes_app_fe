import './Home.css'
import { Layout, ProjectCards } from '../../components'

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div className='home'>
        <ProjectCards />
      </div>
    </Layout>
  )
}

export default Home

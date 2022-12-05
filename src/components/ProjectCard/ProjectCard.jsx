import './ProjectCard.css';
import { Link } from 'react-router-dom'
const ProjectCard = (props) => {
  // console.log(props)

    return (
        <div className="project-card">
            <Link className="card" to={`/projects/${props._id}`}>
              <img className="project-card-image" src={props.imgURL} alt={props.name} />
              <div className="deadline">deadline: {props.deadline}</div>
              <div className="mydescription">description: {props.description }</div>
              <div className='home-view-btn'>View</div>
            </Link>
        </div>
    )
}

export default ProjectCard
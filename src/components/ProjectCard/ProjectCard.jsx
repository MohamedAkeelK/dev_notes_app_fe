import './ProjectCard.css';
import { Link } from 'react-router-dom'
import Project from '../Project/Project';

const ProjectCard = (props) => {
    return (
        <div className="card">
        <Link className="inner-card" to={`/projects/${props._id}`}>
          <p>{props.username }</p>
              <img className="" src={props.imgURL} alt={props.name} />
              <div className="">deadline: {props.deadline}</div>
              <div className="">description: {props.description }</div>
              <div className=''>View</div>
            </Link>
        </div>
    )
}

export default ProjectCard
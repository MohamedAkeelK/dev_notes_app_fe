import './ProjectCard.css';
import { Link } from 'react-router-dom'
const ProjectCard = (props) => {
  // console.log(props)

    return (
        <div className="product-card">
            <Link className="card" to={`/projects/${props._id}`}>
              <img className="product-card-image" src={props.imgURL} alt={props.name} />
              <div classsName="deadline">{props.deadline}</div>
              {/* <div className="mydescription">{props.description }</div> */}
              <div>View</div>
            </Link>
        </div>
    )
}

export default ProjectCard
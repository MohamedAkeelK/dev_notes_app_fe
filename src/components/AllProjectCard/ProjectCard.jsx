import './ProjectCard.css';
import { Link } from 'react-router-dom'
const ProjectCard = (props) => {
  // console.log(props)

    return (
        <div className="all-project-cardss">
            <Link className="all-card" to={`/projects/${props._id}`}>
              <div className='all-card-inner'>
                <img className="all-project-card-image" src={props.imgURL} alt={props.name} />
                <div className="all-deadline">deadline: {props.deadline}</div>
                {/* <div className="all-mydescription">description: {props.description }</div>
                <div className='all-home-view-btn'>View</div> */}
              </div>
            </Link>
            </div>
    )
}

export default ProjectCard
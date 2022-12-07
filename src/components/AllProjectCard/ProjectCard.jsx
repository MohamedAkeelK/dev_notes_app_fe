import './ProjectCard.css';
import { Link } from 'react-router-dom'
const ProjectCard = (props) => {
  // console.log(props)

    return (
        <div className="">
            <Link className="" to={`/projects/${props._id}`}>
              <div className=''>
                <img className="" src={props.imgURL} alt={props.name} />
                <div className="">deadline: {props.deadline}</div>
            {/* <div className="all-mydescription">description: {props.description }</div> */}
                <div>
                  {props.techStack}
                </div>
                <div className=''>View</div>
              </div>
            </Link>
            </div>
    )
}

export default ProjectCard
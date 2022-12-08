import "./ProjectCard.css";
import { Link } from "react-router-dom";
import { limitDes } from "../ProjectCard/ProjectCard";
const ProjectCard = (props) => {
  // console.log(props)

  return (
    <div className="all-projects-card">
      <Link className="all-projects-link" to={`/projects/${props._id}`}>
          <img className="" src={props.imgURL} alt={props.name} />
          <p className="">deadline: {props.deadline}</p>
          <p className="all-mydescription">
            description: {limitDes(props.description)}...
          </p>
          {/* <p>{props.techStack}</p> */}
          <div className="">View</div>
      </Link>
    </div>
  );
};

export default ProjectCard;

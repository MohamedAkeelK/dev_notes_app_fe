import "./Project.css";
import { Link } from "react-router-dom";

// This component is called in screens/projects at the route /projects
const Project = (props) => {
  // console.log(props);
  return (
    <div className="project">
      <Link className="" to={`/projects/${props._id}`}>
        <img className="" src={props.imgURL} alt={props.name} />
        <div className="postedby">Posted by: {props.username}</div>
        <div className="">
          <strong>authors: </strong>
          {props.authors[0]}, {props.authors[1]}
        </div>
        <div className="">
          <strong>project name: </strong>
          {props.name}
        </div>
        <div className="">
          <strong>project description: </strong>
          {props.description}
        </div>
        <div className="createdat">created at: {props.createdAt}</div>
        <a href="/" className="view-btn">
          View
        </a>
        {/* <div className="">team: {props.team}</div> */}
        {/* <div className="">codeSource: {props.codeSource}</div> */}
        {/* <div className="">deadline: {props.deadline}</div> */}
        {/* <div className="">techStack: {props.techStack}</div> */}
        {/* <div className="">tasks: {props.tasks}</div> */}
      </Link>
    </div>
  );
};
export default Project;

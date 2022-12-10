import "./Project.css";
import { Link } from "react-router-dom";

// This component is called in screens/projects at the route /projects
const Project = (props) => {
  // console.log(props);
  return (
    <div className="project">
      <Link className="" to={`/projects/${props._id}`}>
        <img className="" src={props.imgURL} alt={props.name} />
        <div className="">Posted by: {props.username}</div>
        <div className="">
          authors: {props.authors[0]}, {props.authors[1]}
        </div>
        <div className="">project name: {props.name}</div>
        <div className="">project description: {props.description}</div>
        <div className="">created at: {props.createdAt}</div>
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

import "./LatestProjectCard.css";
import { Link } from "react-router-dom";

export const limitDes = (des) => {
  let newdes = [];
  for (let i = 0; i < 80; i++) {
    newdes.push(des[i]);
  }
  return newdes;
};

// Appears on Home Page under Latest Projects
// Called in components/LatestProjectCards.jsx
const LatestProjectCard = (props) => {
  return (
    <div className="card">
      <Link className="inner-card" to={`/projects/${props._id}`}>
        <p>{props.postedBy}</p>
        <img className="" src={props.imgURL} alt={props.name} />
        <div className="">deadline: {props.deadline}</div>
        <div className="">{limitDes(props.description)} ...</div>
        <div className="">View</div>
      </Link>
    </div>
  );
};

export default LatestProjectCard;

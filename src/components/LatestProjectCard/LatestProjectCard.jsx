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
        {/* <p>{props.postedBy}</p> */}
        <img
          className="latest-project-name"
          src={props.imgURL}
          alt={props.name}
        />
        <div className="latest-project-name postedby">
          <strong>Posted by: </strong>
          {props.username}
        </div>
        <div className="latest-project-name">{props.name}</div>
        <div className="">{limitDes(props.description)} ...</div>
        <div className="view-btn">View</div>
      </Link>
    </div>
  );
};

export default LatestProjectCard;

import "./Sidebar.css";
import { NavLink } from "react-router-dom";

// const authenticatedOptions = (
//   <>
//     {/* <NavLink className="link" to="/my-projects">My Projects</NavLink> */}
//     <NavLink className="link" to="/add-project">Add Project</NavLink>
//   </>
// )

// const unauthenticatedOptions = (
//   <>
//       <NavLink className="link" to="/add-project">My Projects</NavLink>
//   </>
// )

const alwaysOptions = (
  <>
    <NavLink className="link" to="/">
      Home
    </NavLink>
    <NavLink className="link" to="/add-project">
      Add Project
    </NavLink>
    <NavLink className="link" to="/projects">
      All Projects
    </NavLink>
    {/* <NavLink className="link account" to="/projects">
      Account
    </NavLink> */}
  </>
);

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      {alwaysOptions}
      {/* {props.user ? authenticatedOptions : null} */}
    </div>
  );
}

// function checkUser() {
//   if (props.user) {
//     ret
//   }
// }

// console.log(props.user)

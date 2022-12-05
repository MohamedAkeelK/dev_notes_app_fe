import './Sidebar.css'
import { NavLink } from 'react-router-dom'

// const authenticatedOptions = (
//   <>
//     {/* <NavLink className="link" to="/my-projects">My Projects</NavLink> */}
//     <NavLink className="link" to="/add-project">Add Project</NavLink>
//   </>
// )

const alwaysOptions = (
  <>
    <NavLink className="link" to="/">Home</NavLink>
    <NavLink className="link" to="/add-project">Add Project</NavLink>
    <NavLink className="link" to="/projects"> Projects</NavLink>
  </>
)

// const unauthenticatedOptions = (
//   <>
//       <NavLink className="link" to="/add-project">My Projects</NavLink>
//   </>
// )

export default function Sidebar(props) {

  // function checkUser() {
  //   if (props.user) {
  //     ret
  //   }
  // }

  // console.log(props.user)

  return (
    <div className='sidebar'>
      {alwaysOptions}
      {/* {props.user ? authenticatedOptions : null} */}
    </div>
  )
}

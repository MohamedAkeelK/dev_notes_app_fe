import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
      <NavLink className="link" to="/add-project">Add Project</NavLink>
      {/* <NavLink className="link" to="/sign-out">Sign Out</NavLink> */}
  </>
)

const alwaysOptions = (
  <>
      <NavLink className="link" to="/projects">Projects</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
      <NavLink className="link" to="/add-project">Projects</NavLink>
  </>
)

export default function Sidebar(props) {
  return (
    <div className='sidebar'>
      {alwaysOptions}
      {props.user ? authenticatedOptions : unauthenticatedOptions}
    </div>
  )
}

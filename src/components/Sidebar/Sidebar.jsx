import './Sidebar.css'
import { NavLink } from 'react-router-dom'

const authenticatedOptions = (
  <>
    <NavLink className="link" to="/projects">My Projects</NavLink>
    <NavLink className="link" to="/add-project">Add Project</NavLink>
  </>
)

const alwaysOptions = (
  <>
      <NavLink className="link" to="/">World Projects</NavLink>
  </>
)

const unauthenticatedOptions = (
  <>
      <NavLink className="link" to="/add-project">My Projects</NavLink>
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

import "./Nav.css";
import { NavLink } from "react-router-dom";

const authenticatedOptions = (
  <>
    {/* <NavLink className="link" to="/add-project">Add Project</NavLink> */}
    <NavLink className="link" to="/sign-out">
      Sign Out
    </NavLink>
  </>
);
const unauthenticatedOptions = (
  <>
    <NavLink className="link" to="/sign-up">
      Sign Up
    </NavLink>
    <NavLink className="link" to="/sign-in">
      Sign In
    </NavLink>
  </>
);
// const alwaysOptions = (
//     <>
//         <NavLink className="link" to="/projects">Projects</NavLink>
//     </>
// )

// Called in Layout component
const Nav = ({ user }) => {
  return (
    <nav>
      <NavLink className="logo" to="/">
        DevNotes
      </NavLink>
      <div className="nav-right">
        <form className="search">
          {/* <label htmlFor="search" className='search-label'>Search</label> */}
          {/* <input
            type="text"
            className="searchbar"
            name="search"
            placeholder="Search"
          />
          <input type="submit" name="submit" id="search-submit" /> */}
        </form>
        {user && <div className="welcome">Welcome, {user.username}</div>}
        {/* {alwaysOptions} */}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  );
};
export default Nav;

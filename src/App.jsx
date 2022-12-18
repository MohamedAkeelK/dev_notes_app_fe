import { useState, useEffect } from "react";
import "./App.css";
import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";
import ProjectCreate from "./screens/ProjectCreate/ProjectCreate";
import ProjectEdit from "./screens/ProjectEdit/ProjectEdit";
import ProjectDetail from "./screens/ProjectDetail/ProjectDetail";
import { Routes, Route, Navigate } from "react-router-dom";
import { verifyUser } from "./services/users";
import SignUp from "./screens/SignUp/SignUp";
import SignIn from "./screens/SignIn/SignIn";
import SignOut from "./screens/SignOut/SignOut";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/sign-up" element={<SignUp setUser={setUser} />} />
        <Route path="/sign-in" element={<SignIn setUser={setUser} />} />
        <Route path="/sign-out" element={<SignOut setUser={setUser} />} />
        <Route path="/projects" element={<Projects user={user} />} />
        <Route
          path="/add-project"
          element={
            user ? <ProjectCreate user={user} /> : <Navigate to="/sign-up" />
          }
        />
        <Route
          path="/projects/:id/edit"
          element={
            user ? <ProjectEdit user={user} /> : <Navigate to="/sign-up" />
          }
        />
        <Route path="/projects/:id" element={<ProjectDetail user={user} />} />
      </Routes>
    </div>
  );
};

export default App;

// todo : add feature to request help on a project task.

import { useState, useEffect } from "react";
import "./AllProjectCards.css";
import AllProjectCard from "../AllProjectCard/AllProjectCard";
import { getProjects } from "../../services/projects";

// THIS COMP APPEARS ON HOME PAGE AT ALL PROJECTS SECTION
// gets called in screens/Home.jsx

const AllProjectCards = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects();
      setProjects(allProjects);
      // console.log(allProjects)
    };
    fetchProjects();
  }, []);

  const CARDS = projects
    .reverse()
    .map((project, index) =>
      index < 10 ? (
        <AllProjectCard
          _id={project._id}
          name={project.name}
          username={project.username}
          description={project.description}
          deadline={project.deadline}
          imgURL={project.imgURL}
          createdAt={project.createdAt}
          techStack={project.techStack}
          team={project.team}
          tasks={project.tasks}
          key={index}
        />
      ) : null
    );

  return (
    // <>
    //   <div className=''>
    <div className="all-cards">{CARDS}</div>
    // </div>
    // </>
  );
};

export default AllProjectCards;

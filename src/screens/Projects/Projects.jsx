import { useState, useEffect } from "react";
import "./Projects.css";

import { Layout, Project } from "../../components";
// import { AZ, ZA, lowestFirst, highestFirst } from '../../utils/sort'
import { getProjects } from "../../services/projects";

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  // const [searchResult, setSearchResult] = useState([])
  // const [applySort, setApplySort] = useState(false)
  // const [sortType, setSortType] = useState('name-ascending')

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects();
      setProjects(allProjects);
      // setSearchResult(allProjects)
    };
    fetchProjects();
  }, []);

  // const handleSort = (type) => {
  //   if (type !== '' && type !== undefined) {
  //     setSortType(type)
  //   }
  //   switch (type) {
  //     case 'name-ascending':
  //       setSearchResult(AZ(searchResult))
  //       break
  //     case 'name-descending':
  //       setSearchResult(ZA(searchResult))
  //       break
  //     case 'price-ascending':
  //       setSearchResult(lowestFirst(searchResult))
  //       break
  //     case 'price-descending':
  //       setSearchResult(highestFirst(searchResult))
  //       break
  //     default:
  //       break
  //   }
  // }

  // if (applySort) {
  //   handleSort(sortType)
  //   setApplySort(false)
  // }

  // const handleSearch = (event) => {
  //   const results = projects.filter((project) =>
  //     project.name.toLowerCase().includes(event.target.value.toLowerCase())
  //   )
  //   setSearchResult(results)
  //   setApplySort(true)
  // }

  // const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      {/* <Search onSubmit={handleSubmit} handleSearch={handleSearch} />
      <Sort onSubmit={handleSubmit} handleSort={handleSort} /> */}
      <div className="project-ctr">
        <h1 className="projects-page-title">All Projects Posted</h1>
        {projects.map((project, index) => {
          return (
            <Project
              _id={project._id}
              username={project.username}
              authors={project.authors}
              team={project.team}
              name={project.name}
              description={project.description}
              codeSource={project.codeSource}
              imgURL={project.imgURL}
              deadline={project.deadline}
              techStack={project.techStack}
              tasks={project.tasks}
              createdAt={project.createdAt}
              key={index}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Projects;

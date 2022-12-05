import { useState, useEffect } from 'react'
import './AllProjectCards.css'
import AllProjectCard from '../AllProjectCard/ProjectCard'
import { getProjects } from '../../services/projects'

const AllProjectCards = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getProjects()
      setProjects(allProjects)
      // console.log(allProjects)
    }
    fetchProjects()

  }, [])

  const CARDS = projects
    .reverse()
    .map((project, index) =>
      index < 10 ? (
        <AllProjectCard
          _id={project._id}
          name={project.name}
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
    )

  return (
    <>
      <div className='all-project-cards'>
        <div className='all-cards'>{CARDS}</div>
      </div>
    </>
  )
}

export default AllProjectCards;

import { useState, useEffect } from 'react'
import './ProjectCards.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import { getProjects } from '../../services/projects'

const ProjectCards = () => {
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
      index < 6 ? (
        <ProjectCard
          _id={project._id}
          name={project.name}
          username={ project.username}
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
      <div className='lll'>
      <h1 className='latest-t'>Latest Projects</h1>

        <div className='cards'>{CARDS}</div>
      </div>
    </>
  )
}

export default ProjectCards

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
    }
    fetchProjects()
  }, [])

  const CARDS = projects
    .reverse()
    .map((project, index) =>
      index < 8 ? (
        <ProjectCard
          _id={project._id}
          name={project.name}
          imgURL={project.imgURL}
          key={index}
        />
      ) : null
    )

  return (
    <div className='product-cards'>
      <div className='latest'>LATEST</div>
      <div className='cards'>{CARDS}</div>
    </div>
  )
}

export default ProjectCards

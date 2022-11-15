import { useState, useEffect } from 'react'
import './ProjectDetail.css'
import { Layout } from '../../components'
import { getProject, deleteProject } from '../../services/projects'
import { useParams, Link } from 'react-router-dom'

const ProjectDetail = (props) => {
  const [project, setProject] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject(id)
      setProject(project)
      setLoaded(true)
    }
    fetchProject()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <div className='product-detail'>
        <img
          className='product-detail-image'
          src={project.imgURL}
          alt={project.name}
        />
        <div className='detail'>
          <div className='name'>{project.name}</div>
          <div className='description'>{project.description}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/projects/${project._id}/edit`}>
              Edit
            </Link>
            <Link
              to={`/projects`}
              className='delete-button'
              onClick={() => deleteProject(project._id)}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectDetail

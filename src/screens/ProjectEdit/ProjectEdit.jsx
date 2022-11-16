import { useState, useEffect } from 'react'
// import './ProjectEdit.css'
import { useParams, useNavigate } from 'react-router-dom'
import { Layout } from '../../components'
import { getProject, updateProject } from '../../services/projects'

const ProjectEdit = (props) => {

  let navigate = useNavigate()

  const [project, setProject] = useState({
    name: '',
    description: '',
    imgURL: '',
  })

  let { id } = useParams()

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject(id)
      setProject(project)
    }
    fetchProject()
  }, [id])

  const handleChange = (event) => {
    const { name, value } = event.target
    setProject({
      ...project,
      [name]: value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await updateProject(id, project)
    navigate(`/projects/${id}`)
  }

  return (
    <Layout user={props.user}>
      <div className='product-edit'>
        <div className='image-container'>
          <img
            className='edit-product-image'
            src={project.imgURL}
            alt={project.name}
          />
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={project.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Name'
            value={project.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <textarea
            className='textarea-description'
            rows={10}
            cols={78}
            placeholder='Description'
            value={project.description}
            name='description'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default ProjectEdit

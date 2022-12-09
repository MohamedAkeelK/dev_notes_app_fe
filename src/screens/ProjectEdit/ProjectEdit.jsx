import { useState, useEffect } from "react";
import "./ProjectEdit.css";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "../../components";
import { getProject, updateProject } from "../../services/projects";

const ProjectEdit = (props) => {
  let navigate = useNavigate();

  const [project, setProject] = useState({
    name: "",
    username: "",
    authors: "",
    description: "",
    imgURL: "",
    codeSource: "",
    techStack: "",
    deadline: "",
    tasks: "",
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject(id);
      setProject(project);
    };
    fetchProject();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject({
      ...project,
      [name]: value,
    });
  };
  /// passing id of project
  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateProject(id, project);
    navigate(`/projects/${id}`);
  };

  return (
    <Layout user={props.user}>
      <div className="product-edit">
        <div className="image-container">
          <img
            className="edit-product-image"
            src={project.imgURL}
            alt={project.name}
          />
          <form onSubmit={handleSubmit}>
            <label htmlFor="imgURL">Image Link: </label>
            <input
              className="edit-input-image-link"
              placeholder="Image Link"
              value={project.imgURL}
              name="imgURL"
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Project Name: </label>
          <input
            className="input-name"
            placeholder="Name"
            value={project.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <label htmlFor="username">Username: </label>
          <input
            className="input-username"
            placeholder="username"
            value={project.username}
            name="username"
            required
            autoFocus
            onChange={handleChange}
          />
          <label htmlFor="authors">Authors: </label>
          <input
            className="input-authors"
            placeholder="authors"
            value={project.authors}
            name="authors"
            autoFocus
            onChange={handleChange}
          />
          {/* <label htmlFor="username">username: </label> */}
          {/* <input
            className="input-image-link"
            placeholder="Image Link"
            value={project.imgURL}
            name="imgURL"
            onChange={handleChange}
          /> */}
          <label htmlFor="codeSource">Code Source: </label>
          <input
            className="input-codeSource-link"
            placeholder="codeSource Link"
            value={project.codeSource}
            name="codeSource"
            onChange={handleChange}
          />
          <label htmlFor="techStack">Tech Stack: </label>
          <input
            className="input-techStack-link"
            placeholder="techStack Link"
            value={project.techStack}
            name="techStack"
            onChange={handleChange}
          />
          <label htmlFor="deadline">Deadline: </label>
          <input
            className="input-deadline-link"
            placeholder="deadline"
            value={project.deadline}
            name="deadline"
            onChange={handleChange}
          />
          <label htmlFor="tasks">Tasks: </label>
          <input
            className="input-tasks-link"
            placeholder="tasks"
            value={project.tasks}
            name="tasks"
            onChange={handleChange}
          />
          <label htmlFor="description">Description: </label>
          <textarea
            className="textarea-description"
            rows={10}
            cols={78}
            placeholder="Description"
            value={project.description}
            name="description"
            required
            onChange={handleChange}
          />

          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ProjectEdit;

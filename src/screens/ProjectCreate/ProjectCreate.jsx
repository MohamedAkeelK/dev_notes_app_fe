import { useState } from "react";
import './ProjectCreate.css'
import { Layout } from "../../components";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projects";

const ProjectCreate = (props) => {
  let navigate = useNavigate();

  const [project, setProject] = useState({
    name: "",
    description: "",
    imgURL: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProject({
      ...project,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createProject(project);
    navigate("/projects");
  };

  return (
    <Layout user={props.user}>
      <h1 className="create-title">Create a Project</h1>
      <form className="create-form" onSubmit={handleSubmit}>
        <input
          className="input-name"
          placeholder="Project name"
          value={project.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-name"
          placeholder="author"
          value={project.username}
          name="username"
          required
          autoFocus
          onChange={handleChange}
        />
        <textarea
          className="textarea-description"
          rows={10}
          placeholder="Description"
          value={project.description}
          name="description"
          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={project.imgURL}
          name="imgURL"
          required
          onChange={handleChange}
        />
        <input
          className="input-codeSource-link"
          placeholder="codeSource Link"
          value={project.codeSource}
          name="codeSource"
          required
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default ProjectCreate;

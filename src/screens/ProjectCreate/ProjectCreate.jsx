import { useState } from "react";
import "./ProjectCreate.css";
import { Layout } from "../../components";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../services/projects";

const ProjectCreate = (props) => {
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
        <label htmlFor="name">Enter Your Project Name</label>
        <input
          className="input-name"
          placeholder="Project name"
          value={project.name}
          name="name"
          required
          autoFocus
          onChange={handleChange}
        />
        <label htmlFor="username">Who is the project creator?</label>
        <input
          className="input-username"
          placeholder="username"
          value={project.username}
          name="username"
          required
          autoFocus
          onChange={handleChange}
        />
        <label htmlFor="authors">Project Authors</label>
        <input
          className="input-authors"
          placeholder="authors"
          value={project.authors}
          name="authors"
          autoFocus
          onChange={handleChange}
        />
        <label htmlFor="description">
          Please enter a description of your project.
        </label>
        <textarea
          className="textarea-description"
          rows={10}
          placeholder="Description"
          value={project.description}
          name="description"
          required
          onChange={handleChange}
        />
        <label htmlFor="imgURL">Image link for you project.</label>
        <input
          className="input-image-link"
          placeholder="Image Link"
          value={project.imgURL}
          name="imgURL"
          onChange={handleChange}
        />
        <label htmlFor="codeSource">Enter Github Link</label>
        <input
          className="input-codeSource-link"
          placeholder="codeSource Link"
          value={project.codeSource}
          name="codeSource"
          onChange={handleChange}
        />
        <label htmlFor="techStack">What tech stack did you use? </label>
        <input
          className="input-techStack-link"
          placeholder="techStack Link"
          value={project.techStack}
          name="techStack"
          onChange={handleChange}
        />
        <label htmlFor="deadline">Enter project deadline</label>
        <input
          className="input-deadline-link"
          placeholder="deadline"
          value={project.deadline}
          name="deadline"
          onChange={handleChange}
        />
        <label htmlFor="tasks">Enter Project tasks seperated by commas</label>
        <input
          className="input-tasks-link"
          placeholder="tasks"
          value={project.tasks}
          name="tasks"
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

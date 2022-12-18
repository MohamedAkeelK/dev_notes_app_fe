import { useState, useEffect } from "react";
import "./ProjectDetail.css";
import { Layout } from "../../components";
import { getProject, deleteProject } from "../../services/projects";
import { useParams, Link } from "react-router-dom";

const ProjectDetail = (props) => {
  const [project, setProject] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const project = await getProject(id);
      setProject(project);
      setLoaded(true);
    };
    fetchProject();
  }, [id]);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="project-detail">
        <img
          className="product-detail-image"
          src={project.imgURL}
          alt={project.name}
        />
        <h1 className="detail-name">{project.name}</h1>
        <div className="detail-createdat">created at: {project.createdAt}</div>

        <div className="detail">
          <h2>Description</h2>
          <div className="description">{project.description}</div>
          <h2>Posted By</h2>
          <div className="">{project.username}</div>
          <h2>Authors</h2>
          <div className="">
            {project.authors[0]}, {project.authors[1]}
          </div>
          {/* <h2>Team</h2> */}
          {/* <div className="">{project.team[0]}</div> */}
          <h2>Code Source</h2>
          <div className="">{project.codeSource}</div>
          <h2>Deadline</h2>
          <div className="">{project.deadline}</div>
          <h2>Tech Stack Used</h2>
          <div className="">{project.techStack}</div>
          <h2>Tasks</h2>
          <div className="">{project.tasks}</div>
          <div className="button-container">
            <Link className="edit-button" to={`/projects/${project._id}/edit`}>
              Edit
            </Link>
            <Link
              to={`/projects`}
              className="delete-button"
              onClick={() => deleteProject(project._id)}
            >
              Delete
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;

import api from "./apiConfig";
import getToken from "./apiConfig";

export const getProjects = async () => {
  try {
    const response = await api.get("/projects");
    // console.log(response.data.name);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProject = async (id) => {
  try {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsersProjects = async () => {
  try {
    const response = await api.get(`/projects/my-projects`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProject = async (project) => {
  try {
    const response = await api.post("/projects", project);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProject = async (id, project) => {
  try {
    const response = await api.put(`/projects/${id}`, project);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProject = async (id) => {
  try {
    const resul = await getToken();
    console.log(resul.config.headers.Authorization);
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

import api from "./apiConfig";

export const getProducts = async () => {
  try {
    const response = await api.get("/projects");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (product) => {
  try {
    const response = await api.post("/projects", product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, product) => {
  try {
    const response = await api.put(`/projects/${id}`, product);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

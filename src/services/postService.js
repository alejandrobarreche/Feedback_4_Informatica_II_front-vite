import axios from 'axios';

// Cambiado: apunta al BFF en lugar del backend directo
const API_BASE = import.meta.env.VITE_API_URL;

export const getAllPosts = () => {
    return axios.get(`${API_BASE}/posts`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const getPostById = (id) => {
    return axios.get(`${API_BASE}/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const createPost = (data) => {
    // data = { title: "...", content: "..." }
    return axios.post(`${API_BASE}/posts`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const updatePost = (id, data) => {
    return axios.put(`${API_BASE}/posts/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const deletePost = (id) => {
    return axios.delete(`${API_BASE}/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
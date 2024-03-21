import axios from 'axios';

const API_URL = 'http://localhost:4000'; // Remplacez par l'URL de votre API

const fetchMaterials = async () => {
    return await axios.get(`${API_URL}/materials`);
};

const fetchMaterialById = async (id) => {
    return await axios.get(`${API_URL}/materials/${id}`);
};

const createMaterial = async (newMaterial) => {
    return await axios.post(`${API_URL}/materials`, newMaterial);
};

const updateMaterial = async (id, updatedMaterial) => {
    return await axios.put(`${API_URL}/materials/${id}`, updatedMaterial);
};

const deleteMaterial = async (id) => {
    return await axios.delete(`${API_URL}/materials/${id}`);
};

export { fetchMaterials, fetchMaterialById, createMaterial, updateMaterial, deleteMaterial };
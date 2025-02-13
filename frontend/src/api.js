import axios from 'axios';

const API_URL = 'http://localhost:5000/products';

export const getProducts = async () => await axios.get(API_URL);
export const createProduct = async (product) => await axios.post(API_URL, product);
export const updateProduct = async (id, product) => await axios.put(`${API_URL}/${id}`, product);
export const deleteProduct = async (id) => await axios.delete(`${API_URL}/${id}`);

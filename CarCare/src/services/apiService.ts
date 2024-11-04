import axios from 'axios';
import { PostData } from '../types/PostData';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Função para buscar posts
export const fetchPosts = async (): Promise<PostData[]> => {
  const response = await api.get<PostData[]>('/posts');
  return response.data;
};

export default api;

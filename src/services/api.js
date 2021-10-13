import axios from "axios";
//aqui é feita a conexão com a minha API
const api_url = process.env.REACT_APP_API_URL;

const api = axios.create({
  baseURL: api_url,
});

export default api;

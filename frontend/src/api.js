import axios from 'axios';

// Criando uma conexão com o nosso servidor através do AXIOS
const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;
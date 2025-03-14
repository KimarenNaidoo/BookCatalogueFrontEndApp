import axios from "axios";

const API_URL = 'http://localhost:8081/api/books';

export default {
    getAllBooks() {
        return axios.get(`${API_URL}`);
    },

    getBookById(id) {
        return axios.get(`${API_URL}/${id}`);
    }
}
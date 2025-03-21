import axios from "axios";

const API_URL = 'http://localhost:8081/api/books/';

const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: false
});

export default {
    
    getAllBooks() {
        return apiClient.get();
    },

    getBookById(id) {
        return apiClient.get(`${id}`);
    }
}
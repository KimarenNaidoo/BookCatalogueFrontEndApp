import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_APP_API_URL;
const API_KEY = import.meta.env.VITE_BACKEND_APP_API_KEY;

const apiClient = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
        'Accept': 'application/json'
    },
    withCredentials: false
});

export default class bookService {
    
    static async getAllBooks() {
        try {
            return apiClient.get();
        }
        catch (error) {
            throw error;
        }
    }

    static async getBookById(id) {
        try {
            if (!id) {
                throw new Error("Book ID is required");
            }
            return apiClient.get(`${id}`);
        }
        catch (error) {
            throw error;
        }
    }

    static async getBooksUsingPagination(offset, limit) {
        try {
            if (offset < 0 || limit <= 0) {
                throw new Error("Offset must be non-negative and limit must be positive");
            }
            return apiClient.get('pagination', {
                params: {
                    offset: offset,
                    limit: limit
                }
            });
        }
        catch (error) {
            throw error;
        }
    }
}
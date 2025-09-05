import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_APP_API_URL;

const apiClient = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': import.meta.env.VITE_BACKEND_APP_API_KEY,
        'Accept': 'application/json'
    },
    withCredentials: false
});

export default class bookService {
    
    static async getAllBooks() {
        try {
            console.log("Fetching all books from:", API_URL);
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
}

// import axios from 'axios';

// const API_BASE_URL = 'https://reqres.in/api';

// Function to handle user authentication (login)
export const login = async (email: string, password: string): Promise<any> => {
    try {
                // APIs are not working due to CORS issue

        // const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        return true;
    } catch (error:any) {
        throw new Error(error.response?.data?.error || 'An error occurred during login');
    }
};

// Function to handle user registration (signup)
export const register = async (email: string, password: string): Promise<any> => {
    try {
        // APIs are not working due to CORS issue
        // const response = await axios.post(`${API_BASE_URL}/register`, { email, password });
        return true;
    } catch (error:any) {
        throw new Error(error.response?.data?.error || 'An error occurred during registration');
    }
};

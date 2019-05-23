import responseHandle from './ResponseHandler';
import axios from 'axios';

const baseUrl = `http://serveo.net:8013/api/users`;

// Function to handle user registration
export const register = async (state) => {
    try{
        const response = await axios.post(`${baseUrl}/register`,state);
        return response.data;
    }
    catch (error) {
        responseHandle(error);
        return Promise.reject();
    }
};

// Function to handle user login
export const login = async (state) => {
    try{
        const response = await axios.post(`${baseUrl}/login`,null,{params: {
            'email': state.email,
            'password': state.password
        }})
        return response.data;
    }
    catch (error) {
        responseHandle(error);
        return Promise.reject();
    }
};

// Function to handle user logout
export const logout = async (sessionID) => {
    try{
        const response = await axios.post(`${baseUrl}/logout`,{
            "Cookie": sessionID
        });
    }
    catch (error) {
        responseHandle(error);
        return Promise.reject();
    }
};
import responseHandle from './ResponseHandler';
import axios from 'axios';
import session from  '../session'

const baseUrl = `http://serveo.net:8013/api/users`;

// Function to handle user registration
export const register = async (state) => {
    try{
        const response = await axios.post(`${baseUrl}/register`,state);
        return response.data;
    }
    catch (error) {
        responseHandle(error);
    }
};

// Function to handle user login
export const login = async (state) => {
    try{
        const response = await axios.post(`${baseUrl}/login`,state)
        return response.data;
    }
    catch (error) {
        responseHandle(error);
    }
};

// Function to handle user logout
export const logout = async (sessionID) => {
    try{
        const response = await axios.post(`${baseUrl}/logout`,{
            "Cookie": sessionID
        });
        session.clearSession();
    }
    catch (error) {
        responseHandle(error);
    }
};
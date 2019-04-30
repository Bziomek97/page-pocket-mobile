import responseHandle from './ResponseHandler.js';
import axios from 'axios';

const baseUrl = `http://serveo.net:8013/api/pockets`;

export const getBookmark = async (id) => {
    try{
       const response = await axios.get((id === undefined) ? baseUrl : `${baseUrl}/${id}`);
       return response.data;
    }
    catch (error) {
        responseHandle(error);
    }
};

export const deleteBookmark = async (id) => {
    try {
        axios.delete(baseUrl+'/'+id)
    }
    catch (error) {
        responseHandle(error);
    }
};

export const postBookmark = async (state) => {
    try {
        const response = await axios.post(baseUrl,state);
        return response.data;
    }
    catch {
        responseHandle(error);
    }
};
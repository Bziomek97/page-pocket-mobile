import { Constants } from 'expo';
import responseHandle from './ResponseHandler.js';
import axios from 'axios';

  const baseUrl = `http://serveo.net:8013/api/pockets`;

// Function to handle saving bookmark for logged user
export const postBookmark = state => {
    axios.post(baseUrl,state)
    .then(response => return response.data)
    .catch(error => responseHandle(error));
}

// Function to handle show all or specific bookmarks for logged user
export const getBookmarks = (item) => {
    if(item === undefined){
        axios.get(baseUrl)
        .then(response => return response.data)
        .catch(error => responseHandle(error));
    }
    else {
        axios.get(`${baseUrl}/${item}`)
        .then(response => return response.data)
        .catch(error => responseHandle(error));
    }
}

// Function to handle delete bookmark for logged user
export const deleteBookmark = item => {
    axios.delete(baseUrl+'/'+item)
    .catch(error => responseHandle(error));
}
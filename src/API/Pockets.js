import { Constants } from 'expo';
import responseHandle from './ResponseHandler.js';
import axios from 'axios';

  const baseUrl = `http://serveo.net:8013/api/pockets`;

// Function to handle saving bookmark for logged user
export const postBookmark = state => {
    axios.post(baseUrl,{
        header: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    })
    .then(response => console.log(response))
    .catch(error => responseHandle(error));
}

// Function to handle show all bookmarks for logged user
export const getBookmarks = () => {
    let bookmarks;

    axios.get(baseUrl)
    .then(response => console.log(JSON.stringify(response)))
    .catch(error => esponseHandle(error));

    console.log(bookmarks);
    return bookmarks;
}

// Function to handle return specified bookmark for logged user
export const getSpecificBookmark = item => {
    let bookmark;

    bookmark = axios.get(baseUrl+'/'+item,{
        header: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .catch(error => responseHandle(error));

    console.log(bookmark);

    return bookmark;
}

// Function to handle delete bookmark for logged user
export const deleteBookmark = item => {
    axios.delete(baseUrl+'/'+item).catch(error => responseHandle(error));
}

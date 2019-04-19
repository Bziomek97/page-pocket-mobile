const addr = 'localhost:8013';
const url = `http://${addr}/api/pockets`;

import responseHandle from './ResponseHandler.js';
import axios from 'axios';

// Function to handle saving bookmark for logged user
export var postBookmark = state => {
    axios.post(url,{
        header: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    }).catch(error => responseHandle(error));
}

// Function to handle show all bookmarks for logged user
export var getBookmarks = () => {
    var bookmarks = [];
    return axios.get(url,{
        header: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => bookmarks.push(response))
    .catch(error => responseHandle(error));

    return bookmarks;
}

// Function to handle return specified bookmark for logged user
export var getSpecificBookmark = item => {
    let bookmark;
    axios.get(url+'/'+item,{
        header: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then(response => bookmark = response)
    .catch(error => responseHandle(error));

    return bookmark;
}

// Function to handle delete bookmark for logged user
export var deleteBookmark = item => {
    axios.delete(url+'/'+item).catch(error => responseHandle(error));
}

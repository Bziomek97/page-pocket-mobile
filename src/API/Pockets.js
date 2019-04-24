import { Constants } from 'expo';
import responseHandle from './ResponseHandler.js';
import axios from 'axios';

const { manifest } = Constants;
const api = (typeof manifest.packagerOpts === `object`) && manifest.packagerOpts.dev
  ? manifest.debuggerHost.split(`:`).shift().concat(`:8013`)
  : `127.0.0.1:8013`;

  const url = `http://10.0.2.2:8013/api/pockets`;

// Function to handle saving bookmark for logged user
export const postBookmark = state => {
    axios.post(url,{
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

    axios.get(url)
    .then(response => console.log(response))
    .catch(error => responseHandle(error));

    return bookmarks;
}

// Function to handle return specified bookmark for logged user
export const getSpecificBookmark = item => {
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
export const deleteBookmark = item => {
    axios.delete(url+'/'+item).catch(error => responseHandle(error));
}

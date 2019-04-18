import React from 'react';

const addr = 'localhost:8013';
const url = `http://${addr}/api/pockets`;

// Function to handle saving bookmark for logged user
let postBookmark = () => {
    fetch(url,{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        }),
    }).catch(error => console.log(error));
}

// Function to handle show all bookmarks for logged user
let getBookmarks = () => {
    fetch(url,{
        method: 'GET',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        }),
    })
    .then(response => response.json())
    .then(response => console.log(response)) //test
    .catch(error => console.log(error));
}

// Function to handle return specified bookmark for logged user
let getSpecificBookmark = item => {
    fetch(url+'/'+item,{
        method: 'GET',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        }),
    }).catch(error => console.log(error));
}

// Function to handle delete bookmark for logged user
let deleteBookmark = item => {
    fetch(url+'/'+item,{
        method: 'DELETE',
    }).catch(error => console.log(error));
}

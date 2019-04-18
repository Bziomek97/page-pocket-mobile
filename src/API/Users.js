import React from 'react';

const addr = 'localhost:8013';
const url = `http://${addr}/api/users`;

// Function to handle user registration
let register = state => {
    fetch(url+'register',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    }).catch(error => console.log(error));
}

// Function to handle user login
let login = state => {
    fetch(url+'login',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    })
    .then(response => response.json())
    .then(response => console.log(response)) //test
    .catch(error => console.log(error));
}

// Function to handle user logout
let logout = sessionId => {
    fetch(url+'logout',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "_Id": sessionId,
        }),
    }).catch(error => console.log(error));
}
import React from 'react';

const url= 'http://localhost:8013/api/users/';

let register = state => {
    fetch(url+'register',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    }).catch(error => console.log(error));
}

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
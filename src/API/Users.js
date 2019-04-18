import React from 'react';

const url= 'http://localhost:8013/api/users/';

let register = () => {
    fetch(url+'register',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        }),
    }).catch(error => console.log(error));
}

let login = () => {
    fetch(url+'login',{
        method: 'POST',
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

let logout = () => {
    fetch(url+'logout',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({

        }),
    }).catch(error => console.log(error));
}
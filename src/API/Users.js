const addr = 'localhost:8013';
const url = `http://${addr}/api/users`;

import responseHandle from './ResponseHandler';
import axios from 'axios';

// Function to handle user registration
export const register = state => {
    axios.post(url+'register',{
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    }).catch(error => responseHandle(error));
}

// Function to handle user login
export const login = state => {
    let info;
    axios.post(url+'login',{
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    })
    .then(response => info = response)
    .catch(error => responseHandle(error));

    return info;
}

// Function to handle user logout
export const logout = sessionId => {
    let result;
    axios.post(url+'logout',{
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "_Id": sessionId,
        }),
    })
    .then(response => result=response )
    .catch(error => responseHandle(error));

    return response;  
}
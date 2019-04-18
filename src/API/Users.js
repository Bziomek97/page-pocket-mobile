const addr = 'localhost:8013';
const url = `http://${addr}/api/users`;

// Response handler
let responseHandle = response => {

    switch (response.status) {
        case 204:
            console.log("Deleted bookmark");
            return;
        case 401:
            console.log("Unauthorized access");
            break;
        case 404:
            console.log("Page not found");
            break;
        case 409:
            console.log("Email exist");
            break;
        default:
            return response.json();
    }
    return Promise.reject(response);
}

// Function to handle user registration
let register = state => {
    fetch(url+'register',{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    })
    .then(response => responseHandle(response))
    .catch(error => console.log(error));
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
    .then(response => responseHandle(response))
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
    })
    .then(response => responseHandle(response))
    .catch(error => console.log(error));
}
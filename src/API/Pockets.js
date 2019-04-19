const addr = 'localhost:8013';
const url = `http://${addr}/api/pockets`;

// Response handler
let responseHandle = response => {
    if(response.status === 401) {
        console.log
        return Promise.reject(response);
    }
    switch (response.status) {
        case 204:
            console.log("Deleted bookmark")
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

// Function to handle saving bookmark for logged user
let postBookmark = state => {
    fetch(url,{
        method: 'POST',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    }).catch(error => console.log(error));
}

// Function to handle show all bookmarks for logged user
let getBookmarks = state => {
    fetch(url,{
        method: 'GET',
        header: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(state),
    })
    .then(response => responseHandle(response))
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
                'item': item,
        }),
    })
    .then(response => responseHandle(response))
    .catch(error => console.log(error));
}

// Function to handle delete bookmark for logged user
let deleteBookmark = item => {
    fetch(url+'/'+item,{
        method: 'DELETE',
    })
    .then(response => responseHandle(response))
    .catch(error => console.log(error));
}

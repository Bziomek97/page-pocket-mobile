import {Alert} from 'react-native'

// Response handler
export default function responseHandle(error){

    if(error.response === undefined){
        Alert.alert('[ERROR] ' + error.message);
        return;
    }
    else{
        switch (error.response.status) {
            case 204:
                Alert.alert("Deleted bookmark");
                return;
            case 401:
                Alert.alert("Unauthorized access");
                break;
            case 404:
                Alert.alert("Page not found");
                break;
            case 409:
                Alert.alert("Email exist");
                break;
            default:
                return error.json();
        }
    }
}
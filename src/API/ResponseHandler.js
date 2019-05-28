import {Alert} from 'react-native'

// Response handler
export default function responseHandle(error){

    if(error.response === undefined){
        Alert.alert('Error: '+error.message,'Check you internet connection.');
        return;
    }
    else{
        switch (error.response.status) {
            case 204:
                Alert.alert("Success of detele bookmark","Hooray u delete bookmark");
                return;
            case 401:
                Alert.alert("Incorrect password","Check your password again");
                break;
            case 404:
                Alert.alert("Error: Page not found","We cannot find resource on our database");
                break;
            case 409:
                Alert.alert("This email exist!","Type email which not exit in our database.");
                break;
            default:
                return error.json();
        }
    }
}
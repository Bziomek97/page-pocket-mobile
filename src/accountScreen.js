import React from 'react'
import {
    TouchableOpacity,
    FlatList,
    Text,
    ImageBackground,
    StyleSheet,
    Alert
} from 'react-native';
import logout from './API/Users'
import { isLogged , clearSession, getSessionId, saveSessionId} from './session'

export default class AccountScreen extends React.Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: 'Account',
    });

    state = {
        profile: {},
    };

    listItem = {
        Register: 'SignUp',
        Login: 'SignIn',
        Logout: 'Logout',

    }

    _onPress = (item) => {
        this.props.navigation.navigate(this.listItem[item.key]);
    }

    _renderItem = ({item}) => {
        return (
        <TouchableOpacity onPress={() => this._onPress(item)}
        style={styles.row}>
        <Text>{item.key}</Text>
        </TouchableOpacity>);
    }

    render() {
        return(
        <ImageBackground source={require("../public/materials/background.jpg")}
        style={styles.container}>
                <FlatList
                    //Lista elementow
                    data={[{key: 'Login'}, {key: 'Register'}]}
                    //Co ma renderowac
                    renderItem={this._renderItem}
                />
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    row: {
        backgroundColor: 'rgba(154,154,154,0.5)',
        paddingLeft: 16,
        marginTop: 1,
        marginBottom: 1,
    },
});
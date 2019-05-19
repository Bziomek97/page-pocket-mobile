import React from 'react'
import {
    TouchableOpacity,
    FlatList,
    Text,
    ImageBackground,
    StyleSheet,
    Alert
} from 'react-native';
import { logout } from './API/Users'
import { isLogged , clearSession, getSessionId, saveSessionId} from './session'

export default class AccountScreen extends React.Component<Props> {

    constructor(props) {
        super(props);
        this._update();
    }

    componentDidUpdate() {
        this._update();
    }

    componentDidMount() {
        this._update();
    }

    static navigationOptions = ({ navigation }) => ({
        title: 'Account',
    });

    state = {
        listItem: [{key: 'Login'}, {key: 'Register'}],
        profile: {}
    };

    listItem = {
        Register: 'SignUp',
        Login: 'SignIn',
        Logout: 'Logout',
        Home: 'Home',
    }

    _onPress = (item) => {
        if(item.key === 'Logout') {
            logout().then(clearSession())
            .then(this.props.navigation.navigate('Home'));
        }
        else {
            this.props.navigation.navigate(this.listItem[item.key]);
        }
    }

    _renderItem = ({item}) => {
        return (
        <TouchableOpacity onPress={() => this._onPress(item)}
        style={styles.row}>
        <Text>{item.key}</Text>
        </TouchableOpacity>);
    }

    _update = () => {
        var resVal;
        isLogged().then(response => {
        if(response)  this.setState({listItem: [{key: 'Logout'}]});
        else this.setState({listItem: [{key: 'Login'}, {key: 'Register'}]})
        });
    }

    _profile = () => {
        
    }

    render() {
        return(
        <ImageBackground source={require("../public/materials/background.jpg")}
        style={styles.container}>
                <FlatList
                    //Lista elementow
                    data={this.state.listItem}
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
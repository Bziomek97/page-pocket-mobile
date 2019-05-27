import React from 'react'
import {
    TouchableOpacity,
    FlatList,
    Text,
    ImageBackground,
    StyleSheet,
    Dimensions,
    View
} from 'react-native';
import { logout } from './API/Users'
import { isLogged , clearSession, getSessionId, saveSessionId} from './scripts/session';
import { LinearGradient } from 'expo';


var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

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
            <Text style={styles.listtxt}>{item.key}</Text>
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
            style={styles.container}
        >
            <LinearGradient
                colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0)']}
            >
                <View style={styles.gradient}>

                <FlatList
                    data={this.state.listItem}
                    renderItem={this._renderItem}
                />
                </View>
            </LinearGradient>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradient: {
        width: width*0.9,
        height: height*0.7,
        borderWidth: 5,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,0.3)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        backgroundColor: 'rgba(154,154,154,0.4)',
        height: height*0.07,
        width: width*0.6,
        paddingLeft: 16,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: 'rgba(255,255,255,0.5)',
        borderWidth: 5,
    },
    listtxt: {
        fontWeight: "bold",
        color:  'white',
        fontSize: height*0.04,
    }
});
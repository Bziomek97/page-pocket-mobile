import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    Alert
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { login } from '../API/Users';
import session from '../session';

export default class SignIn extends React.Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: 'Login',
    });

    state = {
        email: '',
        password: ''
    };

    onValid = () => {
        const passw = this.state.password;
        const email = this.state.email;

        if (passw === undefined || passw === '') throw {message: "Hasło jest wymagane" };

        const emailRegex = /((\w|\.)+)@(\w+)(\.\w{2,3}){1,}/;

        if(!(email.match(emailRegex))) throw {message: "Podany mail jest nieprawidlowy"};

    };

    onChangeText = (key, val) => {
        this.setState({[key]: val});
    };

    signUp = async () => {
        try {
            this.onValid();
            // here place your signup logic
            const response = await login(this.state);
            session.saveSessionId(response);
            Alert.alert('Success of login');
            this.props.navigation.navigate('Home');
        } catch (err) {
            Alert.alert(err.message);
            return;
        }
    };

    render() {
        return(
            <KeyboardAwareScrollView
                enableOnAndroid = 'true'
                style={styles.container}
            >
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        textContentType='emailAddress'
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('email', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Hasło'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('password', val)}
                    />
                    <TouchableHighlight style={styles.button} onPress = {this.signUp}>
                        <Text style={styles.buttonTxt}>Login</Text>
                    </TouchableHighlight>
                </View>
            </KeyboardAwareScrollView>)
    }
}

/*
                    <Button
                        title='Sign Up'
                        style = {styles.button}
                        onPress={this.signUp}
                    />
 */
const styles = StyleSheet.create({
    text: {
        color:  'white',
        height: 50,
        width: 350,
        fontSize: 18,
        margin: 16,
    },
    input: {
        alignItems: 'center',
        color:  'white',
        height: 50,
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: 'darkgrey',
        margin: 16,
    },
    button: {
        marginTop: 16,
        backgroundColor: '#9a9a9a',
        height: 50,
        width: '90%',
        left: 16,
        alignItems: 'center',
    },
    buttonTxt: {
        color:  'white',
        height: 50,
        width: 150,
        fontSize: 18,
        margin: 16,
        textAlign: 'center',
    },
    container: {
        backgroundColor: '#000033',
        flex: 0.8,
        justifyContent: 'flex-start',
    }
});
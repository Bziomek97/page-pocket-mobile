import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    ImageBackground,
    Alert
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { login } from '../API/Users';
import session from '../session';
// import { Text, View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';

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

        if(!(email.match(emailRegex))) throw {message: "Wrong E-mail"};

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

            <ImageBackground
                source={require("../../public/materials/background.jpg")}
                style={{width: '100%', height: '100%'}}
            >

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
                        placeholder='Password'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('password', val)}
                    />


                    <TouchableHighlight style={styles.button} onPress = {this.signUp}>
                        <Text style={styles.buttonTxt}>Login</Text>
                    </TouchableHighlight>
                </View>

            </KeyboardAwareScrollView>

            </ImageBackground>)
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
        color:  'black',
        height: 50,
        width: 350,
        fontSize: 20,
        margin: 14,
    },
    input: {
        alignItems: 'center',
        color:  'black',
        backgroundColor: 'rgba(154,154,154, 0.7)',
        height: 50,
        fontSize: 20,
        margin: 14,
        borderRadius: 50,
        textAlign: 'center',
    },
    button: {
        marginTop: 16,
        backgroundColor: '#9a9a9a',
        height: 50,
        width: '40%',
        left: '50%',
        borderRadius: 50,
    },
    buttonTxt: {
        color:  'black',
        height: 50,
        //width: 150,
        fontSize: 18,
        margin: 16,
        textAlign: 'center',
    },
//    fixedRatio: {
//        backgroundColor: 'rebeccapurple',
//        flex: 1,
//        aspectRatio: 1
//    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
//        alignItems: 'center',
    }
});
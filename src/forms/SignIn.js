import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Alert
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { login } from '../API/Users';
import session from '../session';
import { LinearGradient } from 'expo';
// import { Text, View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;

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

                <View style={styles.gradient}>
                    <LinearGradient
                        colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0)']}>

                <View>
                    <Text style={styles.Txt}>Sign In</Text>
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
                </View>


                    <TouchableHighlight style={styles.button} onPress = {this.signUp}>
                        <Text style={styles.buttonTxt}>Login</Text>
                    </TouchableHighlight>

                    </LinearGradient>
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
        color:  'white',
        backgroundColor: 'rgba(154,154,154, 0.8)',
        height: height*0.04,
        fontSize: 18,
        borderRadius: 50,
        marginHorizontal: '8%',
        marginVertical: 10,
        textAlign: 'center',
    },
    button: {
        marginTop: 32,
        marginBottom: 64,
        backgroundColor: '#9a9a9a',
        height: height*0.04,
        width: '40%',
        left: '52%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    buttonTxt: {
        color:  'white',
        fontSize: 18,
        textAlign: 'center',
    },
    Txt: {
        color:  'white',
        fontWeight: "bold",
        height: height*0.08,
        fontSize: height*0.06,
        marginTop: 12,
        marginBottom: 25,
        marginVertical: 20,
        textAlign: 'center',
    },
//    fixedRatio: {
//        backgroundColor: 'rebeccapurple',
//        flex: 1,
//        aspectRatio: 1
//    },
    gradient: {
        width: width*0.9,
        height: height*0.7,
        borderWidth: 5,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255)',
    },
    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
    }
});
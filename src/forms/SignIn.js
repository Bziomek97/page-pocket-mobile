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
import { LinearGradient } from 'expo';
import { LazyloadView } from 'react-native-lazyload-deux';
// import { Text, View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import { saveSessionId } from '../scripts/session';

export default class SignIn extends React.Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: 'Sign in',
    });

    state = {
        email: '',
        password: ''
    };

    onValid = () => {
        const passw = this.state.password;
        const email = this.state.email;

        if (passw === undefined || passw === '') throw {message: "Password required!" };

        const emailRegex = /((\w|\.)+)@(\w+)(\.\w{2,3}){1,}/;

        if(!(email.match(emailRegex))) throw {message: "Incorrect email! (Syntax or not exist)"};

    };

    onChangeText = (key, val) => {
        this.setState({[key]: val});
    };

    signUp = async () => {
        try {
            this.onValid();
            const response = await login(this.state);
            saveSessionId(response);
            Alert.alert('Congratulation!','You are successful login!');
            this.props.navigation.goBack();
        } catch (err) {
            Alert.alert('Something go wrong with login.',err.message);
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

                <LazyloadView style={styles.gradient}>
                    <LinearGradient
                        colors={['rgba(255,255,255,0.2)', 'rgba(255,255,255,0)']}>

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
                </View>


                    <TouchableHighlight style={styles.button} onPress = {this.signUp}>
                        <Text style={styles.buttonTxt}>Login</Text>
                    </TouchableHighlight>

                    </LinearGradient>
                </LazyloadView>

            </KeyboardAwareScrollView>

            </ImageBackground>)
    }
}

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
    gradient: {
        width: width*0.9,
        height: height*0.7,
        borderWidth: 5,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,0.3)',
    },
    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10%',
    }
});
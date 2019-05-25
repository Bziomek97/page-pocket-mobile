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
// import { Text, View, StyleSheet } from 'react-native';
//import { Constants } from 'expo';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import { saveSessionId } from '../session';

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
        position: 'absolute', left: '50%',
        marginTop: 16,
        backgroundColor: '#9a9a9a',
        height: 50,
        width: '75%',
        opacity: 0.5,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
    buttonTxt: {
        color:  'white',
        height: 50,
        width: 150,
        fontSize: 18,
        margin: 16,
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
        borderColor: 'rgba(255,255,255,0.3)',
    },
});
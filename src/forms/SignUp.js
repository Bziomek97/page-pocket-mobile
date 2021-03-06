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
import { LazyloadView } from 'react-native-lazyload-deux';

import { register } from '../API/Users';
import { LinearGradient } from 'expo';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
import { saveSessionId } from '../scripts/session';

export default class SignUp extends React.Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: 'Sign up',
        
    });

    state = {
        data: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        confirmPassw: '',
    };

    onValid = () => {
        const passw = this.state.data.password;
        const cpassw = this.state.confirmPassw;
        const email = this.state.data.email;

        if (passw === undefined || passw === '' || cpassw === undefined || cpassw === '' ) throw {message: "Password required!" };

        if (passw.localeCompare(cpassw) !== 0) throw {message: "Passwords have to be identical" };

        const emailRegex = /((\w|\.)+)@(\w+)(\.\w{2,3}){1,}/;

        if(!(email.match(emailRegex))) throw {message: "Incorrect Email! Propably by syntax."};

    };

    onChangeText = (key, val) => {
        if(key === 'confirmPassw') this.setState({[key]: val});
        else this.setState({ data: { ...this.state.data ,[key]: val }});
    };

    signUp = async () => {
        try {
            this.onValid();
            const response = await register(this.state.data);
            saveSessionId(response);
            Alert.alert('Welcome!','We are glad to say \'HI\' new user!');
        } catch (err) {
            Alert.alert('Have you some trouble with register!',err.message);
            return;
        }
        this.props.navigation.goBack();
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
                    <Text style={styles.Txt}>Sign Up</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Name'
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('firstName', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Surname'
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('lastName', val)}
                    />
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
                    <TextInput
                        style={styles.input}
                        placeholder='Repeate Password'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('confirmPassw', val)}
                    />
                </View>

                    <TouchableHighlight style={styles.button} onPress = {this.signUp}>
                        <Text style={styles.buttonTxt}>Registrate</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        //margin: 16,
    },
    input: {
        //align: 'center',
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
        //marginTop: 32,
        //marginBottom: 64,
        backgroundColor: '#9a9a9a',
        height: height*0.04,
        width: '40%',
        right: '8%',
        marginTop: 5,
        marginBottom: 20,
        alignSelf: 'flex-end',
        //justifyContent: 'center',
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
        //marginTop: 12,
        //marginBottom: 25,
        //marginVertical: 20,
        textAlign: 'center',
    },
    gradient: {
        width: width*0.9,
        height: '100%',
        borderWidth: 5,
        borderRadius: 15,
        borderStyle: 'solid',
        borderColor: 'rgba(255,255,255,0.7)',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
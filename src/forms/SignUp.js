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
import { register } from '../API/Users';
import session from '../session';

export default class SignUp extends React.Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: 'Registration',
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

        if (passw === undefined || passw === '' || cpassw === undefined || cpassw === '' ) throw {message: "Hasło lub jego potwierdzenie jest wymagane" };

        if (passw.localeCompare(cpassw) !== 0) throw {message: "Passwords have to be identical" };

        const emailRegex = /((\w|\.)+)@(\w+)(\.\w{2,3}){1,}/;

        if(!(email.match(emailRegex))) throw {message: "Wrong E-mail"};

    };

    onChangeText = (key, val) => {
        if(key === 'confirmPassw') this.setState({[key]: val});
        else this.setState({ data: { ...this.state.data ,[key]: val }});
    };

    signUp = async () => {
        try {
            this.onValid();
            // here place your signup logic
            const response = await register(this.state.data);
            session.saveSessionId(response);
            Alert.alert('Success of registration');
        } catch (err) {
            Alert.alert(err.message);
            return;
        }
        this.props.navigation.navigate('Home');
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
                    <TouchableHighlight style={styles.button} onPress = {this.signUp}>
                        <Text style={styles.buttonTxt}>Registrate</Text>
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
        color:  'white',
        height: 50,
        width: 350,
        fontSize: 18,
        margin: 16,
    },
    input: {
        alignItems: 'center',
        color:  'white',
        backgroundColor: 'rgba(154,154,154, 0.7)',
        height: 40,
        fontSize: 18,
        borderRadius: 50,
        marginHorizontal: 24,
        marginVertical: 10,
        textAlign: 'center',
    },
    button: {
        marginTop: 16,
        backgroundColor: '#9a9a9a',
        height: 40,
        width: '40%',
        left: '55%',
        alignItems: 'center',
        borderRadius: 50,
    },
    buttonTxt: {
        color:  'white',
        height: 40,
        width: 150,
        fontSize: 18,
        marginHorizontal: 16,
        marginVertical: 8,
        textAlign: 'center',
    },
    container: {
        height: '100%',
        width: '100%',
        flex: 0.8,
        justifyContent: 'center',
//        alignItems: 'center',
        //justifyContent: 'flex-start',
    }
});
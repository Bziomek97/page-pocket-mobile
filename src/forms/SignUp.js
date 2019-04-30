import React from 'react'
import {
    View,
    Button,
    TextInput,
    Text,
    StyleSheet
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class SignUp extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    };

    signUp = async () => {
        const { firstName, lastName, email, password } = this.state
        try {
            // here place your signup logic
            console.log('user successfully signed up!: ', success)
        } catch (err) {
            console.log('error signing up: ', err)
        }
    };

    render() {
        return(
            <KeyboardAwareScrollView
                enableOnAndroid = 'true'
                style={styles.container}
            >
                <View>
                    <Text style={styles.text}> Sign Up!</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Imie'
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('firstName', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Nazwisko'
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
                        placeholder='Hasło'
                        secureTextEntry={true}
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('password', val)}
                    />
                    <Button
                        title='Sign Up'
                        onPress={this.signUp}
                    />
                </View>
            </KeyboardAwareScrollView>)
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
        color:  'white',
        height: 50,
        width: 350,
        fontSize: 18,
        borderBottomWidth: 2,
        borderBottomColor: 'darkgrey',
        margin: 16,
    },
    container: {
        backgroundColor: '#000033',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
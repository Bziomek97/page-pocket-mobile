import React from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    Alert
} from 'react-native'
import { TagInput } from 'react-native-tag-input';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { register } from '../API/Users';
import session from '../session';
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const inputProps = {
    keyboardType: 'default',
    placeholder: 'email',
    autoFocus: true,
    style: {
        fontSize: 14,
        marginVertical: Platform.OS == 'ios' ? 10 : -2,
    },
};

export default class AddBookmark extends React.Component<Props> {

    static navigationOptions = ({ navigation }) => ({
        title: 'Add bookmark',
    });

    state = {
        data: {
            name: '',
            link: '',
            email: '',
            tags: [],
        },
        text: '',
    };

    onValid = () => {
        const passw = this.state.data.password;
        const cpassw = this.state.confirmPassw;
        const email = this.state.data.email;

        if (passw === undefined || passw === '' || cpassw === undefined || cpassw === '' ) throw {message: "Hasło lub jego potwierdzenie jest wymagane" };

        if (passw.localeCompare(cpassw) !== 0) throw {message: "Hasła muszą być podobne do siebie" };

        const emailRegex = /((\w|\.)+)@(\w+)(\.\w{2,3}){1,}/;

        if(!(email.match(emailRegex))) throw {message: "Podany mail jest nieprawidlowy"};

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
            <KeyboardAwareScrollView
                enableOnAndroid = 'true'
                style={styles.container}
            >
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='Name of bookmark'
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('name', val)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Link'
                        autoCapitalize="none"
                        placeholderTextColor='darkgrey'
                        onChangeText={val => this.onChangeText('link', val)}
                    />
                    <TagInput
                        value={this.state.data.tags}
                        onChange={this.onChangeTags}
                        labelExtractor={(tag) => tag}
                        text={this.state.text}
                        onChangeText={val => this.onChangeText('tags', val)}
                        tagColor="blue"
                        tagTextColor="white"
                        inputProps={inputProps}
                        maxHeight={75}/>
                    <AutoGrowingTextInput style={styles.input}
                                          placeholder={'Description'}
                                          autoCapitalize="none"
                                          placeholderTextColor='darkgrey'
                                          onChangeText={val => this.onChangeText('description', val)}/>
                    <TouchableHighlight style={styles.button}
                                        onPress = {this.signUp}>
                        <Text style={styles.buttonTxt}>Add Me</Text>
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
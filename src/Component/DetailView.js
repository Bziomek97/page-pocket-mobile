import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, Linking} from 'react-native';
import { LazyloadView,LazyloadImage,LazyloadScrollView } from 'react-native-lazyload-deux';
import {deleteBookmark,getBookmark} from '../API/Pockets';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Base64Loader from '../scripts/Base64Loader';

const buttonStyle = (color) => {
    return {
        position: 'absolute',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: color,
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        left:(color === 'red') ? '1%' : '85%',
        bottom: 5,
    }
}

export default class DetailView extends React.Component<Props> {

    _renderTags = (tags) =>  {
        let stringTags = "";
        tags.forEach(el => {
            stringTags += `#${el} `
        });
            
        return(
        <Text style={style.tags}>{stringTags}</Text>
        );
    }

    _deletePress = (id) => {
        deleteBookmark(id).then(() => this.props.navigation.goBack());
    }

    _goToPress = (url) => {
        if (!/^(f|ht)tps?:\/\//i.test(url)) Linking.openURL("http://" + url);
        else Linking.openURL(url);
    }

    render(){
        const data = this.props.navigation.getParam('data','err');

        return(
            <View style={style.background}>
                <StatusBar hidden/>
                <View style={style.borderWrapper}>
                    <Base64Loader image={data.id} />
                </View>
                <View style={{
                backgroundColor: 'white',
                height: '60%',
                borderTopColor: 'black',
                borderTopWidth: 1,}}>
                <Text 
                style ={style.title}
                numberOfLines={2}
                >{data.title}</Text>
                {this._renderTags(data.tags)}
                <View style={style.information}>
                <ScrollView style={style.scroll}>
                    <Text>{data.description}</Text>
                </ScrollView>
                <View style={style.buttons}>
                        <TouchableOpacity style={buttonStyle('red')} onPress={() => this._deletePress(data.id)}>
                            <Ionicons name='ios-trash' size={25} color='red' />
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonStyle('green')} onPress={() => this._goToPress(data.source)}>
                            <Ionicons name='ios-arrow-round-forward' size={25} color='green' />
                        </TouchableOpacity>
                </View>
                </View>
            </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    background: {
        height: '100%',
    },
    borderWrapper:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '100%',
        height: '40%',
        top: 0,
        left: 0,
    },
    title: {
        fontStyle: 'italic',
        fontWeigth: 'bold',
        textAlign: 'center',
        fontSize: 30,
    },
    tags: {
        color: 'grey',
        textAlign: 'center'
    },
    scroll:{
        marginTop: 10,
        left: 5,
        right: 5,
        height: '52%'
    },
    buttons:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    information: {
        flex: 1,
        justifyContent: 'space-evenly',
    },
});
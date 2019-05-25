import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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

    render(){
        const data = this.props.navigation.getParam('data','err');

        return(
            <View style={style.background}>
                <StatusBar backgroundColor="grey"/>
                <View style={style.borderWrapper}>
                    <Image style={style.image} source={require('../../public/materials/example.jpeg')}/>
                </View>
                <Text style ={style.title}>{data.title}</Text>
                {this._renderTags(data.tags)}
                <ScrollView style={style.scroll}>
                    <Text>{data.description}</Text>
                </ScrollView>
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
        height: '45%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
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
    }
});
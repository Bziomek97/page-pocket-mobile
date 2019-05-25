import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class DetailView extends React.Component<Props> {

    _renderTags = (tags) =>  {
        let stringTags = "";
        tags.forEach(el => {
            stringTags += `${el} `
        });
            
        return(
                <Text>
                    {stringTags}
                </Text>
            );
    }

    render(){
        const data = this.props.navigation.getParam('data','err');

        return(
            <View style={style.background}>
                <View style={style.empty}></View>
                <Text style ={style.title}>{data.title}</Text>
                {this._renderTags(data.tags)}
                <Text>{data.description}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    background: {
        backgroundColor: 'lightgrey',
        height: '100%',
    },
    empty: {
        width: '100%',
        height: '45%',
        backgroundColor: 'green',
    },
    title: {
        fontStyle: 'italic',
        fontSize: 50,
    }

});
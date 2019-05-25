import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native'


export default class Base64Loader extends Component<Props>{

    _imgLoader = (img) => {
        return `data:image/jpeg;base64,${img}`;
    }

    render(){
        const src = _imgLoader(this.props.image);
        return(
            <Image 
                style= {style.image}
                source={{uri: src}}
            />
        );
    }
}

const style = StyleSheet.create({
    image: {
        /* Fill soon */
    }
});
import React, {Component} from 'react';
import {Image, StyleSheet, ImageEditor} from 'react-native';
import FitImage from 'react-native-fit-image';
import {getBookmark} from '../API/Pockets';

  

export default class Base64Loader extends Component<Props>{

    state = {
        img: require('../../public/materials/example.jpeg'),
        response: false,
    }

    _imgLoader = (img) => {
        if(img !== null && typeof img !== undefined)
        this.setState({img:`data:image/png;base64,${img}`});
        else
        this.setState({img: require('../../public/materials/example.jpeg')});
    }

    render(){
        getBookmark(this.props.image)
        .then(response => {
            if(response.blob === null) this.setState({response: false});
            else this.setState({response: true});
            this._imgLoader(response.blob);
            //if(response.blob !== null) ImageEditor.cropImage(this.state.img,crop);
        })

        return(
            <Image
                style= {(this.state.response) ? style.image : style.placeholder}
                source={(this.state.response) ? {uri: this.state.img} : this.state.img}
            />
        );
    }
}

const style = StyleSheet.create({
    image: {
        resizeMode: 'stretch',
        width: '100%',
        height: '400%',
    },
    placeholder: {
        resizeMode: 'stretch',
        width: '100%',
        height: '100%',
    }
});
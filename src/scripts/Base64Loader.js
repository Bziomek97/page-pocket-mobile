import React, {Component} from 'react';
import {Image, StyleSheet, ImageEditor, ImageStore} from 'react-native';
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
        })

        return(
            <Image
                style= {(this.state.response) ? style.image : style.placeholder}
                source={(this.state.response) ? {uri: this.state.img} : this.state.img}
            />
        );
    }
}

//style= {(this.state.response) ? ((this.props.comp === 'Item') ? style.imageHome : style.image) : style.placeholder}

const style = StyleSheet.create({
    image: {
        resizeMode: 'stretch',
        width: '100%',
        height: '350%',
        overflow: 'hidden',
    },
    placeholder: {
        resizeMode: 'stretch',
        width: '150%',
        height: '150%',
        overflow: 'hidden',
    }
});
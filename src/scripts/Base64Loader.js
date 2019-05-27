import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {getBookmark} from '../API/Pockets';

export default class Base64Loader extends Component<Props>{

    state = {
        img: require('../../public/materials/loading.gif'),
        loading: true,
        response: false,
    }

    componentDidMount(){
        getBookmark(this.props.image)
        .then(response => {
            if(response.blob === null) this.setState({response: false});
            else this.setState({response: true});
            this._imgLoader(response.blob);
            this.setState({loading: false});
        })
    }

    _imgLoader = (img) => {
        if(img !== null && typeof img !== undefined)
        this.setState({img:`data:image/png;base64,${img}`});
        else
        this.setState({img: require('../../public/materials/example.jpeg')});
    }

    render(){

        return(
            <Image
                style= {(this.state.response) ? style.image : ((this.state.loading) ? style.loading : style.placeholder)}
                source={(this.state.response) ? {uri: this.state.img} : this.state.img}
            />
        );
    }
}

const style = StyleSheet.create({
    loading: {
        resizeMode: 'stretch',
        width: 100,
        height: 100,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    image: {
        resizeMode: 'stretch',
        width: '100%',
        height: '350%',
    },
    placeholder: {
        resizeMode: 'stretch',
        width: '150%',
        height: '150%',
        overflow: 'hidden',
    }
});
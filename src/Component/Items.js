import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native'
import {LinearGradient} from "expo";

const margin = 10;

export class Items extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }

    onPress = () => {
        this.setState({
            count: this.state.count+1
        })
    }

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity style={styles.button} onPress={this.onPress}>

                        <Image style={styles.image} source={require('../../public/materials/example.jpeg')}/>
                        <Text style={styles.titleText}>My Page </Text>
                        <Text numberOfLines={1} style={styles.link}>https://youtu.be/MwTbFT7wMM8?t=2624</Text>

                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.51,
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderColor: 'rgba(0,0,0,0.8)',
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 5,
        backgroundColor: 'rgba(154,154,154,0.5)',
    },
    image: {
        top: margin,
        left: margin,
        resizeMode: 'stretch',
        width: '94%',
        height: 175,
        borderRadius: 5,
    },
    titleText: {
        marginTop: 7.5,
        left: margin,
        color: 'white',
        fontSize:30,
        fontStyle: 'italic',
        fontWeight: 'bold',
        width:'100%',
    },
    link: {
        left: margin,
        size: 5,
        marginBottom: 15,
        width:'100%',
        color:'#eaeae1'
    }
})

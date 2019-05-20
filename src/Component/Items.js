import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native'
import {LinearGradient} from "expo";

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



                        <Image style={[styles.image]} source={require('../../public/materials/example.jpeg')}/>

                        <Text style={[styles.titleText]}>My Page </Text>

                        <Text numberOfLines={1} style={[styles.hasztag]}>#polishboy #polishgirl #polishboys #polishgirls
                            #polskichlopak #polskadziewczyna #polskichłopak #polishmen #polskifacet #firefighter #firefight
                            #firebrigade #fire #straz #strazackie #pozarna #strażpożarna #straż #strażak</Text>

                        <Text numberOfLines={3} style={[styles.descriptionText]}>enabled: If true, parallax effects are
                            enabled. Defaults to true. shiftDistanceX: Defaults to 2.0. shiftDistanceY: Defaults to 2.0.
                            tiltAngle: Defaults to 0.05. magnification: Defaults to 1.0. pressMagnification: Defaults to
                            1.0. pressDuration: Defaults to 0.3. pressDelay: Defaults to 0.0.</Text>
                        <Text numberOfLines={1} style={[styles.link]}>https://youtu.be/MwTbFT7wMM8?t=2624</Text>

                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    button: {
        borderRadius:5,
        alignItems: 'center',
        backgroundColor: 'rgba(154,154,154,0.5)',
        padding: 0
    },
    countText: {
        color: '#FFFFFF'
    },
   image: {
       resizeMethod:'resize',
       borderTopLeftRadius: 5,
       borderTopRightRadius: 5,
       height:75 ,
       width:'100%',
   },
    titleText: {
        color: 'white',
        fontSize:20,
        alignItems: 'center',
        width:'100%',
    },
    descriptionText: {
        color: 'white',

    },
    hasztag: {
        color: 'white',
        fontSize: 8,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    link: {
        color: 'black',
        size: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width:'100%',
        alignItems: 'center',

    }
})
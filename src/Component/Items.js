import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
} from 'react-native'
import { LazyloadView, LazyloadImage } from 'react-native-lazyload-deux';
import {LinearGradient} from "expo";
import { withNavigation } from 'react-navigation';
import Base64Loader from '../scripts/Base64Loader';

const margin = 10;

class Items extends React.Component<Props> {

    onPress = (item) => {
        this.props.navigation.navigate('DetailView',{data: item});
    }

    render() {
        const data = this.props.data;

        return (
            <LazyloadView style={styles.container}>

                <TouchableOpacity style={styles.button} onPress={() => this.onPress(data)}>
                        <View style={styles.image}>
                            <Base64Loader image={data.id} />
                        </View>
                            <Text style={styles.titleText} numberOfLines={2}>{data.title}</Text>
                            <Text numberOfLines={1} style={styles.link}>{data.source}</Text>

                </TouchableOpacity>

            </LazyloadView>
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
        marginTop: 10,
        marginBottom: 2.5,
    },
    image: {
        top: margin,
        left: margin,
        width: '94%',
        height: 200,
        borderRadius: 5,
        backgroundColor: 'black',
        overflow: 'hidden',

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

export default withNavigation(Items);

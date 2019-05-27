import React from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
} from 'react-native'
import { LazyloadView } from 'react-native-lazyload-deux';
import { withNavigation } from 'react-navigation';

const margin = 10;

class SearchItem extends React.Component<Props> {

    onPress = (item) => {
        this.props.navigation.navigate('DetailView',{data: item});
    }

    tags = (tagList) => {
        let tags="";
        tagList.forEach(el => tags+=`#${el} `);
        return tags;
    }

    render() {
        const data = this.props.data;

        return (
            <LazyloadView style={styles.container}>

                <TouchableOpacity style={styles.button} onPress={() => this.onPress(data)}>
                            <Text style={styles.titleText} numberOfLines={2}>{data.title}</Text>
                            <Text numberOfLines={3} style={styles.link}>{this.tags(data.tags)}</Text>
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
        backgroundColor: 'white',
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
        color:'#eaeae1',
        fontStyle: 'italic'
    }
})

export default withNavigation(SearchItem);

import React, {Component} from 'react';
import {View, Image,StyleSheet} from 'react-native';
import backgroundRound from '../img/2.jpg'

class Avatar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={backgroundRound}
                    style={styles.backgroundImage}
                />
            </View>
        )
    }
}


const styles=StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        width: 50, height: 50
    },
    backgroundImage:{
        flexShrink:1,
        aspectRatio:1
    }
})

export default Avatar;
import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet,Image } from 'react-native';

export default class FirstScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <ImageBackground source={require('../pics/first.png')} style={styles.image}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SecondScreen')}>
                        <View style={styles.text}>
                            <Text style={styles.textstyle}>Lets Visit Delhi</Text>
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        
    },
     textstyle:{
         fontSize:17,
         fontWeight:'700',
         color:'black'
     },
     text:{
         alignItems: 'center',
         backgroundColor: 'skyblue',
         top: 595,
         height: 45,
         width: 170,
         marginLeft: 110,
         justifyContent: 'center',
         borderRadius: 15
     }
});

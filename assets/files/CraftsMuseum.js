import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class CraftsMuseum extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>The National Crafts Museum</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/nationalcraftsmuseum.png')} style={styles.image} />
                    <Text style={styles.textbody}>Bhairon Marg, Pragati Maidan, New Delhi, Delhi 110001, India</Text>
                    <Text style={styles.textinfo}>
                        The Crafts Museum-officially named the National Handicrafts and Handlooms Museum, New Delhi-displays a wide variety of traditional crafts from across India. Among its many fascinating features is the chance to watch highly skilled craftspeople demonstrate their centuries-old skills, as well as see large collections of textiles, woodwork, and ceramics.

                        Also of interest are architectural displays of various regional villages, including authentic mud huts and a full-sized wooden haveli (a form of mansion house) from Gujarat decorated with traditional folk art and featuring exquisite woodcarvings, paintings, papier-mâché, and embroidery.
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textstyle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    body: {
        padding: 3
    },
    image: {
        height: height - height / 1.5,
        width: width - width / 100,
    },
    textbody: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 15,
        color: 'black'
    },
    textinfo: {
        padding: 10,
        color: 'black',
    }
})
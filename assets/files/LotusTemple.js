import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class LotusTemple extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>The Lotus Temple</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/lotustemple.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Lotus Temple Road, Shambhu Dayal Bagh, Bahapur, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        The magnificent Bahá'í House of Worship, also known as the Lotus Temple due to its nine sides and stunning central dome, is an architectural masterpiece. Constructed of white concrete and marble, the entire structure looks as delicate as the flower it resembles. Rising from the surrounding nine pools of water, it almost appears as if it might burst into bloom at any moment.

                        Built in 1986, the temple has since attracted more than 70 million visitors, making it one of the world's most visited attractions. Interestingly, this remarkable place of worship has no idols, religious pictures, or outward symbols of religion.

                        Another modern day temple worthy of a visit is the ISKCON Temple, one of the country's biggest Krishna temple complexes.
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
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textstyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'white'
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
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class JamaMasjid extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>Jama Masjid</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/jamamasjid.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Chandni Chowk, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        The Jama Masjid is one of India's largest mosques and was the final architectural feat of Shah Jahan. Completed in 1658, this beautiful structure features three gateways, four angled towers, and two 40-meter-high minarets built using red sandstone and white marble and attractively alternated in vertical stripes.

                        Visitors can climb to the top of the southern minaret for spectacular views of Old Delhi, and afterwards visit the large central pool used for washing before prayers. Please note: visitors must take off their shoes and be appropriately dressed before entering; non-Muslims aren't permitted during prayers.

                        Afterwards, be sure to visit Chandni Chowk, Old Delhi's massive main thoroughfare and a market area dedicated to shopping and eating. Of particular interest are Naya Bazaar and Gadodial, famous spice markets where you'll see hundreds of items displayed including aniseed, ginger, pomegranate, saffron, lotus seeds, pickles, and chutneys.
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
        backgroundColor: 'yellow',
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
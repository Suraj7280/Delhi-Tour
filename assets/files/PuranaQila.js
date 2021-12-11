import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class IndiaGate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}> Purana Qila (The Old Fort)</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/purana-qila.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Mathura Road, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        Although often overlooked, as most tourists head straight for the more famous Red Fort, Purana Qila (Old Fort) is well-worth squeezing into your Delhi travel itinerary. Boasting a past that stretches back some 2,500 years, much of the current impressive edifice dates back to the 1500s, although evidence of earlier structures dating back to the 3rdcentury have been discovered.

                        The present structure played an important role in the region's affairs for centuries and was particularly influenced by the Muslim religion, as evidenced by building's such as the Qila-i-Kuna Mosque, a single-dome place of worship built in 1541. The site covers an area of two square kilometers, and you'll enjoy exploring its thick ramparts and three large gates, an especially impressive sight during the nightly illuminations.

                        The 200-acre Mehrauli Archaeological Park is also worthy of a visit and features numerous important structures, some of which date back more than 1,000 years. Highlights include the old ruins of Lal Kot, along with more recent evidence of occupation by the British during the reign of Queen Victoria.
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
        backgroundColor: 'red',
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
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class LaxmiNarayan extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>Laxminarayan Temple</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/laxminarayantemple.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Mandir Marg, Near, Gole Market, New Delhi, Delhi, India </Text>
                    <Text style={styles.textinfo}>
                        If you're able to squeeze just one more temple into your Delhi sightseeing itinerary, make it Laxminarayan Temple (Birla Mandir). It's also one of the newest such sites in the city.

                        This impressive looking Hindu place of worship was opened by Mahatma Gandhi in 1939 in Connaught Place as a dedication to the goddess of prosperity, Laxmi (shrines dedicated to other faiths are also included on the site, a condition stipulated by Gandhi). Spread across nearly eight acres, the grounds are a delight to explore, and feature lush tropical gardens, fountains, and sculptures.
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
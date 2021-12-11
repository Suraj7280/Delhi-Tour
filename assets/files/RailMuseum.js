import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class RailMuseum extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>The National Rail Museum</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/nationalrailmuseum.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Shanti Path, Chanakyapuri, New Delhi, Delhi 110021, India</Text>
                    <Text style={styles.textinfo}>
                        Spread across 10 acres, the National Rail Museum houses more than 30 locomotives and several old carriages, most of them quite rare. All told, more than 140 years of Indian railway history has been preserved on this fascinating site, including an engine built in 1885 and the Fairy Queen steam engine from 1855.

                        Other highlights include several unique items, such as a collection of saloon cars belonging to the country's once powerful Maharajas, including the teak carriage of the Maharaja of Mysore, covered with ivory; the cabin of the Prince of Wales from 1876; and the carriage in which the ashes of Gandhi were carried after his assassination in 1948. The skull of an elephant struck by a mail train in 1894 is also displayed.

                        For kids, a ride on an excellent narrow gauge steam train is all part of the fun.
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
        color: 'white'
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
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class JantarMantar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>Jantar Mantar</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/jantarmantar.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Sansad Marg, Connaught Place, New Delhi, Delhi 110001, India</Text>
                    <Text style={styles.textinfo}>
                        Located near Connaught Place, one of New Delhi's largest and best-known business districts, Jantar Mantar is one of five astronomical observatories constructed by Maharajah Jai Singh I in 1725.

                        Designed to enable occupants to observe the movements of the sun, moon, and planets, this well-preserved historic site also boasts several other old instruments on display that were once used to track the course of heavenly bodies and predict eclipses. Highlights of this remarkable and architecturally pleasing building include an enormous sundial known as the Prince of Dials.
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
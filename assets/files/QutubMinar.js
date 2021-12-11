import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class QutubMinar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>The Qutub Minar</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/qutubminar.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Mehrauli, New Delhi, Delhi 110030, India</Text>
                    <Text style={styles.textinfo}>
                        Completed in the 12th century, the beautiful Qutub Minar is India's tallest minaret. It's also now a UNESCO Word Heritage Site that attracts many international visitors eager to climb to the top for its breathtaking views of the surrounding area.

                        This ornate five-story tower rises more than 70 meters and is covered with intricate carvings featuring the history of Qutub along with inscriptions from the Koran. It's also notable for being constructed of a number of different types of stone (the first three stories are made of red sandstone, while the fourth and fifth stories were built with marble and sandstone).

                        The complex also includes the Quwwat-ul-Islam Masjid, a mosque at the base of the tower; a gateway built in 1310; and the tombs of Altamish, Alauddin Khalji, and Imam Zamin. Also worth seeing is the 2,000-year-old Iron Pillar, the Alai Minar.
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
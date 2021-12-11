import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class BanglaSahib extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>Gurudwara Bangla Sahib</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/gurudwarabanglasahib.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Ashoka Road, Hanuman Road Area, Connaught Place, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        Delhi's most important Sikh place of worship, the 18th-century Gurdwara Bangla Sahib is located near Connaught Place and is well worth a visit. Highlights include its magnificent pool, the Sarovar, at the heart of this large complex, as well as its famous gold dome and flagpole.

                        Also of note is the large temple building itself, along with its art gallery and a small museum dedicated to the history of the Sikh religion. Visitors are always welcome here, and an excellent meal is available at no cost in the large Gurdwara Kitchen. All that is asked in return is your hair be covered and shoes removed (free headscarves and shoe storage are provided).
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
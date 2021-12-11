import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class GandhiMemorial extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>The Indira Gandhi Memorial Museum</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/indiragandhimemorialmuseum.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: 1 Safdarjung Road, New Delhi, Delhi 110011, India</Text>
                    <Text style={styles.textinfo}>
                        Another important politician-related attraction is the Indira Gandhi Memorial Museum, housed in the former residence of this much-revered woman (Indira was the daughter of India's first Prime Minister, Jawaharlal Nehru, and although a friend of Mahatma Gandhi, was unrelated).

                        Highlights include photos documenting her life and time as prime minister, personal belongings such as the sari she was wearing at the time of her assassination, along with news clippings and letters.

                        An enclosed garden with mature trees and flowering plants surrounds the building, and its pathway is now a memorial, with the spot where she was assassinated clearly marked. Several rooms have been dedicated to her son, Rajiv Gandhi, who was assassinated in 1991.

                        Indira Gandhi's father, Nehru, is the subject of the equally interesting Nehru Museum and Planetarium (Teen Murti Bhavan) set in his former residence. The museum presents the leader's life and works, including interesting items pertaining to the struggle for freedom, with highlights including his bedroom, drawing room, and the study housing displays depicting highlights of his career.
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
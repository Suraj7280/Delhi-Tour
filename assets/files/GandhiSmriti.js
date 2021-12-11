import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class GandhiSmriti extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>Gandhi Smriti and the Mahatma Gandhi Memorial</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/gandhismriti.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: 5 Tees January Marg, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        Numerous references can be found to Mahatma Gandhi throughout Delhi, a testament to the man's legacy. Of the many attractions related to the famed leader of the Indian independence movement, perhaps the best is Gandhi Smriti (Gandhi Remembrance), a museum housed in the property where he was assassinated in 1948.

                        Highlights include displays and memorabilia relating to both his life and death, including the room in which he stayed, left exactly as it was at the time, as well as the new Eternal Gandhi Multimedia Museum with historical records detailing his many achievements.

                        A particular highlight is the chance to stroll the very same gardens where Gandhi once spent so much time (the place where the shooting occurred is marked by the Martyr's Column). Also of interest is the Raj Ghat memorial to Gandhi just a few minutes' walk away on the spot where he was cremated.
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
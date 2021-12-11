import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class HumayuTomb extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>Humayun's Tomb</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/humayuntomb.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Mathura Road, Nizamuddin, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        Set in a lovely, large square garden, Humayun's Tomb is a lofty mausoleum constructed of white marble and red sandstone. It was designed as a prototype of the Taj Mahal in Agra and is an excellent example of Mughal architecture.

                        Built in the mid-16th century by Haji Begum as a memorial to her husband by Humayun's senior widow, the tomb is surrounded by lush formal gardens and other tombs including Humayun's barber and the Tomb of Isa Khan (the architect of the Taj Mahal), a fine example of Lodi architecture and octagonal in shape.

                        A fun thing to do is to try and catch a glimpse of this spectacular structure after nightfall when it's illuminated.
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
        backgroundColor: 'orange',
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
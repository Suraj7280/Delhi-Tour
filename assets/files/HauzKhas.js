import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class HauzKhas extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>The Hauz Khas Complex</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/hauzkhascomplex.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Hauz Khas, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        The Hauz Khas Complex is a fascinating urban village a little south of New Delhi. In addition to its numerous ancient stone monuments, the entire village is dotted with domed tombs of minor Muslim royalty, who were laid to rest here from the 14th to 16th centuries.

                        Other highlights include the remnants of an ancient college and the tomb of Firoz Shah, who ruled Delhi in the 14th century, as well as Ki Masjid, a fine mosque built in Lodi style.

                        Be sure to allow extra time to explore the surrounding neighborhood. This bustling area is safe and popular for locals and tourists alike, for its art galleries, fashionable restaurants, and boutique shops.
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
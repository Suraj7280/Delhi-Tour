import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class SulabhMuseum extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>Sulabh International Museum of Toilets</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/sulabhmuseumtoilets.png')} style={styles.image} />
                    <Text style={styles.textbody}> Sulabh Bhawan, Palam Dabri Rd, Mahavir Enclave I, Mahavir Enclave, New Delhi, Delhi 110046, India</Text>
                    <Text style={styles.textinfo}>
                        The Sulabh International Museum of Toilets provides a fascinating look at sanitation and its connection to social reform. Displays show the evolution of the toilet and their various designs, with toilet-related items dating back to 2,500 BC, along with exhibits showing historical trends.

                        Facts, photos, and artifacts present a chronology of developments relating to technology, social customs, toilet etiquette, and sanitary conditions, with exhibits including privies, chamber pots, toilet furniture, bidets, and water closets from 1145 to modern times.

                        Although unrelated, Tibet House is another smaller museum worth visiting for its collection of ceremonial items brought by the Dalai Lama after he fled Tibet. Displays include wooden sculptures, paintings, carpets, and ritual objects from Tibetan monasteries and villages, along with a museum housing various rare art objects, religious artifacts, ritual implements, objects of war, and jewelry.
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
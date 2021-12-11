import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class NationalMuseum extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>The National Museum</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/nationalmuseum.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Janpath Road, Rajpath Area, Central Secretariat, New Delhi, Delhi 110001, India</Text>
                    <Text style={styles.textinfo}>
                        The galleries of the National Museum, New Delhi-one of the largest museums in India-follow a historical sequence, with all major periods represented. Highlights include archeological finds, along with exhibits of terra-cotta toys, images and pots, jewelry, seals, bronze and copper implements, sculpture, musical instruments, tapestry, tribal masks, swords, and murals.

                        The most significant gallery is the Central Asian exhibit including silk banners and wall paintings, sculptures, and artifacts related to life along the ancient Silk Route that stretched between Europe and China. Audio guides and guided tours are available.

                        Other museums worth visiting include the National Science Centre, one of the world's largest science centers, and the impressive National Museum of Natural History with its focus on the country's rich flora and fauna.

                        Also notable is the National Gallery of Modern Art (NGMA), which houses the country's most important art collections. Opened in 1954, its more than 14,000 artworks include pieces from leading Indian artists from the 1850s onwards.
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
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class LodiGarden extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>Lodi Garden</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/lodigarden.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Lodhi Road, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        One of the most popular New Delhi parks among locals, the 90-acre Lodi Gardens is well-worth including on your Delhi itinerary. In addition to its lush gardens, the park contains numerous relics from the Lodi period pre-1600s, including a variety of important tombs and ruins.

                        Architectural highlights include 15th-century mausoleums containing the remains of the Lodi Sultans, as well as a picturesque triple-domed mosque, the Glazed Dome, known for its blue tiles, and the ruins of a huge dome dating from around 1490. Be sure to also look for the Athpula, an eight-pier bridge dating from the 16th century with its attractive columns and arches that span the park's lake.

                        Lodi Gardens is also known for its flora and fauna, including more than 100 species of native trees, 50 species of butterflies, and plenty of birdlife. It's also home to the country's National Bonsai Park.

                        While in the vicinity, take the short five-minute walk to the popular Khan Market. This bustling (and very safe) area in fact ranks among the world's most prestigious shopping districts, with luxury brands rubbing shoulders with street vendors selling local delicacies.
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
        backgroundColor: 'pink',
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
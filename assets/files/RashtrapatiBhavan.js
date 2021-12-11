import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class RashtrapatiBhavan extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}> Rajpath and Rashtrapati Bhavan</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/rashtrapatibhavan.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Gates 30 & 35, President's Estate, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        Rajpath, also known as the King's Way, is New Delhi's traditional ceremonial boulevard. It runs from Rashtrapati Bhavan, the official presidential residence, past such important city landmarks as Vijay Chowk and India Gate all the way to the National Stadium.

                        This broad avenue is flanked by trees, grass, and ponds, and comes alive each January 26th during the Republic Day Parade. This special occasion is marked by countless thousands gathering to celebrate the anniversary of the country's independence.

                        At the western end of Rajpath, the President's Residence-the Rashtrapati Bhavan (once the British Viceroy's residence)-is undoubtedly one of the most magnificent buildings in Delhi. It's an attractive place for a selfie given its eclectic mix of Mughal and European architectural styles that contains some 340 richly decorated rooms.

                        Of particular interest is the new Rashtrapati Bhavan Museum, which offers a glimpse inside the building, along with interesting displays relating to past presidents. Hot Tip: If visiting in February or March, check out the adjoining Mughal Gardens, a splendid display of plantings surrounding the President's Residence.
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
        backgroundColor: 'yellow',
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
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class Akshardham extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>Akshardham</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/akshardham.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Noida Mor, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        Although only recently completed (it opened in 2007), the splendid Hindu Akshardham temple looks like it could be centuries old. Festooned with intricate and elaborate carvings, this magnificent building attracts countless visitors for its majestic beauty.

                        Highlights include the stunning 43-meter-high main monument with its rich carvings of animals, plants, gods, dancers, and musicians, all made from pink sandstone and marble. Of particular note are the 234 ornate pillars supporting its nine domes, as well as a stunning stone tribute to elephants, the centerpiece of which is a massive 3,000-ton statue of one of these beasts.

                        Other features of interest include a theater showing a movie tracing the building's construction, a fun 15-minute boat ride depicting India's rich history and diverse culture, and the spectacular Yagnapurush Kund, a large musical fountain that is a particular treat when lit up at night.
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
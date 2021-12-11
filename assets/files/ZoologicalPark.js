import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class ZoologicalPark extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>National Zoological Park</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/nationalzoologicalpark.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Mathura Road, New Delhi, Delhi 110 003, India</Text>
                    <Text style={styles.textinfo}>
                        Reputed to be one of the best zoos in Asia, the National Zoological Park was established in 1959 and provides a habitat to some 1,500 animals and bird species. The abundant wildlife on display are representative of all continents, including numerous examples from Africa, Australia, and Asia.

                        Of particular note are the zoo's numerous chimpanzees, along with hippopotamuses, spider monkeys, zebras, hyenas, deer, jaguars, and tigers. A particular highlight for kids is the underground Reptile Complex, which houses a variety of snakes, including the deadly king cobra.

                        A fun way to get around the zoo's many attractions is via one of the small electric vehicles that whisk passengers around the park.


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
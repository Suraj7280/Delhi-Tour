import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default class IndiaGate extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>India Gate</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/indiagate.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Rajpath, India Gate, New Delhi, Delhi, India</Text>
                    <Text style={styles.textinfo}>
                        Looking a little like the famous Arc de Triomphe in Paris, the equally impressive India Gate is a magnificent stone arch built as a memorial to Indian soldiers killed in WWI. An eternal flame burns beneath the massive structure, and its walls are inscribed with the names of more than 90,000 soldiers who died in the conflict.

                        Standing on a base of red stone and featuring a shallow domed bowl on top that is occasionally filled with burning oil (usually only on important anniversaries), the structure dominates the parkland around it, an always busy area with crowds of tourists and locals alike enjoying a picnic or simply relaxing.

                        For a real treat, try to see the India Gate at night, considered one of the top free things to do in New Delhi. It's a spectacular sight when it and nearby fountains are floodlit.
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
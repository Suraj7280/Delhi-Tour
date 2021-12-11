import React from 'react';
import {ScrollView,View,Text,Image,StyleSheet,Dimensions} from 'react-native';

export default class RedFort extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.textstyle}>The Red Fort</Text>
                </View>
                <View style={styles.body}>
                    <Image source={require('../pics/redfort.png')} style={styles.image} />
                    <Text style={styles.textbody}>Address: Netaji Subhash Marg, Chandni Chowk, New Delhi, Delhi 110006, India</Text>
                    <Text style={styles.textinfo}>
                        The beautiful Red Fort (Lal Qila) was built by Shah Jahan in 1648 and served as the seat of Mughal power until 1857. This stunning structure, with its tall, red sandstone walls covers an area of more than two square kilometers, the entirety of which is crescent shaped and surrounded by a moat.

                        The impressive main entrance, the Lahore Gate, is so named as it faces towards Lahore in Pakistan, while the even grander Delhi Gate was used by the emperor for ceremonial processions. Entering through the Lahore Gate, visitors reach Chhatta Chowk, a 17th-century covered bazaar where items such as silks, jewelry, gems, and silverware can be purchased, along with souvenirs and food items.

                        The Naubat Khana within the Red Fort once housed the musicians who played for the emperor, and its fine galleries still contain many interesting musical instruments such as kettledrums, gongs, and cymbals. Diwan-i-Am, the Hall of Public Audiences, where the emperor would receive his subjects, is also worth seeing for its stunning white marble.

                        A great way to see the Red Fort and other popular Delhi attractions is by booking a private full-day tour of Old and New Delhi. Highlights of this nine-hour urban adventure include a personal professional guide and driver who'll take you to such points of interest as Humayun's Tomb, Qutub Minar, as well as Jama Masjid, India Gate, and the famous Lotus Temple. Included with your tour are hotel pickup and a ride in a rickshaw.
                    </Text>
                </View>
            </ScrollView>
        )
    }
}

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const styles = StyleSheet.create({
    header:{
        padding:20,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',   
    },
    textstyle:{
        fontWeight:'bold',
        fontSize:20
    },
    body:{
        padding:3
    },
    image: {
        height: height - height / 1.5,
        width: width - width /100,
    },
    textbody:{
        padding:10,
        fontWeight: 'bold',
        fontSize: 15,
        color:'black'
    },
    textinfo:{
        padding:10,
        color:'black',
    }
})
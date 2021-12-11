import React from 'react';
import { View, Text,ScrollView, Image, StyleSheet,TouchableOpacity} from 'react-native';

export default class FirstScreen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'lightblue' }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'blue',height:60}}>
                    <Text style={{ color: 'white', fontSize: 23, fontWeight: 'bold'}}>Famous Places of Delhi</Text>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RedFort')}>
                        <Image source={require('../pics/redfort.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>The Red Fort</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('QutubMinar')}>
                        <Image source={require('../pics/qutubminar.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>The Qutub Minar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LodiGarden')}>
                        <Image source={require('../pics/lodigarden.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>The Lodi Garden</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('BanglaSahib')}>
                        <Image source={require('../pics/gurudwarabanglasahib.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Bangla Sahib</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LotusTemple')}>
                        <Image source={require('../pics/lotustemple.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>The Lotus Temple</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('IndiaGate')}>
                        <Image source={require('../pics/indiagate.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>The India Gate</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('JamaMasjid')}>
                        <Image source={require('../pics/jamamasjid.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Jama Masjid</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HumayuTomb')}>
                        <Image source={require('../pics/humayuntomb.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Humayun's Tomb</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Akshardham')}>
                        <Image source={require('../pics/akshardham.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Akshardham</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('PuranaQila')}>
                        <Image source={require('../pics/purana-qila.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Purana Qila</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RashtrapatiBhavan')}>
                        <Image source={require('../pics/rashtrapatibhavan.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Rashtrapatibhavn</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('GandhiSmriti')}>
                        <Image source={require('../pics/gandhismriti.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Gandhi Smriti</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('JantarMantar')}>
                        <Image source={require('../pics/jantarmantar.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Jantar Mantar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('GandhiMemorial')}>
                        <Image source={require('../pics/indiragandhimemorialmuseum.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>I.G.Museum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('NationalMuseum')}>
                        <Image source={require('../pics/nationalmuseum.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>National Museum</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LaxmiNarayan')}>
                        <Image source={require('../pics/laxminarayantemple.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Laxminarayan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ZoologicalPark')}>
                        <Image source={require('../pics/nationalzoologicalpark.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Zoological Park</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CraftsMuseum')}>
                        <Image source={require('../pics/nationalcraftsmuseum.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Craft Museum</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('RailMuseum')}>
                        <Image source={require('../pics/nationalrailmuseum.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Rail Museum</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HauzKhas')}>
                        <Image source={require('../pics/hauzkhascomplex.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>The HauzKhas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SulabhMuseum')}>
                        <Image source={require('../pics/sulabhmuseumtoilets.png')} style={styles.imagesize} />
                        <Text style={styles.textstyle}>Museum of Toilet</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}




const styles = StyleSheet.create({
    
    container:{
        padding:12,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:9
    },
    imagesize:{
        height:160,
        width:120,
        borderRadius:20
    },
    textstyle:{
        color:'black',
        alignItems:'center',
        fontWeight:'bold',
        marginLeft:7
    }
});

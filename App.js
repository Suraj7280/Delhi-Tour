import React from 'react';
import FirstScreen from './assets/files/FirstScreen';
import SecondScreen from './assets/files/SecondScreen';
import RedFort from './assets/files/Redfort';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import QutubMinar from './assets/files/QutubMinar';
import LodiGarden from './assets/files/LodiGarden';
import BanglaSahib from './assets/files/BanglaSahib';
import LotusTemple from './assets/files/LotusTemple';
import IndiaGate from './assets/files/IndiaGate';
import JamaMasjid from './assets/files/JamaMasjid';
import HumayuTomb from './assets/files/HumayuTomb';
import Akshardham from './assets/files/Akshardham';
import PuranaQila from './assets/files/PuranaQila';
import RashtrapatiBhavan from './assets/files/RashtrapatiBhavan';
import GandhiSmriti from './assets/files/GandhiSmriti';
import JantarMantar from './assets/files/JantarMAntar';
import GandhiMemorial from './assets/files/GandhiMemorial';
import NationalMuseum from './assets/files/NationalMuseum';
import LaxmiNarayan from './assets/files/LaxmiNarayan';
import ZoologicalPark from './assets/files/ZoologicalPark';
import CraftsMuseum from './assets/files/CraftsMuseum';
import RailMuseum from './assets/files/RailMuseum';
import HauzKhas from './assets/files/HauzKhas';
import SulabhMuseum from './assets/files/SulabhMuseum';


const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FirstScreen" >
            {({ navigation }) => <FirstScreen navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="SecondScreen" >
            {({ navigation }) => <SecondScreen navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="RedFort" >
            {({ navigation }) => <RedFort navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="QutubMinar" >
            {({ navigation }) => <QutubMinar navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="LodiGarden" >
            {({ navigation }) => <LodiGarden navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="BanglaSahib" >
            {({ navigation }) => <BanglaSahib navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="LotusTemple" >
            {({ navigation }) => <LotusTemple navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="IndiaGate" >
            {({ navigation }) => <IndiaGate navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="JamaMasjid" >
            {({ navigation }) => <JamaMasjid navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="HumayuTomb" >
            {({ navigation }) => <HumayuTomb navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="Akshardham" >
            {({ navigation }) => <Akshardham navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="PuranaQila" >
            {({ navigation }) => <PuranaQila navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="RashtrapatiBhavan" >
            {({ navigation }) => <RashtrapatiBhavan navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="GandhiSmriti" >
            {({ navigation }) => <GandhiSmriti navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="JantarMantar" >
            {({ navigation }) => <JantarMantar navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="GandhiMemorial" >
            {({ navigation }) => <GandhiMemorial navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="NationalMuseum" >
            {({ navigation }) => <NationalMuseum navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="LaxmiNarayan" >
            {({ navigation }) => <LaxmiNarayan navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="ZoologicalPark" >
            {({ navigation }) => <ZoologicalPark navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="CraftsMuseum" >
            {({ navigation }) => <CraftsMuseum navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="RailMuseum" >
            {({ navigation }) => <RailMuseum navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="HauzKhas" >
            {({ navigation }) => <HauzKhas navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen name="SulabhMuseum" >
            {({ navigation }) => <SulabhMuseum navigation={navigation} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
}

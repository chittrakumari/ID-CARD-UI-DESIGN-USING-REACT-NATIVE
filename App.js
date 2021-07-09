import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import AboutMe from './components/AboutMe';
import constants from 'expo-constants'
export default class App extends React.Component {
  render() {
    return (
      <View style={{paddingTop:constants.statusBarHeight}}>
        <View style={myStyleSheet.viewStyling}>
          <Text style={myStyleSheet.headingStyling}>ID CARD</Text>
          <Image
            style={myStyleSheet.imageStyling}
            source={require('./assets/girl1.png')}
          />
          <Text style={{ color: 'white', marginTop: 8,fontWeight:'bold',fontSize:19 }}>GLA UNIVERSITY</Text>
          <Text style={{ color: 'white', marginTop: 4 ,fontWeight:'bold',fontSize:17}}>2019 - 2023</Text>
        </View>
        <AboutMe
          name="Chittra Kumari"
          course="Btech"
          branch="Computer Science"
          rollNo={191510004}
        />
      </View>
    );
  }
}

const myStyleSheet = StyleSheet.create({
  imageStyling: {
    height: 180,
    borderRadius: 100,
    width: 180,
    fontFamily: 'Arial',
  },

  headingStyling: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 12,
   
  },

  viewStyling: {
    backgroundColor: 'grey',
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center', paddingTop:constants.statusBarHeight,
  },
});

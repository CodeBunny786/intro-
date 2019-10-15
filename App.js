/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';



const slides = [
  {
    key: 'somethun',
    title: 'Quick setup, good defaults',
    text:
      'React-native-app-intro-slider is easy to setup with a small footprint and no dependencies. And it comes with good default layouts!',
    image: require('./Images/leopard-snow.png'),
    colors: ['#63E2FF', '#B066FE'],
  },
  {
    key: 'somethun1',
    title: 'Super customizable',
    text:
      'The component is also super customizable, so you can adapt it to cover your needs and wants.',
    image: require('./Images/mountain_tiger.png'),
    colors: ['#A3A1FF', '#3A3897'],
  },
  {
    key: 'somethun2',
    title: 'No need to buy me beer',
    text: 'Usage is all free',
    image: require('./Images/family-tiger.png'),
    colors: ['#29ABE2', '#4F00BC'],
  },
];


export default class Intro extends React.Component {

  elevationShadowStyle = (elevation) => {
    return {
      elevation,
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 0.5 * elevation },
      shadowOpacity: 0.3,
      shadowRadius: 0.8 * elevation
    };
  }
  _renderItem = ({ item, dimensions }) => (

    <View style={styles.mainContent}>
      <Image
        style={styles.image}
        source={item.image}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>

    </View>
    // </LinearGradient>
  );


  render() {


    return <AppIntroSlider slides={slides} renderItem={this._renderItem}
      buttonStyle={{
        backgroundColor: '#32CD32',
        elevation: 10,
        ...this.elevationShadowStyle(5),
        color: 'black',
        borderRadius: 20,

      }}
      dotStyle={{
        color: 'blue',
        backgroundColor:'#32CD32',
      
        borderStartColor:'red'

      }}
      bottomButton

    />;

  }
}

const styles = StyleSheet.create({
  // scrollView: {
  //   backgroundColor: Colors.lighter,
  // },
  mainContent: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    alignItems: 'center',
    width: '100%',
    height: 400,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: 'black',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },

});



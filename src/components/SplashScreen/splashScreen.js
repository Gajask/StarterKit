import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';

const SplashScreen = ({navigation}) => {
  //Timer setup for splashScreen
  setTimeout(() => {
    navigation.replace('Home');
  }, 2000);

  return (
    <View style={styles.splashScreen}>
      <Text style={styles.text}>React Native</Text>
      <Text style={styles.text}>Starter Kit</Text>
    </View>
  );
};
export default SplashScreen;

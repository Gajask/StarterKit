import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';
import CustomButton from '../../components/CustomButton/customButton.js';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.homeText}>Hello</Text>
      <CustomButton text="Sign In" onPress={onSignInPressed} />
    </View>
  );
};

export default Home;

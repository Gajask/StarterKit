import React from 'react';
import {View, Text} from 'react-native';
import styles from './style.js';
import CustomButton from '../../components/CustomButton/customButton.js';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Form');
  };

  return (
    <View style={styles.root}>
      <Text>Profile</Text>
      <CustomButton text="Update profile" onPress={onSignInPressed} />
    </View>
  );
};

export default Profile;

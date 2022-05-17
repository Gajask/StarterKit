import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './style.js';
import {WebView} from 'react-native-webview';
import Newurl from '../../constants/url';

const Form = () => {
  return (
    <SafeAreaView style={styles.root}>
      <WebView source={{uri: Newurl.forms}} />
    </SafeAreaView>
  );
};

export default Form;

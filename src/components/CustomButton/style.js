import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 8,
  },
  container_PRIMARY: {
    //primary button
    backgroundColor: '#3B71F3',
  },
  container_SECONDARY: {}, //secondary button
  container_TERTIARY: {}, //Tertiary button
  text: {
    fontWeight: 'bold',
  },
  text_PRIMARY: {
    color: 'white',
  },
  text_SECONDARY: {},
  text_TERTIARY: {
    color: 'gray',
  },
});

export default styles;

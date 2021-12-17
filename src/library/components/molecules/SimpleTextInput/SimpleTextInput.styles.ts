import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 61,
  },
  labelText: {
    marginBottom: 20,
    fontFamily: 'Montserrat-Semibold',
  },
  text: {
    fontFamily: 'Montserrat-Semibold',
    textDecorationColor: 'rgba(0, 0, 0, 0)',
    textDecorationLine: 'none',
  },
  empty: {},
  rightAccessoryContainer: {
    width: 14,
    height: 14,
    marginBottom: 5,
  },
  rightAccessoryContainerVisible: {
    backgroundColor: '#FFFFFF',
    width: 14,
    height: 14,
    borderRadius: 7,
    marginBottom: 5,
  },
  rightAccessoryOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {},
});

export default styles;

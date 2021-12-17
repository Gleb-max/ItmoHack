import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    // height: 100,
  },
  labelText: {
    // marginBottom: 20,
    fontFamily: 'Montserrat-Semibold',
  },
  inputContainer: {
    backgroundColor: '#F2F2F2',
    height: 40,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    paddingRight: 0,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    alignSelf: 'center',
    textDecorationColor: 'rgba(0, 0, 0, 0)',
    textDecorationLine: 'none',
  },
  empty: {},
  rightAccessoryContainer: {
    width: 14,
    height: 14,
    // marginBottom: 5,
  },
  rightAccessoryOpacity: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginRight: 12,
  },
});

export default styles;

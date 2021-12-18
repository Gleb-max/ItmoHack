import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    // zIndex: 100,
    // elevation: 5,
  },
  dropdown: {
    backgroundColor: '#FFFFFF00',
    borderWidth: 0,
    borderBottomWidth: 2,
    alignSelf: 'baseline',
    // ...Helpers.boxShadow('rgb(223, 227, 229)', {x: 0, y: 4}, 50, 0.3, 3),
  },
  list: {
    borderWidth: 0,
    ...Helpers.boxShadow('rgb(223, 227, 229)', {x: 0, y: 4}, 50, 0.3, 3),
  },
  itemStyle: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    marginLeft: 5,
  },
  textStyle: {
    fontFamily: 'Montserrat-Medium',
    fontStyle: 'normal',
    fontSize: 15,
    lineHeight: 18,
  },
  placeholder: {
    color: '#fff',
    fontSize: 18,
  },
  label: {
    marginLeft: -2,
    color: '#000000ee',
    fontSize: 18,
  },
  activeLabel: {
    color: '#1A1D5B',
    fontSize: 18,
  },
});

export default styles;

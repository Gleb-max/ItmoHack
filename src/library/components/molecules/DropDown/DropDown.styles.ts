import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    zIndex: 100,
    // elevation: 5,
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    alignSelf: 'baseline',
    ...Helpers.boxShadow('rgb(223, 227, 229)', {x: 0, y: 4}, 50, 0.3, 3),
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
    color: '#000000',
  },
  placeholder: {
    color: '#000',
  },
  label: {
    marginLeft: 2,
    color: '#000',
  },
  activeLabel: {
    color: '#5C3661',
  },
});

export default styles;

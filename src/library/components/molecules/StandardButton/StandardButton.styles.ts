import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';

const styles = StyleSheet.create({
  container: {
    height: 46,
    alignSelf: 'stretch',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    ...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', {x: 10, y: 20}, 100, 0.1, 4),
  },
  containerReverse: {
    backgroundColor: '#5C3661',
  },
  text: {
    color: '#5C3661',
  },
  textReverse: {
    color: '#FFFFFF',
  },
});

export default styles;

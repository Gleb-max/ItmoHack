import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 97,
    right: 30,
    backgroundColor: '#5C3661',
    width: 66,
    height: 66,
    borderRadius: 33,
    ...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', {x: 10, y: 20}, 100, 0.1, 4),
  },
  button: {
    flex: 1,
    borderRadius: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default styles;

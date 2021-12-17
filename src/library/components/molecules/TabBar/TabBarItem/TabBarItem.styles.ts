import {Helpers} from 'library/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    ...Helpers.boxShadow('rgb(223, 227, 229)', {x: 0, y: 4}, 50, 0.3, 0.7),
  },
});

export default styles;

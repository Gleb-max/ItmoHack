import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';

const styles = StyleSheet.create({
  container: {
    height: 47,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingLeft: 11,
    justifyContent: 'center',
    ...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', {x: 10, y: 20}, 100, 0.1, 4),
  },
  header: {
    color: '#161844',
    fontStyle: 'normal',
    lineHeight: 21,
    fontWeight: '500',
  },
  touchable: {
    flexDirection: 'row',
  },
  rightIcon: {
    marginLeft: 'auto',
    marginRight: 20,
  },
  cardIcon: {
    marginLeft: 9,
  },
});

export default styles;

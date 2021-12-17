import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 30,
    marginBottom: 11,
    ...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', {x: 10, y: 20}, 100, 0.1, 4),
  },
  gradientContainer: {
    flex: 1,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 18,
  },
  photo: {
    height: 66,
    width: 66,
    resizeMode: 'contain',
    borderRadius: 33,
    marginBottom: 10,
  },
  name: {
    color: '#5C3661',
    fontWeight: '600',
    lineHeight: 31,
  },
  content: {
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 15,
  },
});

export default styles;

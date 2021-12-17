import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingLeft: 18,
    paddingTop: 18,
    paddingRight: 10,
    marginBottom: 43,
    ...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', {x: 10, y: 20}, 100, 0.1, 3),
  },
  image: {
    resizeMode: 'contain',
    aspectRatio: 1,
    marginTop: 'auto',
    marginBottom: 0,
    alignSelf: 'flex-end',
  },
  title: {
    fontWeight: '600',
    color: '#000000',
  },
  content: {
    color: '#7B7B7B',
  },
  titleReverse: {
    textAlign: 'right',
  },
  contentReverse: {
    textAlign: 'right',
  },
  imageReverse: {
    alignSelf: 'flex-start',
  },
});

export default styles;

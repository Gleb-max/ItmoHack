import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    width: 323,
    height: 110,
    ...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', {x: 10, y: 20}, 100, 0.1, 3),
    marginRight: 20,
  },
  touchableContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 11,
    paddingTop: 10,
    paddingBottom: 8,
  },
  photo: {
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  infoContainer: {
    flex: 1,
    paddingLeft: 16,
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: '600',
    lineHeight: 19,
    color: '#000000',
  },
  address: {
    fontWeight: '500',
    lineHeight: 16,
    color: '#161844',
  },
  phone: {
    fontWeight: '500',
    lineHeight: 16,
    color: '#161844',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  ratingStar: {
    alignSelf: 'center',
    marginRight: 5,
  },
  rating: {
    fontWeight: '400',
    lineHeight: 16,
    color: '#000000',
  },
});

export default styles;

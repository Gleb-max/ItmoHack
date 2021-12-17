import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 14,
    marginBottom: 37,
    ...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', {x: 10, y: 20}, 100, 0.1, 4),
  },
  mainRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  header: {
    color: '#7B7B7B',
    fontWeight: '500',
  },
  title: {
    fontWeight: '600',
    color: '#000000',
    marginBottom: 1,
  },
  content: {
    fontWeight: '500',
    color: '#343434',
  },
  mainContentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  item: {
    color: '#000000',
    fontWeight: '600',
  },
  photo: {
    width: 109,
    height: 66,
    borderRadius: 10,
    resizeMode: 'contain',
    marginRight: 10,
  },
  nickButton: {
    alignSelf: 'flex-start',
  },
});

export default styles;

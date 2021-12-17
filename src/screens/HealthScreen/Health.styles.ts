import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  scrollContent: {
    paddingTop: 50,
    paddingBottom: 70,
    paddingHorizontal: 22,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  title: {
    color: '#161844',
    fontWeight: '600',
    textAlign: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  photo: {
    height: 52,
    width: 52,
    borderRadius: 26,
    marginLeft: 14.23,
  },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  scrollContent: {
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 22,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  scrollContentBegin: {
    paddingTop: 80,
  },
  title: {
    color: '#161844',
    fontWeight: '600',
    textAlign: 'center',
  },
  description: {
    color: '#7B7B7B',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 30,
  },
  stepContainer: {
    marginBottom: 23,
  },
  beganButton: {
    marginBottom: 41,
  },
  photo: {
    height: 52,
    width: 52,
    borderRadius: 26,
    marginLeft: 14.23,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  tagsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 16,
  },
  tagButton: {
    flex: 1,
    height: 30,
    borderRadius: 13,
  },
  tagButtonMargin: {
    marginRight: 21,
  },
  tag: {
    fontSize: 14,
  },
});

export default styles;

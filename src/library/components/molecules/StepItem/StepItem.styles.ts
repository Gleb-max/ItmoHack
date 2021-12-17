import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  numberContainer: {
    height: 36,
    width: 36,
    borderRadius: 18,
    marginBottom: 23,
    backgroundColor: '#FDB78F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reverseNumberContainer: {
    backgroundColor: '#5C3661',
  },
  number: {
    fontWeight: '600',
    color: '#5C3661',
  },
  reverseNumber: {
    color: '#FDB78F',
  },
  description: {
    color: '#000000',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;

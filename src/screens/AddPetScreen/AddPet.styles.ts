import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  dropdown: {
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  dropdownContainer: {
    height: 44,
  },
  horizontalContainer: {
    flexDirection: 'row',
  },
  rightElement: {
    marginLeft: 'auto',
  },
  groupHeader: {
    marginTop: 25,
    marginBottom: 21,
  },
  group: {
    marginTop: 25,
    marginBottom: 5,
  },
  exampleText: {
    color: '#7B7B7B',
  },
  example: {
    marginBottom: 16,
  },
  ageContainer: {
    marginBottom: 30,
  },
  scrollContent: {
    paddingTop: 50,
    paddingHorizontal: 22,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  button: {
    marginBottom: 33,
  },
  features: {
    marginBottom: 30,
  },
  petImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  petName: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Gilroy-Semibold',
    fontWeight: '600',
    fontSize: 30,
    marginVertical: 10,
    // lineHeight: 44,
  },
  petInput: {
    height: 100,
    // marginBottom: 10,
  },
});

export default styles;

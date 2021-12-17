import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  scrollContent: {
    paddingTop: 50,
    paddingBottom: 76,
    paddingHorizontal: 22,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  header: {
    marginBottom: 40,
  },
  functionButton: {
    marginBottom: 22,
  },
  functionButtonsContainer: {
    marginTop: 41,
    marginBottom: 'auto',
  },
  leftElem: {
    marginRight: 5,
  },
  rightElem: {
    marginLeft: 5,
  },
  cardColumnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardColumn: {
    flex: 1,
  },
  addCardMainText: {
    fontSize: 70,
    fontFamily: 'Gilroy-Regular',
  },
  addCardContentContainer: {
    paddingTop: 0,
    paddingBottom: 10,
  },
});

export default styles;

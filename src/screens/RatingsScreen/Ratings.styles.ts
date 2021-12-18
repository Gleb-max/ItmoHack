import { Helpers } from 'library/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 22,
    // justifyContent: 'space-between',
    flexGrow: 1,
  },
  clinicCardsContainer: {
    marginTop: 'auto',
    marginBottom: 100,
  },
  scroolContainerView: {
    paddingLeft: 20,
    paddingTop: 3,
    paddingBottom: 7,
  },
  switchText: {
		fontWeight: '500',
    lineHeight: 20,
    fontSize: 13,
		fontStyle: 'normal',
		fontFamily: 'Gilroy-Medium',
	},
  switchStyle: {
		backgroundColor: '#EEEEEE',
		borderRadius: 13,
		paddingVertical: 3.64,
		paddingHorizontal: 3.29,
    marginBottom: 10,
	},
  card: {
		marginBottom: 30,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 4),
	},
  flatListContainer: {
		paddingTop: 27,
		paddingHorizontal: 4,
	},
  dropdown: {
		borderRadius: 8,
		paddingHorizontal: 10,
	},
  dropdownContainer: {
		marginHorizontal: 4,
		height: 39,
	},
});

export default styles;

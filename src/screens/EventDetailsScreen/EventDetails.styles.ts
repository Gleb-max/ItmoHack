import { Helpers } from 'library/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
    paddingHorizontal: 22,
    paddingTop: 40,
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
  card: {
		marginTop: 30,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 4),
	},
  flatListContainer: {
		paddingTop: 27,
		paddingHorizontal: 4,
	},
  header: {
		color: '#1A1D5B',
    marginTop: 10,
    textAlign: 'center',
    marginBottom: 30,
	},
	dateText: {
    marginTop: 10,
		alignSelf: 'flex-end',
		color: '#4647ed',
	},
});

export default styles;

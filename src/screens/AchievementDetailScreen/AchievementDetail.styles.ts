import { Helpers } from 'library/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
    paddingHorizontal: 22,
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
		marginBottom: 30,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 4),
	},
  flatListContainer: {
		paddingTop: 27,
		paddingHorizontal: 20,
	},
});

export default styles;

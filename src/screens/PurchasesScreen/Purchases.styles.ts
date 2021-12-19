import { Helpers } from 'library/theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
		width: '100%',
		alignSelf: 'center',
		height: undefined,
		aspectRatio: 1,
  },
  contentContainer: {
	  paddingHorizontal: 22,
  },
  header: {
	color: '#1A1D5B',
	marginBottom: 7,
  },
  purchaseButton: {
	marginTop: 27,
	marginBottom: 10,
  },
  scrollContent: {
    flexGrow: 1,
  },
  flatListContainer: {
		paddingTop: 27,
		paddingHorizontal: 4,
	},
  card: {
		marginTop: 18,
    marginBottom: 12,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 4),
	},
  modalContainer: {
		flex: 1,
	},
  qrView: {
		// width: '100%',
		// height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
  qrOpacity: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
	},
  qrAdvice: {
		fontWeight: '500',
		fontStyle: 'normal',
		color: '#000000',
		alignSelf: 'center',
		textAlign: 'center',
		marginTop: 177,
	},
  qrImage: {
    width: '80%',
    height: undefined,
    aspectRatio: 1,
  },
});

export default styles;

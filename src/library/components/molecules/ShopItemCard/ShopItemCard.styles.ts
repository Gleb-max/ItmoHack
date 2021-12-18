import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		marginTop: 23,
		marginBottom: 7,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 4),
		paddingBottom: 16,
	},
	contentContainer: {
		paddingHorizontal: 20,
	},
	moreButton: {
		marginTop: 27,
	},
	header: {
		color: '#1A1D5B',
		marginBottom: 7,
	},
	image: {
		width: '80%',
		alignSelf: 'center',
		height: undefined,
		aspectRatio: 1,
	},
});

export default styles;

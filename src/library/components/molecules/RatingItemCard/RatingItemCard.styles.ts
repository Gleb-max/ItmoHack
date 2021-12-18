import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 1),
		borderRadius: 8,
		flexDirection: 'row',
	},
	indexContainer: {
		borderBottomStartRadius: 8,
		borderTopStartRadius: 8,
		paddingVertical: 10,
		width: 40,
		justifyContent: 'center',
		alignContent: 'center',
		alignItems: 'center',
	},
	header: {
		color: '#747474',
	},
	text: {
		color: '#1A1D5B',
	},
	textContainer: {
		flex: 1,
		marginHorizontal: 10,
		marginVertical: 7,
		alignSelf: 'center',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		overflow: 'visible',
	},
	takeCode: {
		alignSelf: 'center',
		marginLeft: 'auto',
	},
	takeCodeText: {
		color: '#1A1D5B',
	},
	star_icon: {
		alignSelf: 'center',
		marginLeft: 2,
		marginRight: 10,
	}
});

export default styles;

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
});

export default styles;

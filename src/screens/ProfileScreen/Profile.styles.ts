import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  scrollContent: {
    paddingTop: 50,
    paddingBottom: 60,
    paddingHorizontal: 22,
    // justifyContent: 'space-between',
    flexGrow: 1,
  },
  profileHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  photo: {
    width: 68,
    height: 68,
    borderRadius: 34,
  },
  name: {
    color: '#000000',
    fontStyle: 'normal',
    textDecorationLine: 'underline',
    fontWeight: '600',
    marginLeft: 14,
  },
  logoutButton: {
    marginTop: 'auto',
    marginBottom: 41,
  },
  functionButton: {
    marginBottom: 22,
  },
  notificationButton: {
    marginLeft: 'auto',
  },
  chart: {
		flex: 1,
    minHeight: 100,
	},
});

export default styles;

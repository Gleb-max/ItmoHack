import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';
import {DimensionsManager} from 'library/modules/DimensionsManager';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  errorOpacity: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  errorView: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorColor: {
    color: '#1A1D5B',
    fontSize: 15,
  },
  errorMessage: {
    marginTop: 10,
    textAlign: 'center',
  },
  icon: {},
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
  },
  scrollContent: {
    paddingTop: 50,
    paddingHorizontal: 22,
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  button: {
    marginBottom: 33,
  },
  fieldHeader: {
    color: '#000000',
    fontWeight: '500',
  },
  fieldGroupContainer: {
    marginBottom: 34,
  },
  mapButton: {
    color: '#161844',
    textDecorationLine: 'underline',
    marginLeft: 12,
    marginTop: 3,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRow: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    color: '#161844',
    fontWeight: '600',
  },
  backButton: {
    marginRight: 16,
  },
  dropdown: {
    borderRadius: 10,
    paddingHorizontal: 16,
  },
  dropdownContainer: {
    height: 44,
    marginBottom: 20,
    marginTop: 16,
  },
});

export default styles;

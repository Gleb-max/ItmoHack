import {StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';
import {DimensionsManager} from 'library/modules/DimensionsManager';

const styles = StyleSheet.create({
  container: {
    height: DimensionsManager.verticalScale(60),
    width: DimensionsManager.horizontalScale(60),
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff7366',
    ...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', {x: 10, y: 20}, 100, 0.1, 4),
  },
  icon: {},
});

export default styles;

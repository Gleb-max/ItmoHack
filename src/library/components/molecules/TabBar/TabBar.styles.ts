import {Platform, StyleSheet} from 'react-native';
import {Helpers} from 'library/theme';
import {DimensionsManager} from 'library/modules';

export const CURSOR_TAB_OFFSET = 20;

const bottomInset = DimensionsManager.getBottomInset();
export const TAB_BAR_HEIGHT = 60;
export const TAB_BAR_BORDER_RADIUS = 17;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    overflow: 'visible',
    paddingHorizontal: 12,
    ...Helpers.boxShadow('rgb(223, 227, 229)', {x: 0, y: 4}, 50, 0.3, 6),
  },
  tabBar: {
    alignSelf: 'center',
    overflow: 'hidden',
    position: 'absolute',
    top: -TAB_BAR_BORDER_RADIUS - 12,
    width: '100%',
    height: TAB_BAR_HEIGHT,
    borderRadius: TAB_BAR_BORDER_RADIUS,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      android: {
        borderWidth: 0.4,
        borderColor: 'rgb(223, 227, 229)',
      },
    }),
    ...Helpers.boxShadow('rgb(223, 227, 229)', {x: 0, y: 4}, 50, 0.3, 6),
    flexDirection: 'row',
  },
  tabBarSpace: {
    height: TAB_BAR_HEIGHT + bottomInset - TAB_BAR_BORDER_RADIUS,
    // backgroundColor: '#FFFFFF',
  },
  tabBarItem: {
    flex: 1,
    height: TAB_BAR_HEIGHT,
  },
});

export default styles;

import React from 'react';
import {View, StyleSheet, Dimensions, PixelRatio} from 'react-native';

//other deps
import {getStatusBarHeight, getBottomSpace} from 'react-native-iphone-x-helper';
import {
  EdgeInsets,
  useSafeAreaInsets,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

//initial values
const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} = Dimensions.get('window');

const baseInsets: EdgeInsets = {
  top: getStatusBarHeight(true),
  right: 0,
  bottom: getBottomSpace(),
  left: 0,
};

//initializer
const getInitializer = (dimensionManager: DimensionsManager) => {
  const Initializer: React.FC = () => {
    //callback
    const _onLayout = React.useCallback((event) => {
      const {width, height} = event.nativeEvent.layout;
      dimensionManager.updateDimensions(width, height);
    }, []);

    //update screen insets
    const insets = useSafeAreaInsets();
    dimensionManager.updateInsets(insets);

    return (
      <View
        pointerEvents="none"
        onLayout={_onLayout}
        style={StyleSheet.absoluteFillObject}
      />
    );
  };

  return Initializer;
};

//provider
const DimensionsProvider = SafeAreaProvider;

//manager
class DimensionsManager {
  public Provider = DimensionsProvider;
  public Initializer = getInitializer(this);
  private insets = baseInsets;
  private designScreenWidth = WINDOW_WIDTH;
  private designScreenHeight = WINDOW_HEIGHT;
  private screenWidth = WINDOW_WIDTH;
  private screenHeight = WINDOW_HEIGHT;

  updateInsets(newInsets: EdgeInsets) {
    this.insets = newInsets;
  }

  updateDesignDimensions(designWidth: number, designHeight: number) {
    this.designScreenWidth = designWidth;
    this.designScreenHeight = designHeight;
  }

  updateDimensions(screenWidth: number, screenHeight: number) {
    this.screenWidth = screenWidth;
    this.screenHeight = screenHeight;
  }

  getScreenWidth = () => this.screenWidth;
  getScreenHeight = () => this.screenHeight;

  //helpers
  wp(widthPercent: number | string) {
    // Parse string percentage input and convert it to number
    const elemWidth =
      typeof widthPercent === 'number'
        ? widthPercent
        : parseFloat(widthPercent);

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that corresponds to an integer number of pixels
    return PixelRatio.roundToNearestPixel((this.screenWidth * elemWidth) / 100);
  }

  hp(heightPercent: number | string, withStatusBar = false) {
    // Parse string percentage input and convert it to number
    const elemHeight =
      typeof heightPercent === 'number'
        ? heightPercent
        : parseFloat(heightPercent);

    //consider status bar if flag passed
    const statusBarPart = withStatusBar ? 0 : -this.insets.top;

    // Use PixelRatio.roundToNearestPixel method in order to round the layout
    // size (dp) to the nearest one that corresponds to an integer number of pixels
    return PixelRatio.roundToNearestPixel(
      ((this.screenHeight + statusBarPart) * elemHeight) / 100,
    );
  }

  horizontalScale = (size: number): number =>
    (this.screenWidth / this.designScreenWidth) * size;
  verticalScale = (size: number): number =>
    (this.screenHeight / this.designScreenHeight) * size;
  moderateScale = (size: number, factor = 0.5): number =>
    size + (this.horizontalScale(size) - size) * factor;

  getStatusBarHeight = () => this.insets.top;
  getBottomInset = () => this.insets.bottom;

  getFullscreenModalHeight = () => this.screenHeight - this.insets.top - 10;
}

const instance = new DimensionsManager();
export {instance as DimensionsManager};

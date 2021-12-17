import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import flatten from 'ramda/src/flatten';

type StyleType = StyleProp<ViewStyle | TextStyle | ImageStyle>;

const flattenStyle = (style?: StyleType, preserveArray: boolean = false) => {
  if (preserveArray) {
    if (!style) {
      style = {};
    }

    if (Array.isArray(style)) {
      const flattened = flatten(style);

      return flattened;
    } else {
      return style;
    }
  } else {
    return StyleSheet.flatten(style);
  }
};

export default flattenStyle;

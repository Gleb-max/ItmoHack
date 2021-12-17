import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, View, ViewStyle} from 'react-native';

//styles
import styles from './LoaderOverlay.styles';

//components
import {Loader} from 'library/components/atoms';

//types
type LoaderOverlayProps = {
  size?: number | 'small' | 'large';
  color?: string;
  style?: StyleProp<ViewStyle>;
  loaderStyle?: StyleProp<ViewStyle>;
};

export const LoaderOverlay: React.FC<LoaderOverlayProps> = ({
  size = 'small',
  color = '#5C3661',
  style,
  loaderStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Loader color={color} size={size} style={loaderStyle} />
    </View>
  );
};

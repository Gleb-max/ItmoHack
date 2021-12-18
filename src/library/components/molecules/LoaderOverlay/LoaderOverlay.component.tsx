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
  isTransparent?: boolean;
};

export const LoaderOverlay: React.FC<LoaderOverlayProps> = ({
  size = 'small',
  color = '#ff7366',
  style,
  loaderStyle,
  isTransparent = false,
}) => {
  return (
    <View style={[styles.container, style, !isTransparent && {backgroundColor: 'rgba(0, 0, 0, 0.4)'}]}>
      <Loader color={color} size={size} style={loaderStyle} />
    </View>
  );
};

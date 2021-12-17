import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ActivityIndicator, StyleProp, ViewStyle} from 'react-native';

//types
type LoaderProps = {
  size?: number | 'small' | 'large';
  style?: StyleProp<ViewStyle>;
  color?: string;
};

export const Loader: React.FC<LoaderProps> = ({
  size = 'large',
  style,
  color = '#5C3661',
}) => {
  return <ActivityIndicator color={color} size={size} style={style} />;
};

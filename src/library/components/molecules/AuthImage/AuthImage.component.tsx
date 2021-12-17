import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ViewStyle, StyleProp, Image, ImageSourcePropType} from 'react-native';

//styles
import styles from './AuthImage.styles';

//types
type AuthImageProps = {
  style?: StyleProp<ViewStyle>;
  logo: NodeModule;
};

export const AuthImage: React.FC<AuthImageProps> = ({style, logo}) => {
  return (
    <Image source={logo as ImageSourcePropType} style={[styles.image, style]} />
  );
};

import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ViewStyle, StyleProp, Image} from 'react-native';

//other deps
import FastImage from 'react-native-fast-image';

//styles
import styles from './AppFeatureImage.styles';

//types
type AppFeatureImageProps = {
  style?: StyleProp<ViewStyle>;
  logo: NodeModule;
};

export const AppFeatureImage: React.FC<AppFeatureImageProps> = ({
  style,
  logo,
}) => {
  return <Image source={logo} style={[styles.image, style]} />;
};

import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ViewStyle, StyleProp, TextStyle} from 'react-native';

//styles
import styles from './AppFeatureText.styles';

//components
import {GilroyText} from 'library/components/atoms';

//types
type AppFeatureTextProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const AppFeatureText: React.FC<AppFeatureTextProps> = ({
  text,
  style,
  textStyle,
}) => {
  return (
    <GilroyText
      type={'Semibold'}
      size={'g1'}
      styleText={[styles.text, textStyle]}
      style={style}>
      {text}
    </GilroyText>
  );
};

import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ViewStyle, StyleProp, TextStyle} from 'react-native';

//styles
import styles from './AuthTitle.styles';

//components
import {GilroyText} from 'library/components/atoms';

//types
type AuthTitleProps = {
  text: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const AuthTitle: React.FC<AuthTitleProps> = ({
  text,
  style,
  textStyle,
}) => {
  return (
    <GilroyText
      type="Semibold"
      size="g2"
      styleText={[styles.text, textStyle]}
      style={[styles.container, style]}>
      {text}
    </GilroyText>
  );
};

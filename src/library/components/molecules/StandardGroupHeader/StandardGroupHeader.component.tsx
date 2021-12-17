import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {ViewStyle, StyleProp, TextStyle} from 'react-native';

//styles
import styles from './StandardGroupHeader.styles';

//components
import {GilroyText} from 'library/components/atoms';

//types
type StandardGroupHeaderProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const StandardGroupHeader: React.FC<StandardGroupHeaderProps> = ({
  style,
  textStyle,
  children,
}) => {
  return (
    <GilroyText
      style={style}
      styleText={[styles.text, textStyle]}
      type={'Semibold'}
      size={'g5'}>
      {children}
    </GilroyText>
  );
};

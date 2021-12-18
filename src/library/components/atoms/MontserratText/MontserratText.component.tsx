import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Text, TextStyle, StyleProp} from 'react-native';

//types
type MontserratTextProps = {
  type: 'Medium' | 'Semibold';
  size: 'm1' | 'm2' | 'm3' | 'm4' | 'm5' | 'm6';
  styleText?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  lines?: number;
  children: React.ReactNode;
};

export const MontserratText: React.FC<MontserratTextProps> = ({
  type = 'Medium',
  size,
  styleText,
  style,
  lines = undefined,
  children,
}) => {
  let fontSize;
  switch (size) {
    case 'm1':
      fontSize = 18;
      break;
    case 'm2':
      fontSize = 13;
      break;
    case 'm3':
      fontSize = 15;
      break;
    case 'm4':
      fontSize = 12;
      break;
    case 'm5':
      fontSize = 14;
      break;
    case 'm6':
      fontSize = 21;
      break;
    default:
      break;
  }

  return (
    <Text
      numberOfLines={lines}
      style={[
        {fontFamily: `Montserrat-${type}`, fontSize: fontSize},
        style,
        styleText,
      ]}>
      {children}
    </Text>
  );
};

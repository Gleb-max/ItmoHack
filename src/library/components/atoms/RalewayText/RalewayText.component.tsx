import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Text, TextStyle, StyleProp} from 'react-native';

//types
type RalewayTextProps = {
  type: 'Light' | 'Medium' | 'Regular' | 'Semibold';
  size:
    | 'r1'
    | 'r2'
    | 'r3'
    | 'r4'
    | 'r5'
    | 'r6'
    | 'r7'
    | 'r8'
    | 'r9'
    | 'r10'
    | 'r11'
    | 'r12'
    | 'r13'
    | 'r14'
    | 'r15';
  styleText?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

export const RalewayText: React.FC<RalewayTextProps> = ({
  type = 'Medium',
  size,
  styleText,
  style,
  children,
}) => {
  let fontSize;
  switch (size) {
    case 'r1':
      fontSize = 27;
      break;
    case 'r2':
      fontSize = 34;
      break;
    case 'r3':
      fontSize = 17;
      break;
    case 'r4':
      fontSize = 22;
      break;
    case 'r5':
      fontSize = 21;
      break;
    case 'r6':
      fontSize = 13;
      break;
    case 'r7':
      fontSize = 32;
      break;
    case 'r8':
      fontSize = 29;
      break;
    case 'r9':
      fontSize = 26;
      break;
    case 'r10':
      fontSize = 60;
      break;
    case 'r11':
      fontSize = 14;
      break;
    case 'r12':
      fontSize = 11;
      break;
    case 'r13':
      fontSize = 12;
      break;
    case 'r14':
      fontSize = 24;
      break;
    case 'r15':
      fontSize = 18;
      break;
    default:
      break;
  }

  return (
    <Text
      style={[
        {fontFamily: `Raleway-${type}`, fontSize: fontSize},
        style,
        styleText,
      ]}>
      {children}
    </Text>
  );
};

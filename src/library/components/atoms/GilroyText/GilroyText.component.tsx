import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Text, TextStyle, StyleProp} from 'react-native';

//types
type GilroyTextProps = {
  type: 'Light' | 'Medium' | 'Regular' | 'Semibold';
  size:
    | 'g1'
    | 'g2'
    | 'g3'
    | 'g4'
    | 'g5'
    | 'g6'
    | 'g7'
    | 'g8'
    | 'g9'
    | 'g10'
    | 'g11'
    | 'g12'
    | 'g13'
    | 'g14'
    | 'g15';
  styleText?: StyleProp<TextStyle>;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
};

export const GilroyText: React.FC<GilroyTextProps> = ({
  type = 'Medium',
  size,
  styleText,
  style,
  children,
}) => {
  let fontSize;
  switch (size) {
    case 'g1':
      fontSize = 27;
      break;
    case 'g2':
      fontSize = 34;
      break;
    case 'g3':
      fontSize = 17;
      break;
    case 'g4':
      fontSize = 22;
      break;
    case 'g5':
      fontSize = 21;
      break;
    case 'g6':
      fontSize = 13;
      break;
    case 'g7':
      fontSize = 32;
      break;
    case 'g8':
      fontSize = 29;
      break;
    case 'g9':
      fontSize = 26;
      break;
    case 'g10':
      fontSize = 60;
      break;
    case 'g11':
      fontSize = 14;
      break;
    case 'g12':
      fontSize = 11;
      break;
    case 'g13':
      fontSize = 12;
      break;
    case 'g14':
      fontSize = 24;
      break;
    case 'g15':
      fontSize = 18;
      break;
    default:
      break;
  }

  return (
    <Text
      style={[
        {fontFamily: `Gilroy-${type}`, fontSize: fontSize},
        style,
        styleText,
      ]}>
      {children}
    </Text>
  );
};

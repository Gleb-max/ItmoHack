// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TextStyle, StyleProp} from 'react-native';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Icons} from 'library/types';

export type SMIconsProps = {
  name: Icons.SMIconsName;
  color?: string;
  size?: number;
  style?: StyleProp<TextStyle>;
  width?: number;
  height?: number;
};

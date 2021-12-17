// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Icons} from 'library/types';

export type TabData = {
  isFocused: boolean;
  iconName: Icons.TabBarIconName;
  onPress?: () => void;
  onLongPress?: () => void;
};

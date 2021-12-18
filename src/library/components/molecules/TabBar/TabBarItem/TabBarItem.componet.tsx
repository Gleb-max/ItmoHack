import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Pressable, StyleProp, ViewStyle} from 'react-native';

//styles
import styles from './TabBarItem.styles';

//components
import {SMIcons} from 'library/components/atoms';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TabData} from '../TabBar.interface';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Icons} from 'library/types';

type TabBarItemProps = {
  style?: StyleProp<ViewStyle>;
} & TabData;

export const TabBarItem: React.FC<TabBarItemProps> = ({
  isFocused,
  iconName,
  onPress,
  style,
}) => {
  const _iconName = isFocused
    ? iconName
    : ((iconName + '_active') as Icons.TabBarIconName);
  const contentColor = isFocused ? '#4647ed' : '#AFAFAF';

  return (
    <Pressable
      onPress={onPress}
      android_ripple={{
        color: '#DCDCDC',
      }}
      style={styles.button}>
      <SMIcons
        size={isFocused ? 25 : 21}
        color={contentColor}
        style={style}
        name={_iconName}
      />
    </Pressable>
  );
};

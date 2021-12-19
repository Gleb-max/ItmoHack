import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, ViewStyle, TouchableOpacity, Image} from 'react-native';

//components
import {GilroyText, MontserratText, SMIcons} from 'library/components/atoms';

//other deps
import LinearGradient from 'react-native-linear-gradient';

//styles
import styles from './AchievementCard.styles';
import { AchievementCategoryItem } from 'library/types/AchievementCategoryItem.interface';

type AchievementCardProps = {
  item: AchievementCategoryItem;
  style?: StyleProp<ViewStyle>;
  onPress: (item: any) => void;
};

export const AchievementCard: React.FC<AchievementCardProps> = ({
  item,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
			style={[styles.container, style]}
			onPress={() => onPress(item)}
		>
			<GilroyText size={'g5'} type={'Semibold'} styleText={[styles.header, {color: item.accepted ? '#e03c3c' : '#77C66E'}]}>{item.name} - {item.points}</GilroyText>
		</TouchableOpacity>
  );
};

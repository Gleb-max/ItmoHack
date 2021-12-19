import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, ViewStyle, TouchableOpacity, Image} from 'react-native';

//components
import {GilroyText, MontserratText, SMIcons} from 'library/components/atoms';

//other deps
import LinearGradient from 'react-native-linear-gradient';

//styles
import styles from './AchievementCard.styles';

type AchievementCardProps = {
  type: string;
  style?: StyleProp<ViewStyle>;
  onPress: (item: any) => void;
};

export const AchievementCard: React.FC<AchievementCardProps> = ({
  type,
  style,
  onPress,
}) => {
  const getNameByType = (achievementType: string) => {
    switch (achievementType) {
      case 'humanities':
        return 'Гуманитарные';
        break;
      case 'natural':
        return 'Естесственно-научные';
        break;
      case 'physical':
        return 'Спортивные';
        break;
      case 'softSkills':
        return 'Софт-скилы';
        break;
      case 'technical':
        return 'Технические';
        break;
      default:
        return 'Добавить';
        break;
    }
  }

  const getIconNameByType = (achievementType: string) => {
    switch (achievementType) {
      case 'humanities':
        return 'ic_humanities';
        break;
      case 'natural':
        return 'ic_natural';
        break;
      case 'physical':
        return 'ic_sport';
        break;
      case 'softSkills':
        return 'ic_soft_skills';
        break;
      case 'technical':
        return 'ic_technial';
        break;
      default:
        return 'ic_add';
        break;
    }
  }

  return (
    <TouchableOpacity
			style={[styles.container, style]}
			onPress={() => onPress(item)}
		>
			<GilroyText size={'g5'} type={'Semibold'} styleText={styles.header}>{item.topic}</GilroyText>
			<MontserratText style={styles.dateText} lines={2} size={'m3'} type={'Medium'}>{prettyDate(item.publishDate)}</MontserratText>
		</TouchableOpacity>
  );
};

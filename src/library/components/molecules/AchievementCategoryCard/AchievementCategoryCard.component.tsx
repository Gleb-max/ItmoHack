import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, ViewStyle, TouchableOpacity, Image} from 'react-native';

//components
import {GilroyText, SMIcons} from 'library/components/atoms';

//other deps
import LinearGradient from 'react-native-linear-gradient';

//styles
import styles from './AchievementCategoryCard.styles';

type AchievementCategoryCardProps = {
  type: string;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const AchievementCategoryCard: React.FC<AchievementCategoryCardProps> = ({
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
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <LinearGradient
        colors={['#FF9F99', '#9C9CFF']}
        style={styles.gradientContainer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        {/* <GilroyText styleText={styles.name} size={'g1'} type={'Semibold'}>
          {getNameByType(type)}
        </GilroyText> */}
        <SMIcons size={40} color={'#fff'} name={getIconNameByType(type)} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

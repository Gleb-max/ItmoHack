import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, ViewStyle, TouchableOpacity, Image} from 'react-native';

//components
import {GilroyText} from 'library/components/atoms';

//other deps
import LinearGradient from 'react-native-linear-gradient';

//styles
import styles from './PetCard.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {HomeCard} from 'library/types';

type PetCardProps = {
  petCardInfo: HomeCard.PetCard;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const PetCard: React.FC<PetCardProps> = ({
  petCardInfo,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <LinearGradient
        colors={['#8D5B94', '#FFCFB4']}
        style={styles.gradientContainer}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <Image source={{uri: petCardInfo.photo}} style={styles.photo} />
        <GilroyText styleText={styles.name} size={'g1'} type={'Semibold'}>
          {petCardInfo.name}
        </GilroyText>
        <GilroyText styleText={styles.content} size={'g6'} type={'Semibold'}>
          {petCardInfo.breed}, {petCardInfo.age}
        </GilroyText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

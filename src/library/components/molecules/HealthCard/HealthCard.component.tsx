import React from 'react';
import {
  TouchableOpacity,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ViewStyle,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  StyleProp,
  Image,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ImageSourcePropType,
} from 'react-native';

//styles
import styles from './HealthCard.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {PetHealthCard} from 'library/types';

//components
import {MontserratText, GilroyText} from 'library/components/atoms';

type HealthCardProps = {
  card: PetHealthCard.Info;
  onPress: () => void;
  reverse?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const HealthCard: React.FC<HealthCardProps> = ({
  card,
  onPress,
  reverse,
  style,
}) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <GilroyText
        type={'Semibold'}
        size={'g4'}
        style={[styles.title, reverse && styles.titleReverse]}>
        {card.title}
      </GilroyText>
      <MontserratText
        type={'Semibold'}
        size={'m3'}
        style={[styles.content, reverse && styles.contentReverse]}>
        {card.content}
      </MontserratText>
      <Image
        source={card.image as ImageSourcePropType}
        style={[styles.image, reverse && styles.imageReverse]}
      />
    </TouchableOpacity>
  );
};

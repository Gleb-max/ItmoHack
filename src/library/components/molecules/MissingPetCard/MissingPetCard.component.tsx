import React from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  StyleProp,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ViewStyle,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

//components
import {GilroyText} from 'library/components/atoms';

//styles
import styles from './MissingPetCard.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {MissingPet} from 'library/types';

type MissingPetCardProps = {
  card: MissingPet.Info;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const MissingPetCard: React.FC<MissingPetCardProps> = ({
  card,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.mainRow}>
        <Image source={{uri: card.photo}} style={styles.photo} />
        <View style={styles.mainContentContainer}>
          <GilroyText styleText={styles.title} size={'g11'} type={'Semibold'}>
            {card.title}
          </GilroyText>
          <GilroyText styleText={styles.content} size={'g12'} type={'Semibold'}>
            {card.content}
          </GilroyText>
        </View>
      </View>
      <GilroyText styleText={styles.header} size={'g12'} type={'Semibold'}>
        Адрес
      </GilroyText>
      <GilroyText styleText={styles.item} size={'g13'} type={'Semibold'}>
        {card.address}
      </GilroyText>
      <GilroyText styleText={styles.header} size={'g12'} type={'Semibold'}>
        Автор
      </GilroyText>
      <TouchableOpacity style={styles.nickButton}>
        <GilroyText styleText={styles.item} size={'g13'} type={'Semibold'}>
          @{card.author}
        </GilroyText>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

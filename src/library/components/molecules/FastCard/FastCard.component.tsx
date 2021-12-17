import React from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  StyleProp,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ViewStyle,
  TouchableOpacity,
  View,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  TextStyle,
} from 'react-native';

//components
import {GilroyText} from 'library/components/atoms';

//styles
import styles from './FastCard.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {HomeCard} from 'library/types';

type FastCardProps = {
  fastCardInfo: HomeCard.FastHomeCard;
  backgroundColor: string;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  mainTextStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
};

export const FastCard: React.FC<FastCardProps> = ({
  fastCardInfo,
  backgroundColor,
  style,
  contentContainerStyle,
  mainTextStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View
        style={[
          styles.mainContainer,
          {backgroundColor: backgroundColor},
          contentContainerStyle,
        ]}>
        <GilroyText
          styleText={[styles.main, mainTextStyle]}
          size={'g7'}
          type={'Semibold'}>
          {fastCardInfo.main}
        </GilroyText>
        <GilroyText
          styleText={styles.description}
          size={'g6'}
          type={'Semibold'}>
          {fastCardInfo.description}
        </GilroyText>
      </View>
    </TouchableOpacity>
  );
};

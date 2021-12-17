import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, ViewStyle, View} from 'react-native';

//components
import {GilroyText} from 'library/components/atoms';

//styles
import styles from './StepItem.styles';

//types
type StepItemProps = {
  num: number;
  description: string;
  reverse?: boolean;
  style?: StyleProp<ViewStyle>;
};

export const StepItem: React.FC<StepItemProps> = ({
  num,
  description,
  reverse,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View
        style={[
          styles.numberContainer,
          reverse && styles.reverseNumberContainer,
        ]}>
        <GilroyText
          styleText={[styles.number, reverse && styles.reverseNumber]}
          size={'g9'}
          type={'Semibold'}>
          {num}
        </GilroyText>
      </View>
      <GilroyText styleText={styles.description} size={'g1'} type={'Medium'}>
        {description}
      </GilroyText>
    </View>
  );
};

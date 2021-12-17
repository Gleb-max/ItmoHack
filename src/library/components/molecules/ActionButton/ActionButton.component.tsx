import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TouchableOpacity, ViewStyle, StyleProp, View} from 'react-native';

//components
import {GilroyText} from 'library/components/atoms';

//styles
import styles from './ActionButton.styles';

//types
type ActionButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const ActionButton: React.FC<ActionButtonProps> = ({onPress, style}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <GilroyText style={styles.text} type={'Semibold'} size={'g10'}>
          +
        </GilroyText>
      </TouchableOpacity>
    </View>
  );
};

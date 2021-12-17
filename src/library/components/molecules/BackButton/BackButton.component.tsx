import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {TouchableOpacity, ViewStyle, StyleProp} from 'react-native';

//components
import {SMIcons} from 'library/components/atoms';

//styles
import styles from './BackButton.styles';

//types
type BackButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const BackButton: React.FC<BackButtonProps> = ({onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <SMIcons
        name={'ic_arrow_left'}
        size={15}
        width={24}
        height={24}
        color={'#5C3661'}
      />
    </TouchableOpacity>
  );
};

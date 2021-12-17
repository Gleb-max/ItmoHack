import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';

//components
import {GilroyText, SMIcons} from 'library/components/atoms';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Icons} from 'library/types';

//styles
import styles from './FunctionButtonItem.styles';

type FunctionButtonItemProps = {
  header: string;
  iconName: Icons.SMIconsName;
  iconColor: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
};

export const FunctionButtonItem: React.FC<FunctionButtonItemProps> = ({
  header,
  iconName,
  iconColor,
  style,
  onPress,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.touchable} onPress={onPress}>
        <GilroyText size="g3" type="Medium" styleText={styles.header}>
          {header}
        </GilroyText>

        <SMIcons
          name={iconName}
          size={20}
          color={iconColor}
          style={styles.cardIcon}
        />

        <SMIcons
          name="ic_arrow_right"
          size={20}
          color={'#AFAFAF'}
          style={styles.rightIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

import React from 'react';
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

//components
import {GilroyText} from 'library/components/atoms';

//styles
import styles from './HomeHeader.styles';

type HomeHeaderProps = {
  userData: {
    name: string;
    photo: string;
  };
  onProfile: () => void;
  style?: StyleProp<ViewStyle>;
};

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  userData,
  onProfile,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <GilroyText
          children={'Добрый день,'}
          styleText={styles.greeting}
          size={'g4'}
          type={'Semibold'}
        />

        <GilroyText styleText={styles.name} size={'g4'} type={'Semibold'}>
          {userData.name}
        </GilroyText>
      </View>
      <TouchableOpacity onPress={onProfile}>
        <Image source={{uri: userData.photo}} style={styles.photo} />
      </TouchableOpacity>
    </View>
  );
};

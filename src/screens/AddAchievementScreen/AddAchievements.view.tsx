import React from 'react';
import {View, StatusBar} from 'react-native';
import { Text } from 'react-native-svg';

//styles
import styles from './AddAchievement.styles';

//types
type AddAchievementViewProps = {
  
};

export const AddAchievementView: React.FC<AddAchievementViewProps> = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Text>vrenvhrbvhjrbevjhrbrj</Text>
    </View>
  );
};

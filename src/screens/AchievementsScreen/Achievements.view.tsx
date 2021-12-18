import React from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';

//styles
import styles from './Achievements.styles';

//types

type AchievementsViewProps = {
  
};

export const AchievementsView: React.FC<AchievementsViewProps> = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Text>Achievements</Text>
    </View>
  );
};

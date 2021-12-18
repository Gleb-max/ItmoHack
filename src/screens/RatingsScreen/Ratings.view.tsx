import React from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';

//styles
import styles from './Ratings.styles';

type RatingsViewProps = {
  
};

export const RatingsView: React.FC<RatingsViewProps> = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Text>Ratings</Text>
    </View>
  );
};

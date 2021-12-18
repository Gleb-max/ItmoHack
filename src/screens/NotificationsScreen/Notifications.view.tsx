import React from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';

//styles
import styles from './Notifications.styles';

import { LoaderOverlay } from 'library/components';

type NotificationsViewProps = {
  
};

export const NotificationsView: React.FC<NotificationsViewProps> = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
    </View>
  );
};

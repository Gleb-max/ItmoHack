import React from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';

//styles
import styles from './Events.styles';

import { LoaderOverlay } from 'library/components';

type EventsViewProps = {
  
};

export const EventsView: React.FC<EventsViewProps> = () => {
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

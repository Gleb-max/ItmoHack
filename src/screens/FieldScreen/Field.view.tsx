import React from 'react';
import {View, StatusBar, ScrollView, Text} from 'react-native';

//components
import {MedicineMap, VeterinaryClinicCard} from 'library/components';

//styles
import styles from './Field.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {VeterinarClinic} from 'library/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MapView from 'react-native-maps';

type FieldViewProps = {
  
};

export const FieldView: React.FC<FieldViewProps> = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <Text>Field</Text>
    </View>
  );
};

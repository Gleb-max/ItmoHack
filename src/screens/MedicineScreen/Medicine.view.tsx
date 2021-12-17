import React from 'react';
import {View, StatusBar, ScrollView} from 'react-native';

//components
import {MedicineMap, VeterinaryClinicCard} from 'library/components';

//styles
import styles from './Medicine.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {VeterinarClinic} from 'library/types';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MapView from 'react-native-maps';

type MedicineViewProps = {
  clinics: VeterinarClinic.Info[];
};

export const MedicineView: React.FC<MedicineViewProps> = ({clinics}) => {
  //state
  const [map, setMap] = React.useState<MapView>();

  //renders
  const _renderClinics = React.useCallback(() => {
    return clinics.map((clinic: VeterinarClinic.Info, index: number) => (
      <VeterinaryClinicCard
        clinicInfo={clinic}
        key={index}
        onPress={() =>
          map?.animateToRegion(
            {
              latitude: clinic.coordinate.latitude,
              longitude: clinic.coordinate.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            },
            2000,
          )
        }
      />
    ));
  }, [clinics, map]);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <MedicineMap
        setRef={setMap}
        markers={clinics.map((clinic) => {
          return {coordinate: clinic.coordinate};
        })}
        maplatitude={56.85601211910544}
        maplongitude={60.565479277200424}
      />

      <View style={styles.clinicCardsContainer}>
        <ScrollView
          contentContainerStyle={styles.scroolContainerView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {_renderClinics()}
        </ScrollView>
      </View>
    </View>
  );
};

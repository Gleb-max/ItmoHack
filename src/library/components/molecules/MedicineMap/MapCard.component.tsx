import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleProp, ViewStyle} from 'react-native';

//other deps
import MapView, {PROVIDER_GOOGLE, Marker, MarkerProps} from 'react-native-maps';

//marker
import pinImage from '@assets/images/map/pin.png';

//styles
import styles from './MapCard.styles';

//types
type MapCardProps = {
  maplatitude: number;
  maplongitude: number;
  markers?: MarkerProps[];
  setRef?: (map: any) => void;
  style?: StyleProp<ViewStyle>;
};

export const MedicineMap: React.FC<MapCardProps> = ({
  setRef,
  maplatitude = 56.833332,
  maplongitude = 60.583332,
  markers = [],
  style,
}) => {
  //renders
  const _renderMarkers = React.useCallback(() => {
    return markers.map((marker: MarkerProps, index: number) => (
      <Marker coordinate={marker.coordinate} key={index} image={pinImage} />
    ));
  }, [markers]);

  return (
    <MapView
      ref={(map) => setRef?.(map)}
      provider={PROVIDER_GOOGLE}
      style={[styles.map, style]}
      region={{
        latitude: maplatitude,
        longitude: maplongitude,
        latitudeDelta: 0.015,
        longitudeDelta: 0.015,
      }}>
      {_renderMarkers()}
    </MapView>
  );
};

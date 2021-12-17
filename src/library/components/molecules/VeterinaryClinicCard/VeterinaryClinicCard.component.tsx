import React from 'react';
import {
  TouchableOpacity,
  Pressable,
  Text,
  View,
  ViewStyle,
  StyleProp,
  TextStyle,
  Image,
} from 'react-native';

//other deps
// import FastImage from 'react-native-fast-image';

//styles
import styles from './VeterinaryClinicCard.styles';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {VeterinarClinic} from 'library/types';
import {MontserratText, SMIcons} from 'library/components/atoms';

type VeterinaryClinicCardProps = {
  clinicInfo: VeterinarClinic.Info;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};

export const VeterinaryClinicCard: React.FC<VeterinaryClinicCardProps> = ({
  clinicInfo,
  onPress,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.touchableContainer} onPress={onPress}>
        <Image source={{uri: clinicInfo.image}} style={styles.photo} />
        <View style={styles.infoContainer}>
          <MontserratText type={'Semibold'} size={'m3'} style={styles.name}>
            {clinicInfo.name}
          </MontserratText>
          <MontserratText type={'Medium'} size={'m2'} style={styles.address}>
            {clinicInfo.address}
          </MontserratText>
          <MontserratText type={'Medium'} size={'m2'} style={styles.phone}>
            {clinicInfo.phone}
          </MontserratText>
          <View style={styles.ratingContainer}>
            <SMIcons
              name={'ic_star'}
              color={'#126EF4'}
              size={10}
              style={styles.ratingStar}
            />
            <MontserratText type={'Medium'} size={'m4'} style={styles.rating}>
              {clinicInfo.rating}
            </MontserratText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

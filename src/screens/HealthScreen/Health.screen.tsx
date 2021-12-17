import React from 'react';

//navigation
import {useNavigation} from '@react-navigation/native';

//views
import {HealthView} from './Health.view';

//images
import petImage from '@assets/images/health/pet/image.png';
import foodImage from '@assets/images/health/food/image.png';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {PetHealthCard} from 'library/types';
type HealthScreenProps = {};

const healthCards: PetHealthCard.Info[] = [
  {
    title: 'Карточка питомца',
    content: 'Ведите медицинскую карту для отслеживания прививок ',
    image: petImage,
  },
  {
    title: 'Подбор питания',
    content:
      'Составление рациона и подбор корма на основе особенностей вашего компаньона',
    image: foodImage,
  },
];

const userData = {
  photo: 'https://dl.dropboxusercontent.com/s/9tn5z54d72m1egr/Ellipse%2016.png',
};

export const HealthScreen: React.FC<HealthScreenProps> = ({}) => {
  //navigation
  const navigation = useNavigation();

  //callbacks
  const _onProfile = React.useCallback(() => {
    navigation.navigate('main/profile');
  }, [navigation]);

  return (
    <HealthView
      userData={userData}
      onProfile={_onProfile}
      cards={healthCards}
    />
  );
};

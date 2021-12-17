import React from 'react';

//navigation
import {useNavigation} from '@react-navigation/native';

//views
import {HomeView} from './Home.view';

const userData = {
  name: 'Мелания',
  photo: 'https://dl.dropboxusercontent.com/s/9tn5z54d72m1egr/Ellipse%2016.png',
};

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {HomeCard} from 'library/types';
type HomeScreenProps = {};

const fastCards: HomeCard.HomeFastAccessCard[] = [
  {
    name: 'Жора',
    breed: 'Пти-брабансон',
    age: '4 года',
    photo:
      'https://dl.dropboxusercontent.com/s/m9vo7wptah83x1v/Ellipse%2017.png',
  },
  {
    main: '+',
    description: 'Добавить нового питомца',
  },
  {
    main: ' 21 день',
    description: 'Корм закончится через',
  },
  {
    main: ' 28 дней',
    description: 'Прививка от бешенства через',
  },
];

export const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
  //navigation
  const navigation = useNavigation();

  //callbacks
  const _onAddPet = React.useCallback(() => {
    navigation.navigate('add_pet');
  }, [navigation]);

  // const _onVetCall = React.useCallback(() => {
  //   navigation.navigate('add_pet');
  // }, [navigation]);

  // const _onFindGroomer = React.useCallback(() => {
  //   navigation.navigate('add_pet');
  // }, [navigation]);

  // const _onChooseFood = React.useCallback(() => {
  //   navigation.navigate('add_pet');
  // }, [navigation]);

  const _onVetCall = () => console.log('vet');
  const _onFindGroomer = () => console.log('vet');
  const _onChooseFood = () => console.log('vet');

  const _onProfile = React.useCallback(() => {
    navigation.navigate('main/profile');
  }, [navigation]);

  return (
    <HomeView
      userData={userData}
      onProfile={_onProfile}
      onAddPet={_onAddPet}
      onVetCall={_onVetCall}
      onFindGroomer={_onFindGroomer}
      onChooseFood={_onChooseFood}
      fastCards={fastCards}
    />
  );
};

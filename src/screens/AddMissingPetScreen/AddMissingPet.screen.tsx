import React from 'react';

//navigation
import {useNavigation, StackActions} from '@react-navigation/native';

//views
import {AddMissingPetView} from './AddMissingPet.view';

//types
type AddMissingPetScreenProps = {};

export const AddMissingPetScreen: React.FC<AddMissingPetScreenProps> = ({}) => {
  //navigation
  const navigation = useNavigation();
  const popAction = StackActions.pop();

  //callbacks
  const _onAddMissingPet = () => console.log('adding');

  const _onBack = () => navigation.dispatch(popAction);

  return (
    <AddMissingPetView onAddMissingPet={_onAddMissingPet} onBack={_onBack} />
  );
};

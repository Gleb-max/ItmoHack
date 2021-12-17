import React from 'react';

//views
import {AddPetView} from './AddPet.view';

//types
type AddPetScreenProps = {};

export const AddPetScreen: React.FC<AddPetScreenProps> = ({}) => {
  //callbacks
  const _onAddPet = () => console.log('adding');

  return <AddPetView onAddPet={_onAddPet} />;
};

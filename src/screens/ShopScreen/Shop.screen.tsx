import React from 'react';

//views
import {ShopView} from './Shop.view';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {VeterinarClinic} from 'library/types';

type ShopScreenProps = {};

export const ShopScreen: React.FC<ShopScreenProps> = ({}) => {
  return <ShopView />;
};

import React from 'react';

//views
import {RatingsView} from './Ratings.view';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {VeterinarClinic} from 'library/types';

type RatingsScreenProps = {};

export const RatingsScreen: React.FC<RatingsScreenProps> = ({}) => {
  return <RatingsView />;
};

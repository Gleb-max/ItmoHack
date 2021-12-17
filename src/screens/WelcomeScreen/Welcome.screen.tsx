import React from 'react';

//redux
import {store} from 'redux/store';

//actions
import {welcomeComplete} from 'redux/actions';

//views
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {WelcomeView, AppFeaturesItem} from './Welcome.view';

//types
type WelcomeScreenProps = {};

import image1 from '@assets/images/appFeatures/1/image.jpg';
import image2 from '@assets/images/appFeatures/2/image.jpg';
import image3 from '@assets/images/appFeatures/3/image.jpg';
import image4 from '@assets/images/appFeatures/4/image.jpg';

//constants
const appFeaturesInfo: AppFeaturesItem[] = [
  {
    image: image1,
    content: 'Любое достижение достойно внимания!',
  },
  {
    image: image2,
    content: 'Регистрируй свои достижения',
  },
  {
    image: image3,
    content: 'Получай игровые баллы',
  },
  {
    image: image4,
    content: 'Побеждай в битве факультетов',
  },
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({}) => {
  return (
    <WelcomeView
      appFeaturesScreens={appFeaturesInfo}
      onWelcomeComplete={() => store.dispatch(welcomeComplete())}
    />
  );
};

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

import image1 from '@assets/images/appFeatures/1/image.png';
import image2 from '@assets/images/appFeatures/2/image.png';
import image3 from '@assets/images/appFeatures/3/image.png';
import image4 from '@assets/images/appFeatures/4/image.png';

//constants
const appFeaturesInfo: AppFeaturesItem[] = [
  {
    image: image1,
    content: 'Счастлив питомец, счастливы вы!',
  },
  {
    image: image2,
    content: 'Вся информация о вашем друге в одном месте',
  },
  {
    image: image3,
    content: 'Быстрая связь с ветеринаром и поиск ветклиник',
  },
  {
    image: image4,
    content: 'Составление рациона и советы по подбору корма',
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

import React from 'react';

//views
import {MedicineView} from './Medicine.view';

//types
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {VeterinarClinic} from 'library/types';

const clinics: VeterinarClinic.Info[] = [
  {
    name: '“Ветдоктор”',
    address: 'ул. Московская 23',
    phone: '+ 7 (912) 23 56 123',
    rating: '4,82',
    image:
      'https://dl.dropboxusercontent.com/s/afyxogi56sdpool/%D0%B2%D0%B5%D1%82%D0%B4%D0%BE%D0%BA%D1%82%D0%BE%D1%80.png',
    coordinate: {
      latitude: 56.838658742149775,
      longitude: 60.58117549887134,
    },
  },
  {
    name: '“Доктор Айболит”',
    address: 'ул. Попова 56',
    phone: '+ 7 (922) 13 57 423',
    rating: '4,82',
    image:
      'https://dl.dropboxusercontent.com/s/6p5fsgjyahqckrz/logo_new%201.png',
    coordinate: {
      latitude: 56.833868083240915,
      longitude: 60.579792012362596,
    },
  },
  {
    name: '“Инвета”',
    address: 'ул. Радищева 33',
    phone: '+ 7 (343) 12 34 567',
    rating: '4,82',
    image: 'https://dl.dropboxusercontent.com/s/isabdacd180876w/logo_3%201.png',
    coordinate: {
      latitude: 56.82928607313717,
      longitude: 60.59044922770716,
    },
  },
];

type MedicineScreenProps = {};

export const MedicineScreen: React.FC<MedicineScreenProps> = ({}) => {
  return <MedicineView clinics={clinics} />;
};

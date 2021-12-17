import React from 'react';

//redux
import {store} from 'redux/store';

//actions
import {logout} from 'redux/actions';

//views
import {ProfileView} from './Profile.view';

//types
type ProfileScreenProps = {};

//constants
const userData = {
  name: 'Мелания',
  surname: 'Д.',
  photo: 'https://dl.dropboxusercontent.com/s/9tn5z54d72m1egr/Ellipse%2016.png',
};

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  //callbacks
  const _onLogout = () => store.dispatch(logout());

  const _onAccount = () => console.log('account');

  return (
    <ProfileView
      userData={userData}
      onLogout={_onLogout}
      onAccount={_onAccount}
    />
  );
};

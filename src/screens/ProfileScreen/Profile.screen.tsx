import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

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
  photo: '',
};

export const ProfileScreen: React.FC<ProfileScreenProps> = ({}) => {
  //navigation
	const navigation = useNavigation();

	//callbacks
	const _onAchievements = React.useCallback(() => {
		navigation.navigate('achievements');
	}, [navigation]);

  const _onNotification = React.useCallback(() => {
		navigation.navigate('notifications');
	}, [navigation]);

  const _onLogout = () => store.dispatch(logout());

  const [_profilePhoto, _setProfilePhoto] = React.useState<string>('https://dl.dropboxusercontent.com/s/9tn5z54d72m1egr/Ellipse%2016.png');

  const setProfilePhoto = (val: string) => {
    _setProfilePhoto(val);
    userData.photo = val;
  }

  userData.photo = _profilePhoto;

  return (
    <ProfileView
      userData={userData}
      onLogout={_onLogout}
      onAchievements={_onAchievements}
      setProfilePhoto={setProfilePhoto}
      onNotification={_onNotification}
    />
  );
};

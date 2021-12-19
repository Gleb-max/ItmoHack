import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//redux
import {store} from 'redux/store';

//actions
import {logout} from 'redux/actions';

//views
import {ProfileView} from './Profile.view';
import { connect } from 'react-redux';

//types
type ProfileScreenProps = {
  token?: string;
  userData?: {
    id: string;
    isuid: string;
    name: string;
    photo: string;
    role: string;
  };
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
};

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  token = '',
  userData = {
    id: '',
    isuid: '',
    name: '',
    photo: '',
    role: '',
  },
  isLoading = false, 
  isError = false, 
  errorMessage = ''
}) => {
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

  const [_profilePhoto, _setProfilePhoto] = React.useState<string>('https://avatanplus.com/files/resources/mid/5c8bc5ef96f7b16981fd3002.png');

  const setProfilePhoto = (val: string) => {
    _setProfilePhoto(val);
    // userData.photo = val;
  }
  
  userData.photo = _profilePhoto;

  return (
    <ProfileView
      token={token}
      userData={userData}
      onLogout={_onLogout}
      onAchievements={_onAchievements}
      setProfilePhoto={setProfilePhoto}
      onNotification={_onNotification}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    token: state.authReducer.authData.token || '',
    userData: state.authReducer.authData.userData || {name: '', photo: ''},
    isLoading: state.loadingReducer.isLoading || false,
    isError: state.errorReducer.isError || false,
    errorMessage: state.errorReducer.errorMessage || '',
  };
};

export default connect(mapStateToProps)(ProfileScreen);

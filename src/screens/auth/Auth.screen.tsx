import React from 'react';

//redux
import {connect} from 'react-redux';
import {store} from 'redux/store';

//actions
import {login, register, restore, hideError, showError} from 'redux/actions';

//views
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {AuthView, AuthItem} from './Auth.view';

//types
type AuthScreenProps = {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage: string;
};

//images
import welcomeImage from '@assets/images/auth/welcome/image.png';
import loginImage from '@assets/images/auth/login/image.png';
import registerImage from '@assets/images/auth/register/image.png';
// import restore from '@assets/images/auth/restore/image.png';

//constants
const authInfo: AuthItem[] = [
  {
    type: 'welcome',
    image: welcomeImage,
  },
  {
    type: 'login',
    image: loginImage,
  },
  {
    type: 'register',
    image: registerImage,
  },
  {
    type: 'restore',
    image: registerImage,
  },
];

//values
let currentIndex = 0;

const AuthScreen: React.FC<AuthScreenProps> = ({
  isLoading = false,
  isError = false,
  errorMessage = '',
}) => {
  console.log(isLoading);
  //state
  const [_activeIndex, _setActiveIndex] = React.useState(currentIndex);

  //callbacks
  const setActiveIndex = (index: number) => {
    currentIndex = index;
    _setActiveIndex(currentIndex);
  };

  return (
    <AuthView
      authScreens={authInfo}
      activeIndex={_activeIndex}
      setActiveIndex={setActiveIndex}
      login={(data: {}) => store.dispatch(login(data))}
      register={(data: {}) => store.dispatch(register(data))}
      restore={(data: {}) => store.dispatch(restore(data))}
      isLoading={isLoading}
      isError={isError}
      errorMessage={errorMessage}
      hideError={() => store.dispatch(hideError())}
      showError={(data: {}) => store.dispatch(showError(data))}
    />
  );
};

const mapStateToProps = (state: any) => {
  const authData = state.authReducer.authData;
  return {
    isLoading: state.loadingReducer.isAuthLoading || false,
    isError: authData.isError || false,
    errorMessage: authData.errorMessage || '',
  };
};

export default connect(mapStateToProps)(AuthScreen);

import React from 'react';

//redux
import {connect} from 'react-redux';
import {store} from 'redux/store';

//actions
import {login, register, restore, error, errorCancel} from 'redux/actions';

//views
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {AuthView, AuthItem} from './Auth.view';

//types
type AuthScreenProps = {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage: string;
  faculties: {label: string, value: string} [];
};

//images
import welcomeImage from '@assets/images/auth/welcome/image.jpg';
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

const AuthScreen: React.FC<AuthScreenProps> = ({
  isLoading = false,
  isError = false,
  errorMessage = '',
  faculties = [],
}) => {
  //state
  const [_activeIndex, _setActiveIndex] = React.useState(0);

  //callbacks
  const setActiveIndex = (index: number) => {
    _setActiveIndex(index);
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
      faculties={faculties}
      hideError={() => store.dispatch(errorCancel())}
      showError={(data: {}) => store.dispatch(error(data))}
    />
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.loadingReducer.isLoading || false,
    isError: state.errorReducer.isError || false,
    errorMessage: state.errorReducer.errorMessage || '',
    faculties: state.facultiesReducer.faculties || [],
  };
};

export default connect(mapStateToProps)(AuthScreen);

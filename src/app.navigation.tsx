import React from 'react';
import {LogBox} from 'react-native';

//redux
import {connect} from 'react-redux';

//navigation
import {enableScreens} from 'react-native-screens';

//navigators
import {WelcomeNavigation} from 'screens/WelcomeScreen';
import {AuthNavigation} from 'screens/auth';
import {MainNavigation} from 'screens/main';

//types
type AppNavigationProps = {
  isLoggedIn?: boolean;
  isWelcomeComplete?: boolean;
};

//native-powered screen containers
//run before any navigation stacks render
enableScreens();

const AppNavigation: React.FC<AppNavigationProps> = ({
  isLoggedIn = false,
  isWelcomeComplete = false,
}) => {
  React.useEffect(() => {
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
  }, []);

  if (!isWelcomeComplete) {
    return <WelcomeNavigation />;
  }
  if (!isLoggedIn) {
    return <AuthNavigation />;
  }
  return <MainNavigation />;
};

const mapStateToProps = (state: any) => {
  console.log(state);
  const authData = state.authReducer.authData;
  return {
    isLoggedIn: authData.isLoggedIn,
    isWelcomeComplete: state.welcomeReducer.isWelcomeComplete,
  };
};

export default connect(mapStateToProps, null)(AppNavigation);

import {combineReducers} from 'redux';

import authReducer from './auth.reducer';
import userReducer from './user.reducer';
import welcomeReducer from './welcome.reducer';
import searchReducer from './search.reducer';
import loadingReducer from './loading.reducer';
import errorReducer from './error.reducer';

const reducers = {
  authReducer,
  userReducer,
  welcomeReducer,
  searchReducer,
  loadingReducer,
  errorReducer,
};

const appReducer = combineReducers(reducers);

export const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGGED_OUT_SUCCESS') {
    state = {welcomeReducer: {isWelcomeComplete: true}};
  }

  return appReducer(state, action);
};

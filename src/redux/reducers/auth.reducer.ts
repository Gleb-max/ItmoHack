import {combineReducers} from 'redux';

const authData = (state = {}, action: any) => {
  switch (action.type) {
    case 'AUTH_USER_SUCCESS':
      return {
        token: action.token,
        userData: action.userData,
        isLoggedIn: true,
      };
    case 'AUTH_USER_FAIL':
      return {
        token: null,
        isLoggedIn: false,
      };
    case 'AUTH_USER_ERROR':
      return {
        errorMessage: action.errorMessage,
        isError: true,
        token: null,
        isLoggedIn: false,
      };
    case 'AUTH_USER_ERROR_HIDE':
      return {
        isError: false,
        token: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

const register = (state = {}, action: any) => {
  switch (action.type) {
    case 'CREATE_USER_LOADING':
      return {
        isLoading: true,
        isError: false,
        isSuccess: false,
        errors: null,
      };

    case 'CREATE_USER_SUCCESS':
      return {
        isLoading: false,
        isError: false,
        isSuccess: true,
        errors: null,
      };

    case 'CREATE_USER_FAIL':
      return {
        isLoading: false,
        isError: true,
        isSuccess: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

const login = (state = {}, action: any) => {
  switch (action.type) {
    case 'LOGIN_USER_LOADING':
      return {
        isLoading: true,
        isError: false,
        isSuccess: false,
        errors: null,
      };

    case 'LOGIN_USER_SUCCESS':
      return {
        isLoading: false,
        isError: false,
        isSuccess: true,
        errors: null,
      };

    case 'LOGIN_USER_FAIL':
      return {
        isLoading: false,
        isError: true,
        isSuccess: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default combineReducers({
  register,
  login,
  authData,
});

import API from '../../api/server';

export const register = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'AUTH_LOADING',
    });
    const formData = new FormData();
    formData.append('name', payload.name);
    formData.append('nick', payload.nickName);
    formData.append('email', payload.email);
    formData.append('password', payload.password);

    API.post('api/auth/register', formData, {})
      .then((response) => {
        console.log(response.data.token);
        dispatch({
          type: 'AUTH_LOADING_CANCEL',
        });
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: response.data.token,
        });
      })
      .catch((error) => {
        let message = 'Проверьте подключение к интернету';

        console.log(error.response.data);
        switch (error.response.data.error) {
          case 'Required fields not filling':
            message = 'Не все поля заполнены';
            break;
          case 'Email exist':
            message = 'К этому почтовому адресу уже привязан аккаунт';
            break;
          case 'Nick exist':
            message = 'Этот ник уже занят';
            break;
          default:
            message = 'Неизвестная ошибка';
            break;
        }
        dispatch({
          type: 'AUTH_LOADING_CANCEL',
        });
        dispatch({
          type: 'AUTH_USER_ERROR',
          errorMessage: message,
        });
      });
  };
};

export const login = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'AUTH_LOADING',
    });
    const formData = new FormData();
    formData.append('login', payload.nickNameOrEmail);
    formData.append('password', payload.password);

    API.post('api/auth/token/', formData, {})
      .then((response) => {
        console.log(response.data.token);
        dispatch({
          type: 'AUTH_LOADING_CANCEL',
        });
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: response.data.token,
        });
      })
      .catch((error) => {
        let message = 'Проверьте подключение к интернету';

        console.log(error);
        console.log(error.response.data);
        switch (error.response.data.error) {
          case 'Required fields not filling':
            message = 'Не все поля заполнены';
            break;
          case 'User not found':
            message = 'Пользователь не найден';
            break;
          case 'Incorrect password':
            message = 'Неверный пароль';
            break;
          default:
            message = 'Неизвестная ошибка';
            break;
        }
        dispatch({
          type: 'AUTH_LOADING_CANCEL',
        });
        dispatch({
          type: 'AUTH_USER_ERROR',
          errorMessage: message,
        });
      });
  };
};

export const restore = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'AUTH_LOADING',
    });
    const formData = new FormData();
    formData.append('email', payload.email);

    API.post('client/restore/', formData, {})
      .then((response) => {
        console.log(response.data);
        dispatch({
          type: 'AUTH_LOADING_CANCEL',
        });
      })
      .catch((error) => {
        let message = 'Проверьте подключение к интернету';

        console.log(error);
        switch (error.response.data.error) {
          default:
            message = 'Неизвестная ошибка';
            break;
        }
        dispatch({
          type: 'AUTH_LOADING_CANCEL',
        });
        dispatch({
          type: 'AUTH_USER_ERROR',
          errorMessage: message,
        });
      });
  };
};

export const logout = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'USER_LOGGED_OUT_SUCCESS',
    });
  };
};

export const hideError = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'AUTH_USER_ERROR_HIDE',
    });
  };
};

export const showError = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'AUTH_USER_ERROR',
      errorMessage: payload.message,
    });
  };
};

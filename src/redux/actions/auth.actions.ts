import API from '../../api/server';

export const register = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'LOADING',
    });
    const formData = new FormData();
    formData.append('isuId', payload.isuId);
    formData.append('name', payload.name);
    formData.append('facultyId', payload.faculty);
    formData.append('password', payload.password);

    API.post('api/User', formData, {})
      .then((response) => {
        console.log(response.data);

        //todo: auto login
        dispatch({
          type: 'LOADING_CANCEL',
        });
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: response.data.token,
        });
      })
      .catch((error) => {
        let message = 'Проверьте подключение к интернету';

        console.log(error.response.data);
        switch (error.response.data.authData) {
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
          type: 'LOADING_CANCEL',
        });
        dispatch({
          type: 'ERROR',
          errorMessage: message,
        });
      });
  };
};

export const login = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'LOADING',
    });
    const params = {
      ISUId: payload.isuId,
      Password: payload.password,
    }

    API.get('api/auth/token/', {params: params})
      .then((response) => {
        //console.log(response.data.token);
        dispatch({
          type: 'LOADING_CANCEL',
        });
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: response.data.token,
        });
      })
      .catch((error) => {
        console.log(error.response);
        let message;

        if (error.response == undefined) {
          message = 'Проверьте подключение к интернету';
        }
        else if (error.response && error.response.data.Message != undefined) {
          message = error.response.data.Message[0];
        }
        else if (error.response.status == 400) {
          message = 'Не все поля заполнены!';
        }

        dispatch({
          type: 'LOADING_CANCEL',
        });
        dispatch({
          type: 'ERROR',
          errorMessage: message,
        });
      });
  };
};

export const restore = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'LOADING',
    });
    const formData = new FormData();
    formData.append('email', payload.email);

    API.post('client/restore/', formData, {})
      .then((response) => {
        dispatch({
          type: 'LOADING_CANCEL',
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
          type: 'LOADING_CANCEL',
        });
        dispatch({
          type: 'ERROR',
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

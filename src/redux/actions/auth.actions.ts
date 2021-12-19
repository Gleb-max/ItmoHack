import { store } from 'redux/store';
import API from '../../api/server';

export const register = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'LOADING',
    });
    // const formData = new FormData();
    // formData.append('isuId', payload.isuId);
    // formData.append('name', payload.name);
    // formData.append('facultyId', payload.faculty);
    // formData.append('password', payload.password);

    const body = {
      isuId: payload.isuId,
      name: payload.name,
      facultyId: payload.faculty,
      password: payload.password,
    }

    API.post('api/User', body, {headers: {'Content-Type': 'application/json'}})
      .then((response) => {
        store.dispatch(login({
          isuId: payload.isuId,
          password: payload.password,
        }));
      })
      .catch((error) => {
        console.log(error.response.data);
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
        const responseData = response.data;

        dispatch({
          type: 'LOADING_CANCEL',
        });
        dispatch({
          type: 'AUTH_USER_SUCCESS',
          token: responseData.token,
          userData: responseData.data,
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

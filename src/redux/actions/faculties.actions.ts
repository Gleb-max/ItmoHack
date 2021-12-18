import { Alert } from 'react-native';
import API from '../../api/server';

export const loadFaculties = (payload: any) => {
  return async (dispatch: any) => {
    API.get('api/faculty/', {})
      .then((response) => {
        dispatch({
          type: 'LOADED',
          faculties: response.data.faculties.map((elem: any) => {
            return {label: elem.name, value: elem.id}
          }),
        });
      })
      .catch((error) => {
        // Alert.alert(
        //   "Не удалось загрузить факультеты",
        //   "Проверьте интернет-соединение и попробуйте снова",
        //   [
        //     {
        //       text: "Повторить",
        //       onPress: () => loadFaculties(payload),
        //       style: "default"
        //     },
        //   ],
        //   {
        //     cancelable: false,
        //   }
        // );
      });
  };
};

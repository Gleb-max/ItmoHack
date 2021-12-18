export const error = (payload: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: 'ERROR',
      errorMessage: payload.message,
    });
  };
};

export const errorCancel = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'ERROR_CANCEL',
    });
  };
};

export const loading = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'LOADING',
    });
  };
};

export const loadingCancel = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'LOADING_CANCEL',
    });
  };
};

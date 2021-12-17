export const authLoading = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'AUTH_LOADING',
    });
  };
};

export const authLoadingCancel = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'AUTH_LOADING_CANCEL',
    });
  };
};

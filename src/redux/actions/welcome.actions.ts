export const welcomeComplete = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'WELCOME_COMPLETE',
    });
  };
};

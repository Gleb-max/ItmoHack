const authLoading = (state = {}, action: any) => {
  switch (action.type) {
    case 'AUTH_LOADING':
      return {
        isAuthLoading: true,
      };
    case 'AUTH_LOADING_CANCEL':
      return {
        isAuthLoading: false,
      };
    default:
      return state;
  }
};

export default authLoading;

const loading = (state = {}, action: any) => {
  switch (action.type) {
    case 'LOADING':
      return {
        isAuthLoading: true,
      };
    case 'LOADING_CANCEL':
      return {
        isAuthLoading: false,
      };
    default:
      return state;
  }
};

export default loading;

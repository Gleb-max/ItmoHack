const loading = (state = {}, action: any) => {
  switch (action.type) {
    case 'LOADING':
      return {
        isLoading: true,
      };
    case 'LOADING_CANCEL':
      return {
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loading;

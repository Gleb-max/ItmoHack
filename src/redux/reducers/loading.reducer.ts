const loading = (state = {}, action: any) => {
  switch (action.type) {
    case 'LOADING':
      return {
        isAuthLoading: true,
        isRatingLoading: true,
        isProductsLoading: true,
      };
    case 'LOADING_CANCEL':
      return {
        isAuthLoading: false,
        isRatingLoading: false,
        isProductsLoading: false,
      };
    default:
      return state;
  }
};

export default loading;

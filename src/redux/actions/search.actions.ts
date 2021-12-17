export const searchBegan = () => {
  return async (dispatch: any) => {
    dispatch({
      type: 'SEARCH_BEGAN',
    });
  };
};

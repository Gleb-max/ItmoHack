const searchBegan = (state = {}, action: any) => {
  switch (action.type) {
    case 'SEARCH_BEGAN':
      return {
        isSearchBegan: true,
      };
    default:
      return state;
  }
};

export default searchBegan;

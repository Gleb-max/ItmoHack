const loadFaculties = (state = {}, action: any) => {
  switch (action.type) {
    case 'LOADED':
      return {
        faculties: action.faculties,
      };
    default:
      return state;
  }
};

export default loadFaculties;

const error = (state = {}, action: any) => {
  console.log(action);
  switch (action.type) {
    case 'ERROR':
      return {
        isError: true,
        errorMessage: action.errorMessage,
      };
    case 'ERROR_CANCEL':
      return {
        isError: false,
      };
    default:
      return state;
  }
};

export default error;

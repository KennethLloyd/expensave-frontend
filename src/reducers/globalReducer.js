export default (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'CLEAR_TOKEN':
      return {
        ...state,
        token: null,
      };
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'FINISH_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        errorMessage: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        errorMessage: null,
      };

    default:
      return state;
  }
};

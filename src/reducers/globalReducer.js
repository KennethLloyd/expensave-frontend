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
    case 'GET_CATEGORIES':
      return {
        ...state,
        categories: action.payload,
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
    case 'SET_ALERT':
      return {
        ...state,
        alertType: action.payload.alertType,
        alertMessage: action.payload.alertMessage,
        alertLocation: action.payload.alertLocation,
      };
    case 'CLEAR_ALERT':
      return {
        ...state,
        alertType: null,
        alertMessage: null,
        alertLocation: null,
      };

    default:
      return state;
  }
};

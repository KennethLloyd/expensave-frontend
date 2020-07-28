export default (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
    case 'SIGN_UP':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};

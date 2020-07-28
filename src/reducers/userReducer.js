export default (state, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: action.payload,
      };
    case 'SIGN_UP':
      return {
        ...state,
        info: action.payload.user,
        token: action.payload.token,
      };
    case 'LOG_OUT':
      return {
        ...state,
        info: {},
        token: null,
      };

    default:
      return state;
  }
};

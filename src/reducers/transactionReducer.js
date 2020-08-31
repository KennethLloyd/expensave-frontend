export default (state, action) => {
  switch (action.type) {
    case 'CREATE_TRANSACTION':
      return {
        ...state,
        transactions: action.payload,
      };

    default:
      return state;
  }
};

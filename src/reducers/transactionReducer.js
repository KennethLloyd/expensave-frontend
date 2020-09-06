export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_DATE_FILTER':
      return {
        ...state,
        dateFilter: action.payload,
      };

    case 'CREATE_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case 'GET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };

    default:
      return state;
  }
};

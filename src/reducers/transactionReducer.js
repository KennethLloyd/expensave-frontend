export default (state, action) => {
  switch (action.type) {
    case 'CHANGE_DATE_FILTER':
      return {
        ...state,
        dateFilter: action.payload,
      };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case 'GET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload.transactions,
        monthIncome: action.payload.monthIncome,
        monthExpenses: action.payload.monthExpenses,
      };

    default:
      return state;
  }
};

// import React, { useReducer, createContext } from 'react';
// import userReducer from '../reducers/userReducer';
// import api from '../apis/api';
// // import history from '../history';

// // Initial state
// const initialState = {
//   user: null
// };

// // Create Context Object
// export const UserContext = createContext();

// // Provider component
// export const UserContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, initialState);

//   // Actions

//   const logIn = async (userInfo) => {
//     try {
//       dispatch({ type: START_LOADING });

//       const response = await api.post('/users/logIn', formValues);

//       dispatch({ type: FINISH_LOADING });

//       dispatch({
//         type: LOG_IN,
//         payload: response.data,
//       });

//       dispatch(clearErrors());

//       history.push('/');
//     } catch (e) {
//       dispatch({ type: FINISH_LOADING });
//       dispatch(setError(e.response.data.error));
//       history.push('/login');
//     }
//   };

//   export const signUp = (formValues) => async (dispatch) => {
//     try {
//       dispatch({ type: START_LOADING });

//       const response = await api.post('/users', formValues);

//       dispatch({ type: FINISH_LOADING });

//       dispatch({
//         type: SIGN_UP,
//         payload: response.data,
//       });

//       dispatch(clearErrors());

//       history.push('/');
//     } catch (e) {
//       dispatch({ type: FINISH_LOADING });
//       dispatch(setError(e.response.data.error));
//       history.push('/signup');
//     }
//   };

//   export const logOut = () => async (dispatch, getState) => {
//     try {
//       dispatch({ type: START_LOADING });

//       await api.post('/users/logout', null, {
//         headers: { Authorization: `Bearer ${getState().currentUser.token}` },
//       });

//       dispatch({ type: FINISH_LOADING });

//       dispatch({
//         type: LOG_OUT,
//       });

//       dispatch(clearErrors());

//       history.push('/login');
//     } catch (e) {
//       dispatch({ type: FINISH_LOADING });
//       dispatch(setError(e.response.data.error));
//       history.push('/');
//     }
//   };

//   const deleteTransaction = (id) {
//     dispatch({
//       type: 'DELETE_TRANSACTION',
//       payload: id,
//     });
//   }

//   function addTransaction(transaction) {
//     dispatch({
//       type: 'ADD_TRANSACTION',
//       payload: transaction,
//     });
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         transactions: state.transactions,
//         deleteTransaction,
//         addTransaction,
//       }}
//     >
//       {children}
//     </GlobalContext.Provider>
//   );
// };

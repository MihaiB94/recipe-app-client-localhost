import { createContext, useEffect, useReducer } from 'react';
import LoginReducer from './Reducer';

const INITIAL_STATE = {
   user: JSON.parse(localStorage.getItem('user') || null),
   isFetching: false,
   error: null,
   errorMessage: null // New property for error message
};

export const ContextAPI = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);

   useEffect(() => {
      localStorage.setItem('user', JSON.stringify(state.user));
   }, [state.user]);

   return (
      <ContextAPI.Provider
         value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            errorMessage: state.errorMessage, // Add errorMessage to the value object

            dispatch
         }}
      >
         {children}
      </ContextAPI.Provider>
   );
};

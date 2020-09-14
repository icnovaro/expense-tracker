import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//InitialState

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', ammount: -20},
        { id: 2, text: 'Salary', ammount: 300},
        { id: 3, text: 'Book', ammount: -10},
        { id: 4, text: 'Camera', ammount: 150}
    ]
};

// Create Context

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) =>  {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(<GlobalContext.Provider value={{transactions: state.transactions}}>
       {children}           
    </GlobalContext.Provider>);
};


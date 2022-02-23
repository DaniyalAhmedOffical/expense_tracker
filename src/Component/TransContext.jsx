import React, { createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

const initialTranscations = [
  // {amount: 550, desc: "Cash"},
  // {amount: -40, desc: "cold drink"},
  // {amount: -200, desc: "deposit"},
  // {amount: -200, desc: "Bill"}
];

export const TransactionContext = createContext(initialTranscations);

export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTranscations);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }
  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

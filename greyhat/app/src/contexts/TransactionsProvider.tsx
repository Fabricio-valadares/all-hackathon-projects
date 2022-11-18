import React, { createContext, useState } from "react";

type Props = {
  children: JSX.Element;
};

const defaultTransactions = [
    { title: 'Deposito 1', value: 1000 },
    { title: 'Deposito 2', value: 250 },
    { title: 'Compra 1', value: -500 },
    { title: 'Compra 2', value: -248 },
    { title: 'Compra 3', value: -248 },
    { title: 'Deposito 3', value: 250 },
    { title: 'Deposito 4', value: 250 },
    { title: 'Compra 4', value: -248 },
  ]

const defaultObject = {
  transactions: defaultTransactions,
  addTransaction: (transaction) => null
}

export const TransactionsContext = createContext(defaultObject);

export const TransactionsProvider: React.FC<Props> = ( { children }) => {
  const [transactions, setTransactions] = useState(defaultTransactions)

  const addTransaction = (transaction): null => {
    console.log('TRANSACTION: ', transaction)
    setTransactions([...transactions, transaction])
  }

  return (
    <TransactionsContext.Provider value={{ transactions: transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

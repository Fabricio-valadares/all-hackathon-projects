import { useContext } from "react";

import { TransactionsContext } from "../contexts/TransactionsProvider";

export const useTransactions = () => useContext(TransactionsContext);

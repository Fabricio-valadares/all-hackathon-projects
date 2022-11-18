import { Transaction, TransactionTypes } from "@prisma/client";

export const MockTransaction = (fields?: Partial<Transaction>): Transaction => {
  const now = new Date();
  return {
    cod: 1,
    created_at: now,
    updated_at: now,
    currency: "BRL",
    description: "Comprei so o necessario",
    title: "Compras do mẽs",
    type: TransactionTypes.OUTBOUND,
    userId: 123,
    value: 3000,
    ...fields,
  };
};

import { Transaction, TransactionTypes } from "@prisma/client";

const TITLES_SUGGESTIONS = ["Salario", "Aluguel", "Agua", "Luz"];
export const MakeTransactions = (
  userId: number,
  minute_interval: number,
  total: number,
) => {
  const initial_date = new Date("2022-10-01");

  const transactions: Omit<Transaction, "cod" | "updated_at">[] = [];

  for (let i = 0; i < total; i++) {
    initial_date.setMinutes(initial_date.getMinutes() + minute_interval);
    const created_at = new Date(initial_date);

    const title =
      TITLES_SUGGESTIONS[Math.floor(Math.random() * TITLES_SUGGESTIONS.length)];

    transactions.push({
      title,
      currency: "BRL",
      description: `Descrição para ${title}`,
      type: Math.round(Math.random())
        ? TransactionTypes.INBOUND
        : TransactionTypes.OUTBOUND,
      userId,
      value: Math.floor(Math.random() * 5000) + 10,
      created_at,
    });
  }

  return transactions;
};

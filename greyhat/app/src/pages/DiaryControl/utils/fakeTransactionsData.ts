interface Transaction {
    title: string;
    value: string;
    isExit: boolean;
}

export const dataTransactions: Transaction[] = [
    {
        title: "Pizza niver em familia",
        value: "R$55,90",
        isExit: true,
    },
    {
        title: "Feijoada",
        value: "R$22,00",
        isExit: true,
    },
    {
        title: "Rifa beneficente",
        value: "R$5,00",
        isExit: true,
    },
    {
        title: "Pix Alessandra",
        value: "R$140,00",
        isExit: false,
    },
    {
        title: "Emprestimo Bancário",
        value: "R$1400,00",
        isExit: false,
    },
    {
        title: "Pix Marcos",
        value: "R$10,00",
        isExit: false,
    },
    {
        title: "Aposta",
        value: "R$100,00",
        isExit: false,
    },
];

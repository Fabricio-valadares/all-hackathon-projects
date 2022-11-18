import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";

import { Transaction } from "../../pages/DiaryControl/interfaces/Transaction";

export const CardTransaction = (data: Transaction) => (
    <View
        style={[
            styles.cardTransaction,
            { borderLeftColor: data.isExit ? "#e74c3c" : "#27ae60" },
        ]}
    >
        <View style={styles.cardTitleArea}>
            <Text style={styles.cardTitle}>{data.title}</Text>
        </View>
        <View style={styles.cardValueArea}>
            <Text style={styles.labelValue}>Valor:</Text>
            <Text style={styles.cardValue}>{data.value}</Text>
        </View>
    </View>
);

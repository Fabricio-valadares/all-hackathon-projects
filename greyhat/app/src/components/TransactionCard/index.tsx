import React from "react";
import { View, Text } from "react-native";
import { Feather } from '@expo/vector-icons';
import styles from './styles'
import { theme } from "../../global/theme";

type Props = {
  value: number
  title: string
}

export const TransactionCard: React.FC<Props> = ({ value, title }) => {
  const isTransactionPositive = value > 0
  const color = isTransactionPositive ? theme.okColor : theme.notOkColor
  const sign = isTransactionPositive ? '+' : ''

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Feather name="arrow-up-right" size={24} color={color} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.title}>R${sign}{value}</Text>
    </View>
  )
}

import React, { useContext, useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles'
import { theme } from "../../global/theme";
import { DonutChart } from "../../components/DonutChart";
import { TransactionCard } from "../../components/TransactionCard";
import { CircularButton } from "../../components/CircularButton";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { useTransactions } from "../../hooks/useTransactions";

const weekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado"
]

export const HomePage = ({ navigation }) => {
  const today = weekDays[new Date().getDay()]
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  // const [transactions, setTransactions] = useState([])
  const { transactions }  = useTransactions()

  const handleInputTransactionGraph = () => {
    navigation.navigate('Diary', { isOutputTransaction: false })
  }

  const handleOutpoutTransactionGraph = () => {
    navigation.navigate('Diary', { isOutputTransaction: true })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userContainer}>
          <Text style={styles.title}>Bem vindo(a) Carlos Ganso!</Text>
          <FontAwesome5 name="user-circle" size={30} color="white" />
        </View>
        <View style={styles.calendarContainer}>
          <View>
            <Text style={styles.title}>Hoje é {today}</Text>
            <Text style={styles.dateField}>1 Nov 2022</Text>
          </View>
          <TouchableOpacity onPress={handleInputTransactionGraph}>
            <AntDesign name="calendar" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.donutChartsContainer}>
          <TouchableOpacity onPress={handleInputTransactionGraph}>
            <DonutChart percentage={60} title='Saldo' price={100} />
          </TouchableOpacity>

          <View style={{ marginHorizontal: 10 }}></View>

          <TouchableOpacity onPress={handleOutpoutTransactionGraph}>
            <DonutChart percentage={80} title='Gastos' price={2500} color={theme.darkOrange} />
          </TouchableOpacity>
        </View>
        <Text style={styles.historicTitle}>Histórico</Text>
        <FlatList
          data={transactions}
          keyExtractor={item => item.title}
          renderItem={({ item }) => <TransactionCard
            key={item.title}
            title={item.title}
            value={item.value}
          />}
        />
      </View>

      <NewTransactionModal
        isVisible={modalVisible}
        setIsVisible={setModalVisible}
      />

      <View style={styles.circularButtonContainer}>
        <CircularButton onPress={() => setModalVisible(true)} />
      </View>
    </View>
  )
}

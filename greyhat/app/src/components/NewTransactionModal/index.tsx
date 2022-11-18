import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import Modal from "react-native-modal";
import styles from './styles'
import { theme } from "../../global/theme";
import { Picker } from '@react-native-picker/picker';
import { useTransactions } from "../../hooks/useTransactions";

const coins = [
  "Real",
  "Euro",
  "Dolar",
]

const transactionTypes = [
  "Saldo",
  "Gasto"
]

type Props = {
  isVisible?: boolean
  setIsVisible: (value: boolean) => void
}
export const NewTransactionModal: React.FC<Props> = ({ isVisible, setIsVisible }) => {
  const [type, setType] = useState<string>(transactionTypes[0]);
  const [coin, setCoin] = useState<string>(coins[0]);
  const [title, setTitle] = useState<string>('')
  const [value, setValue] = useState<number>(0)
  const { addTransaction } = useTransactions()

  const handleAddTransaction = () => {
    setIsVisible(false)
    addTransaction({ title: 'TESTE', value: 100 })
  }

  return (
    <Modal
      isVisible={isVisible}
      backdropColor='rgba(0,0,0,0.0)'
      animationIn='bounceIn'
    >
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Transação</Text>

        <Text style={styles.label}>Título</Text>
        <View style={styles.infoContainer}>
          <TextInput
            placeholderTextColor={theme.black30Percent}
            style={styles.input}
            placeholder='Digite Aqui'
            onChange={(text) => setTitle(text)}
          />

          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={type}
              dropdownIconColor='#ffff'
              mode='dropdown'
              onValueChange={(itemValue, _) =>
                setType(itemValue)
              }>
              { transactionTypes.map(type => <Picker.Item label={type} value={type} />) }
            </Picker>
          </View>
        </View>

        <Text style={styles.label}>Valor</Text>
        <View style={styles.infoContainer}>
          <TextInput
            placeholderTextColor={theme.black30Percent}
            keyboardType='numeric'
            style={styles.input}
            placeholder='Digite Aqui'
            onChange={(value) => setValue(value)}
          />

          <View style={styles.pickerContainer}>
            <Picker
              style={styles.picker}
              selectedValue={coin}
              mode='dropdown'
              dropdownIconColor='#ffff'
              onValueChange={(itemValue, _) =>
                setCoin(itemValue)
              }>
              { coins.map(coin => <Picker.Item label={coin} value={coin} />) }
            </Picker>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.addButton} onPress={() => setIsVisible(false)} >
            <Text style={styles.label}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleAddTransaction}>
            <Text style={styles.label}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

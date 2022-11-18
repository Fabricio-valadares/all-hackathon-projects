import React from "react";
import { TouchableOpacity } from "react-native";
import styles from './styles'
import { Entypo } from '@expo/vector-icons';

type Props = {
  onPress: (value: any) => void
}

export const CircularButton: React.FC<Props> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Entypo name="plus" size={30} color="#ffff" />
    </TouchableOpacity>
  )
}

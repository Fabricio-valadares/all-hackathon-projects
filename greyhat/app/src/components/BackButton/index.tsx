import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { theme } from "../../global/theme";
import React from "react";

type Props = {
  text: string
  onPress: () => void
}

export const BackButton:React.FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Ionicons name="arrow-back-circle-outline" size={30} color={theme.yellow} />
      <Text style={styles.text}>
        { text }
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center' 
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
    color: theme.yellow
  }
})

import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { theme } from "../../global/theme";
import React from "react";

type Props = {
  text: string
  color?: string
  onPress?: () => void
}

export const ReactangularButton = ({ text, color, onPress }: Props) => {
  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor: color || theme.yellow }]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    width: 145,
    height: 48,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: theme.white
  }
})

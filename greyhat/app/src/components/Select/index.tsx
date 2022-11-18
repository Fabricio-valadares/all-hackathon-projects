import React, { useEffect, useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { ReactangularButton } from "../../components/RectangularButton";
import { theme } from "../../global/theme";
import CofiImg from "../../../assets/cofi_image.svg";
import { BackButton } from "../../components/BackButton";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import styles from "./styles";

interface Props {
  appetizerAction: () => void;
  exitAction: () => void;
  beginWith: "Entrada" | "Saida"
}

export const Select = ({ appetizerAction, exitAction, beginWith }: Props) => {
  const [appetizerButtonColor, setAppetizerButtonColor] = useState("#000");
  const [exitsButtonColor, setExitsButtonColor] = useState("#fff");
  const [selectorPosition, setSelectorPosition] = useState(0);

  const selectPositionX = useSharedValue(0);

  const handleAppetizer = () => {
    selectPositionX.value = withTiming(0, { duration: 500 });
    setAppetizerButtonColor("#000");
    setExitsButtonColor("#fff");

    appetizerAction();
  };

  const handleExits = () => {
    selectPositionX.value = withTiming(125, { duration: 500 });
    setAppetizerButtonColor("#fff");
    setExitsButtonColor("#000");

    exitAction();
  };

  useEffect(() => {
    (beginWith == 'Saida') &&  handleExits()
  }, [])


  const selectStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: selectPositionX.value }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.selector, selectStyle]} />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAppetizer}
        >
          <Text
            style={[
              styles.buttonText,
              { color: appetizerButtonColor },
            ]}
          >
            Entradas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonRight]}
          onPress={handleExits}
        >
          <Text
            style={[styles.buttonText, { color: exitsButtonColor }]}
          >
            Saídas
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

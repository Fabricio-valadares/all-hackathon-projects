import React, { useEffect, useState } from "react";
import {
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    FlatList,
} from "react-native";
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
import { Day, getDataCalendary } from "../../utils/calendaryData";
import styles from "./styles";

interface Props {
    dataCalendary: Day[];
    selectedDay: number;
    setSelectedDay: React.Dispatch<React.SetStateAction<number>>;
}

export const CalendarHorizontal = (props: Props) => {
    const Item = (data: Day) => (
        <TouchableOpacity
            onPress={() => props.setSelectedDay(data.date)}
            style={
                data.date === props.selectedDay
                    ? styles.selectedDayItem
                    : styles.dayItem
            }
        >
            <Text
                style={
                    data.date === props.selectedDay
                        ? styles.selectedDayName
                        : styles.dayName
                }
            >
                {data.name}
            </Text>
            <Text
                style={
                    data.date === props.selectedDay
                        ? styles.selectedDayDate
                        : styles.dayDate
                }
            >
                {data.date}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={props.dataCalendary}
                renderItem={({ item }) => Item(item)}
                horizontal
            />
        </View>
    );
};

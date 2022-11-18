import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        width: "100%",
        height: 70,
        paddingBottom: 10,
        backgroundColor: "#363432",
    },
    selectedDayItem: {
        width: 70,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 3,
    },
    selectedDayName: {
        fontSize: 15,
        fontWeight: "300",
        color: "#000",
    },
    selectedDayDate: {
        fontSize: 20,
        fontWeight: "700",
        color: "#000",
    },
    dayItem: {
        width: 70,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",

        //backgroundColor: "363432",
    },
    dayName: {
        fontSize: 15,
        fontWeight: "300",
        color: "#fff",
    },
    dayDate: {
        fontSize: 20,
        fontWeight: "700",
        color: "#fff",
    },
});

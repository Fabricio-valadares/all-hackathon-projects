import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";
import Constants from "expo-constants";
import { ceil } from "react-native-reanimated";

export default StyleSheet.create({
    cardTransaction: {
        width: "100%",
        height: 100,
        borderLeftWidth: 3,
        marginTop: 30,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,

        elevation: 1,
    },
    cardTitleArea: {
        backgroundColor: "#fff",
        width: "100%",
        height: "70%",
        justifyContent: "center",
        paddingLeft: 20,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    cardValueArea: {
        width: "100%",
        height: "30%",
        backgroundColor: "#f5f6fa",
        flexDirection: "row",
        paddingLeft: 20,
        alignItems: "center",
    },
    labelValue: {
        fontSize: 15,
        marginRight: 5,
    },
    cardValue: {
        fontSize: 15,
        fontWeight: "500",
    },
});

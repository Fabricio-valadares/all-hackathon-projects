import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        backgroundColor: "#363432",
        width: "100%",
        maxWidth: 250,
        height: 50,
        borderRadius: 100,
    },
    selector: {
        width: "50%",
        height: "100%",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopRightRadius: 100,
        backgroundColor: "#fff",
        position: "absolute",
    },
    content: {
        width: "100%",
        maxWidth: 250,
        height: 50,
        borderRadius: 100,
        flexDirection: "row",
    },
    button: {
        width: "50%",
        height: "100%",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        //backgroundColor: "red",

        alignItems: "center",
        justifyContent: "center",
    },
    buttonRight: {
        width: "50%",
        height: "100%",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        //backgroundColor: "red",
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "600",
    },
});

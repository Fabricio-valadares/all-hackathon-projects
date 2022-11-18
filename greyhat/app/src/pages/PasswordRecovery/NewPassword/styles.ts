import { StyleSheet } from "react-native";
import { theme } from "../../../global/theme";
import Constants from "expo-constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: 30,
    },
    input: {
        backgroundColor: theme.darkBlue,
        fontSize: 18,
        paddingLeft: 15,
        color: theme.white,
        borderRadius: 5,
        width: 265,
        marginVertical: 10,
        height: 40,
        marginBottom: 15
    },
    login: {
        marginTop: 10,
    },
    label: {
        color: theme.white,
        fontWeight: "bold",
        fontSize: 18,
        alignSelf: "flex-start",
    },
    logo: {
        height: 300,
        width: 300,
    },
    backButtonContainer: {
        position: "absolute",
        top: 61,
        left: 28,
        zIndex: 100,
    },
    textContent: {
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 50,
        marginTop: 50
    },
    textStyle: {
        color: "#ffff",
        fontSize: 18,
        fontWeight: "bold"
    },
    backImage: {
        position: "absolute",
        opacity: 0.5,
    },
});

import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";
import Constants from "expo-constants";
import { ceil } from "react-native-reanimated";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
    },
    header: {
        height: "100%",
        maxHeight: 170,
        width: "100%",
        padding: 30,
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: "#363432",
    },
    buttonsHeader: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    backButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
    },
    headerArea: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    mounthButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        paddingHorizontal: 20,
        backgroundColor: "#2F2F2F",
        borderRadius: 7,
    },
    mounthName: {
        fontSize: 25,
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 10,
        fontFamily: "",
    },
    selectArea: {
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
        height: 80,
        width: "100%",
        backgroundColor: "#d9d9d9",
    },
    label: {
        color: theme.white,
        fontWeight: "bold",
        fontSize: 15,
        alignSelf: "flex-start",
    },
    logo: {
        height: 300,
        width: 300,
    },
    backButtonContainer: {
        position: "absolute",
        top: Constants.statusBarHeight + 10,
        left: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: theme.white,
    },
    passwordContainer: {
        marginTop: 10,
        alignItems: "center",
        width: "100%",
    },
    passwordField: {
        marginTop: 10,
        color: theme.white,
    },
    content: {
        flex: 1,
        width: "100%",
        height: "100%",
        padding: 30,
    },
    typeTitle: {
        fontSize: 28,
        fontWeight: "bold",
    },
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
    modalArea: {
        width: "100%",
        height: "100%",
        padding: 30,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
    },
    pickerComponent: {
        width: 190,
        borderRadius: 50,
        padding: 10,
        backgroundColor: "#363432",
        color: "#fff",
        fontWeight: "bold",
    },
    pickerArea: {
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 20,
    },
    pickerLabel: {
        fontSize: 18,
    },
    btnSearchModal: {
        width: "90%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        margin: 30,
        backgroundColor: "#fff",
        borderRadius: 3,
        flexDirection: "row",
    },
    labelSearchModal: {
        color: "#363432",
        fontSize: 16,
        fontWeight: "600",
        marginRight: 10,
    },
});

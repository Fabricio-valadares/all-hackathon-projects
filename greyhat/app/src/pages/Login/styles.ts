import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 30,
    backgroundColor: theme.background
  },
  input: {
    backgroundColor: theme.darkBlue,
    fontSize: 18,
    paddingLeft: 15,
    color: theme.white,
    borderRadius: 5,
    width: 265,
    marginVertical: 10,
    height: 40
  },
  login: {
    marginTop: 10
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.white,
    marginBottom: 25
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
  backImage: {
    position: "absolute",
    opacity: 0.5,
  },
});

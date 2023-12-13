import { StyleSheet } from "react-native";

export const RegisterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F1D4D6",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 310,
    height: 44,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    color: "black",
    borderColor: "#F1D4D6",
    marginBottom: 10,
    borderRadius: 10,
  },

  inputContainer: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: 30,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    alignSelf: "center",

    fontSize: 30,
    fontWeight: 700,
  },
});

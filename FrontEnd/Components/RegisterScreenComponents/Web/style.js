import { StyleSheet } from "react-native";
import { BaseColors } from "../../GlobalValues";

export const RegisterScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#F1D4D6",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
    width: "50%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    width: "50%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 2,
    borderStyle: "dashed",
    borderColor: BaseColors.secondary,
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

import { StyleSheet } from "react-native";

export const LoginScreenStyles = StyleSheet.create({
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
  imageContainer: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 10,
  },
  inputContainer: {
    flex: 1 / 2,
    paddingBottom: 300,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    alignSelf: "center",
    paddingBottom: 15,
    fontSize: 30,
    fontWeight: 700,
  },
});

import React from "react";
import { StyleSheet, View, Pressable, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FIREBASE_AUTH } from "../../../firebaseconfig";
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default function ButtonLogOut() {
  const user = FIREBASE_AUTH.currentUser;
  const navigation = useNavigation();

  function handleLogOut() {
    FIREBASE_AUTH.signOut();
    navigation.navigate("Home", { forceReload: true });
    Toast.show({
      type: "success",
      text1: "✔️ Usuário desconectado!",
      text2: "",
    });
  }

  // Se o usuário estiver logado, exiba o botão de sair
  if (user) {
    return (
      <View style={styles.buttonContainer}>
        <Pressable
          label="Sair"
          style={styles.button}
          onPress={() => handleLogOut()}
        >
          <Text style={styles.buttonLabel}>Sair</Text>
        </Pressable>
      </View>
    );
  }

  // Se o usuário não estiver logado, não exiba nada
  return null;
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 160,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#9384D7",
    borderRadius: 18,
    margin: 10,
    padding: 3,
  },
  button: {
    borderRadius: 10,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonLabel: {
    color: "black",
    fontSize: 16,
  },
});

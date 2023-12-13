import React from "react";
import {
  StyleSheet,
  View,
  Pressable,
  Text,
  Image,
  Platform,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FIREBASE_AUTH } from "../../../firebaseconfig";
import Toast from "react-native-toast-message";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const isWeb = Platform.OS === "web";

export default function RestaurantButton({ label, image, icon }) {
  const [isPressed, setIsPressed] = useState(false);
  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };
  const navigation = useNavigation();
  const user = FIREBASE_AUTH.currentUser;
  const buttonStyle = [
    styles.button,
    isPressed && styles.buttonPressed,
    isWeb && styles.buttonWeb, // Estilos específicos para a web
  ];

  let imageURL;
  if (typeof image === "number") {
    imageURL = Image.resolveAssetSource(image).uri;
  } else {
    imageURL = image;
  }

  const PreventPressWithouAccount = () => {
    if (user) {
      navigation.navigate(label);
    } else {
      Toast.show({
        type: "error",
        text1: "⚠️Atenção!",
        text2: "Realize o Login para Continuar!",
      });
    }
  };
  return (
    <View style={[styles.buttonContainer, isWeb && styles.containerWeb]}>
      <Pressable
        style={[styles.button, isPressed && styles.buttonPressed]}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => {
          PreventPressWithouAccount();
        }}
      >
        <View style={[styles.imageContainer]}>
          <MaterialCommunityIcons name={icon} size={150} color="#8C79E4" />
          <Image source={{ uri: imageURL }} style={styles.buttonImage} />
        </View>
      </Pressable>
      <Text style={[styles.buttonLabel, { color: "#fff" }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
  imageContainer: {},
  containerWeb: {
    // Largura máxima na web
  },
  button: {
    width: 150,
    height: 200,
    borderRadius: 15,
    overflow: "hidden",
    alignContent: "center",
    justifyContent: "center",
  },

  buttonLabel: {
    color: "#fff",
    fontSize: 25,
  },

  buttonImage: {},
  buttonPressed: {
    transform: [{ scale: 1.05 }], // Aplica o zoom no Pressable pressionado
  },
  buttonWeb: {
    // Estilos específicos para a web
    // Por exemplo, adicionando uma sombra no botão apenas para web
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
});

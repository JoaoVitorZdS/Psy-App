import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartContext from "../contexts/CartContext";

export default function MenuItemButton({ label, text, image, price }) {
  const navigation = useNavigation();
  const { cartItems, setCartItems } = useContext(CartContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const imageSource = image;

  const addToCart = () => {
    const newItem = { label, text, image, price };
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    handleCloseModal();
  };

  const goToCartScreen = () => {
    handleCloseModal();
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.buttonContainer}>
      <View style={styles.ImageAndLabelContainer}>
        <Pressable
          style={[styles.button, isButtonPressed && styles.buttonPressed]}
          onPress={handlePress}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Image source={imageSource} style={styles.buttonImage} />
        </Pressable>
        <Text style={styles.buttonLabel}>{label}</Text>
      </View>

      <View style={styles.description}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.price}>R${price}</Text>
        <View style={styles.menuButtonContainer}>
          <Pressable style={styles.menuButton} onPress={addToCart}>
            <Text style={styles.menuButtonText}>Adicionar ao carrinho</Text>
          </Pressable>
          <Pressable
            style={styles.menuButton}
            onPress={() => {
              addToCart();
              goToCartScreen();
            }}
          >
            <Text style={styles.menuButtonText}>Comprar</Text>
          </Pressable>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <Pressable
            style={[
              styles.buttonContainerModal,
              isPressed && styles.buttonPressed,
            ]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Image source={imageSource} style={styles.buttonImageModal} />
          </Pressable>

          <View style={styles.modalInfo}>
            <Text style={styles.modalTitle}>{label}</Text>
            <Text style={styles.modalDescription}>{text}</Text>
            <Text style={styles.modalPrice}>R${price}</Text>
          </View>
          <View style={styles.modalButtonsContainer}>
            <Pressable style={styles.modalButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </Pressable>
            <Pressable style={styles.modalButton} onPress={addToCart}>
              <Text style={styles.closeButtonText}>Adicionar ao carrinho</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    padding: 5,
    height: 340,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: "#ffd33d",
    borderRadius: 45,
  },
  ImageAndLabelContainer: {
    width: "50%",
  },
  buttonContainerModal: {
    width: "100%",
    padding: 5,
    height: 400,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#ffd33d",
    borderRadius: 35,
  },
  modalInfo: {
    width: "100%",
    height: "40%",
  },
  modalButtonsContainer: {
    width: "80%",
    height: "10%",

    marginTop: 10,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },

  buttonLabel: {
    width: "70%",
    height: 150,
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
    fontStyle: "italic",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    justifyContent: "center",
    alignContent: "center",
    width: "50%",
    height: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 17,
    fontStyle: "italic",
    marginHorizontal: 10,
  },
  price: {
    color: "#ffd33d",
    fontSize: 15,
    fontStyle: "italic",
    alignSelf: "center",
  },
  buttonImage: {
    width: 200,
    height: 235,
    borderRadius: 25,
    marginTop: 75,
  },

  buttonImageModal: {
    width: "100%",
    height: 380,
    borderRadius: 20,
  },
  buttonPressed: {
    transform: [{ scale: 1.05 }], // Aplica o zoom no Pressable pressionado
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#231F20",
    padding: 20,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 25,
    fontStyle: "italic",
    fontWeight: 800,
    marginBottom: 10,
    marginTop: 50,
  },
  modalDescription: {
    color: "#fff",
    fontSize: 19,
  },
  modalPrice: {
    color: "#ffd33d",
    fontSize: 18,
    marginBottom: 10,
  },
  modalButton: {
    width: 170,
    height: 50,
    margin: 20,

    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffd33d",
    borderRadius: 5,
  },
  menuButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  menuButton: {
    width: 170,
    height: 40,
    margin: 5,
    marginLeft: 10,

    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffd33d09",
    borderWidth: 1,
    borderColor: "#ffd33d",
    borderRadius: 5,
  },
  closeButtonText: {
    color: "#000080",
    fontWeight: 700,
    fontSize: 16,
  },
  menuButtonText: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 12,
    alignSelf: "center",
    justifyContent: "center",
    fontStyle: "italic",
  },
});

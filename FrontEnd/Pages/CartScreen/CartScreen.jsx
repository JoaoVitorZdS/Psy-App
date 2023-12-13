
import { CartScreenStyles } from "./styles";
import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  Button,
  Alert,
  Pressable,
  ScrollView,
} from "react-native";
import CartContext from "../../contexts/CartContext";
import { FIREBASE_AUTH } from "../../../firebaseconfig";
import Toast from "react-native-toast-message";

export function CartScreen() {
  const { cartItems, setCartItems } = useContext(CartContext);

  const uniqueCartItems = Array.from(
    new Set(cartItems.map((item) => item.label))
  ).map((label) => {
    const itemsWithLabel = cartItems.filter((item) => item.label === label);
    const quantity = itemsWithLabel.length;
    return {
      ...itemsWithLabel[0], // Assuming the label, image, and price are the same for the items with the same label
      quantity: quantity,
    };
  });

  const handleClearCart = () => {
    setCartItems([]);
    Toast.show({
      type: "info",
      text1: "♻️ Agendamentos esquecidos!",
      
    });
  };

  const handleFinishPurchase = () => {
    const user = FIREBASE_AUTH.currentUser;

                  
      if (user) {
        Toast.show({
          type: "success",
          text1: "✔️ Consulta agendada!",
          text2: "",
        });
     }else{
      Toast.show({
        type: "error",
        text1: "⚠️ Atenção!",
        text2: "Realize o Login para Continuar!",
      });
     }
                  
    
   
  };

  const handleIncrementQuantity = (item) => {
    const updatedCartItems = [...cartItems]; // Create a copy of the array
    
    const existingItemIndex = updatedCartItems.findIndex(
      (cartItem) => cartItem.label === item.label
    );
  
    if (existingItemIndex === -1) {
      // Item with the same label already exists, increase its quantity
      updatedCartItems[existingItemIndex].quantity += 1;
    } else {
      // Item with the same label doesn't exist, add a new item
      updatedCartItems.push({ ...item, quantity: 1 });
    }
  
    setCartItems(updatedCartItems);
  };
  
  

  const handleDecrementQuantity = (item) => {
    const updatedCartItems = [...cartItems]; // Create a copy of the array
  
    for (let i = updatedCartItems.length - 1; i >= 0; i--) {
      if (updatedCartItems[i].label === item.label) {
        if (updatedCartItems[i].quantity > 1) {
          updatedCartItems[i].quantity -= 1;
        } else {
          updatedCartItems.splice(i, 1); // Remove the last item with the same label
        }
        break; // Exit loop after updating/removing one item
      }
    }
  
    setCartItems(updatedCartItems);
  };
  
  
  

  return (
    <SafeAreaView style={[styles.container, cartItems.length === 0 && styles.emptyContainer]}>
      {cartItems.length === 0 ? (
        
      <Text style={styles.emptyCart}>Nenhuma consulta selecionada ...</Text>
    ) : (
      <ScrollView>
          {uniqueCartItems.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <View style={styles.itemQuantityContainer}>
                  <Pressable
                    onPress={() => handleDecrementQuantity(item)}
                    style={styles.quantitybutton}
                  >
                    <Text>-</Text>
                  </Pressable>
                  <Text style={styles.itemQuantity}>{item.quantity}</Text>
                  <Pressable
                    onPress={() => handleIncrementQuantity(item)}
                    style={styles.quantitybutton}
                  >
                    <Text>+</Text>
                  </Pressable>
                </View>
                <Text style={styles.itemLabel}>{item.label}</Text>
                <View style={styles.itemPriceContainer}>
                  <Text style={styles.itemPrice}>R${item.price * item.quantity}</Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
    )}
      <View style={styles.footer}>
        <View style={styles.pricing}>
          <View > 
            <Text style={styles.footerTextsecondary}>Subtotal:</Text>
            <Text style={styles.footerTextsecondary}>Taxa de serviço:</Text>
            <Text style={styles.footerText}>
              Total: 
            </Text>
          </View>
          <View>
            <Text style={styles.footerTextsecondary}>
              R$ {calculateSubTotal(uniqueCartItems)}
            </Text>
            <Text style={styles.footerTextsecondary}>
              R$ {calculateTax(uniqueCartItems)}
            </Text>
            <Text style={styles.footerText}>
              R$ {calculateTotal(uniqueCartItems)}
            </Text>
          </View>
        </View>
       
        <View style={styles.buttonContainer}>
          <Button
            title="Limpar "
            onPress={handleClearCart}
            color="#8C79E4"
            
            style={styles.clearButton}
          />
          <Button
            title="Finalizar Agendamento"
            onPress={() => handleFinishPurchase()}
            color="#8C79E4"
            style={styles.buyButton}
          />
        </View>
      </View>
    
    </SafeAreaView>
  );
}

function calculateTotal(cartItems) {
  const total = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity *1.03,
    0
  );

  return total.toFixed(2)
}
function calculateSubTotal(cartItems) {
  const total = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0
  );

  return total.toFixed(2)
}
function calculateTax(cartItems) {
  const tax = calculateTotal(cartItems) - calculateSubTotal(cartItems)

  return tax.toFixed(2)
}

const styles =  CartScreenStyles

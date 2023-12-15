import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CartContext from "./FrontEnd/contexts/CartContext";
import { onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebaseconfig";
import { stackScreens } from "./FrontEnd/Components/MainAppComponents/StackScreens";
import Toast from 'react-native-toast-message';

const Stack = createNativeStackNavigator();

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
      setUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <NavigationContainer>
        <Stack.Navigator>
          {stackScreens.map((screen, index) => (
            <Stack.Screen
              key={index}
              name={screen.name}
              component={screen.component}
              options={screen.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </CartContext.Provider>
  );
}

export default App;

import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import Button from "../../ButtonsHomePage";
import { FIREBASE_AUTH } from "../../../../firebaseconfig";
import { HomeScreenAndroidStyles } from "./stylesAndroid";

const PlaceholderImage = require("../../../Assets/LogoHelpMe.png");
const stylesAndroid = HomeScreenAndroidStyles;
export default function AndroidHomePage() {
  const user = FIREBASE_AUTH.currentUser;
  const [refreshing, setRefreshing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user); // Check user's login status initially

  const refreshPage = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100); // Adjust the delay as needed

    // Update the isLoggedIn state based on user's login status
    setIsLoggedIn(!!user);
  }, [user]); // Include user in the dependency array

  useEffect(() => {
    // Set the isLoggedIn state initially when the component mounts
    setIsLoggedIn(!!user);
  }, [user]);

  return (
    <View style={stylesAndroid.container}>
      <View style={stylesAndroid.buttonContainer}>
        <Image source={PlaceholderImage} style={stylesAndroid.image} />

        <Text
          style={{
            color: "#F56FB6",
            alignSelf: "center",
            paddingBottom: 50,
            fontSize: 23,
            fontWeight: 700,
          }}
        >
          Seja bem vinda {user ? ", " + user.displayName : ""}!
        </Text>

        {refreshing ? (
          // Render something while refreshing, e.g., a loading spinner
          <></>
        ) : !isLoggedIn ? (
          <>
            <Button label="Menu" theme="menu" onPress={refreshPage} />
            <Button label="Login" theme="redirectlogin" onPress={refreshPage} />
            <Button label="Cadastrar" onPress={refreshPage} />
          </>
        ) : (
          <>
            <Button label="Menu" theme="menu" onPress={refreshPage} />
            <Button
              label="Perfil"
              theme="redirectprofile"
              onPress={refreshPage}
            />
          </>
        )}
      </View>
    </View>
  );
}

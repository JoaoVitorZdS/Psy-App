import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Button from "../HomeScreenComponents/Buttons/Web/ButtonsWebHomePage";
import { HomeScreenWebStyles } from "../HomeScreenComponents/Web/stylesWeb";
import { FIREBASE_AUTH } from "../../../firebaseconfig";

export default function HeaderWeb() {
  const PlaceholderImage = require("../../Assets/CircleHelpMe.png");
  const stylesWeb = HomeScreenWebStyles;
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
    <View style={stylesWeb.header}>
      <View style={stylesWeb.headerLogo}>
        <Image source={PlaceholderImage} style={stylesWeb.image} />
      </View>
      <View style={stylesWeb.headerNameContainer}>
        <Image
          source={require("../../Assets/HelpMe.png")}
          style={stylesWeb.image}
        />
      </View>
      <View style={stylesWeb.headerButtons}>
        {refreshing ? (
          // Render something while refreshing, e.g., a loading spinner
          <></>
        ) : !isLoggedIn ? (
          <>
            <View style={stylesWeb.buttonContainer}>
              <Button label="Menu" theme="menu" onPress={refreshPage} />
              <Button
                label="Login"
                theme="redirectlogin"
                onPress={refreshPage}
              />
              <Button label="Cadastrar" onPress={refreshPage} />
            </View>
          </>
        ) : (
          <>
            <View style={stylesWeb.buttonContainerLogged}>
              <Button label="Menu" theme="menu" onPress={refreshPage} />
              <Button
                label="Perfil"
                theme="redirectprofile"
                onPress={refreshPage}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
}

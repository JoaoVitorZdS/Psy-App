import React from "react";
import { Platform } from "react-native";
import WebHomePage from "../../Components/HomeScreenComponents/Web/webHomePage";
import AndroidHomePage from "../../Components/HomeScreenComponents/Android/AndroidHomePage";

export function HomeScreen() {
  return (
    <>
      {Platform.OS === 'web' ? (<WebHomePage/>) : (<AndroidHomePage/>)}
      
    </>
  );
}





import React, { Component } from "react";
import { Register } from "../../Components/RegisterScreenComponents/Register/Register";
import { Platform } from "react-native";
import { RegisterWeb } from "../../Components/RegisterScreenComponents/Web/RegisterWeb";



export function RegisterScreen()  {
  
  
  
    return (
      <>
  {Platform.OS === 'web' ? (<RegisterWeb/>) : (<Register/>)}
      </>
  )
  
}


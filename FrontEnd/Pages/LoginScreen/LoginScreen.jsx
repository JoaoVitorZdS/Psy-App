import React, { Component } from "react";
import { LoginScreenStyles } from "./styles";
import { Login } from "../../Components/LoginScreenComponents/Login/Login";
import { Platform } from "react-native";
import { LoginWeb } from "../../Components/LoginScreenComponents/Web/LoginWeb";



export function LoginScreen()   {

  
    return (
    <>
    {Platform.OS === 'web' ? (<LoginWeb/>) : (<Login/>)}
    </>)
  
}

const styles = LoginScreenStyles

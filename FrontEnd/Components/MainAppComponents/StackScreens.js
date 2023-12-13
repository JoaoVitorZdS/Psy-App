import { Platform } from "react-native";
import { AllMenusScreen } from "../../Pages/AllMenusScreen/AllMenusScreen";
import { CartScreen } from "../../Pages/CartScreen/CartScreen";
import { HomeScreen } from "../../Pages/HomeScreen/HomeScreen";
import { LoginScreen } from "../../Pages/LoginScreen/LoginScreen";
import { ManagerScreen } from "../../Pages/ManagerScreen/ManagerScreen";
import { FrancieleSilvaMainScreen } from "../../Pages/Professionals/Dra.FrancieleSilva/Dra.FrancieleSilvaMainScreen";
import { TaniaMacedoMainScreen } from "../../Pages/Professionals/Dra.TâniaMacedo/Dra.TâniaMacedoMainScreen";
import { ProfileScreen } from "../../Pages/ProfileScreen/ProfileScreen";
import { RegisterScreen } from "../../Pages/RegisterScreen/RegisterScreen";
import { createStackScreen } from "./CreateStackScreen";

let allMenusOptions;

// Ajuste para Web
{
  Platform.OS === "web"
    ? (allMenusOptions = true) // Configurações diferentes para AllMenus no Web
    : (allMenusOptions = true);
}

export const stackScreens = [
  createStackScreen("Home", HomeScreen, "Safe Space", false),
  createStackScreen("Login", LoginScreen, "Login", false),
  createStackScreen("Register", RegisterScreen, "Cadastro", false),
  createStackScreen("Profile", ProfileScreen, "Perfil", true),
  createStackScreen("ManagerDash", ManagerScreen, "GERÊNCIA", true),
  createStackScreen("Edit Profile", LoginScreen, "Editar Perfil", false),
  createStackScreen("Orders", RegisterScreen, "Seus Pedidos", true),
  createStackScreen(
    "AllMenus",
    AllMenusScreen,
    "Todas as Profissionais",
    allMenusOptions
  ),
  createStackScreen("Cart", CartScreen, "Seu agendamento", true),

  createStackScreen(
    "Advocacia",
    TaniaMacedoMainScreen,
    "Dra. Tânia Macedo",
    true
  ),
  createStackScreen(
    "Psicologia",
    FrancieleSilvaMainScreen,
    "Perguntas Frequentes",
    true
  ),
  createStackScreen(
    "Me ajude",
    FrancieleSilvaMainScreen,
    "Perguntas Frequentes",
    true
  ),
];

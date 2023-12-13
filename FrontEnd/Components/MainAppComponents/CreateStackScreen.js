import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import CartContext from "../../contexts/CartContext";
import {
  getFirestore,
  query,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
import { FIREBASE_AUTH } from "../../../firebaseconfig";

export function createStackScreen(name, component, title, showHeader = false) {
  return {
    name: name,
    component: component,
    options: ({ route }) => ({
      animation: "slide_from_right",
      title: title,
      headerStyle: {
        backgroundColor: "#8C79E4",
      },
      headerTintColor: "#F1D4D6",
      headerTitleStyle: {
        fontWeight: "bold",
      },

      headerShown: showHeader,

      headerRight: () => {
        const navigation = useNavigation();
        const { cartItems } = useContext(CartContext);
        const cartItemCount = cartItems.reduce((total, item) => total + 1, 0);
        const [userData, setUserData] = useState(null);
        const user = FIREBASE_AUTH.currentUser;
        const firestore = getFirestore();
        useEffect(() => {
          const fetchUserProfile = async () => {
            if (user) {
              const usersQuery = query(
                collection(firestore, "users"),
                where("email", "==", user.email)
              );
              const querySnapshot = await getDocs(usersQuery);

              if (!querySnapshot.empty) {
                const userData = querySnapshot.docs[0].data();
                setUserData(userData);
              }
            }
          };
          fetchUserProfile();
        }, [user]);

        const isAdmin = userData && userData.isAdm === true;

        if (route.name === "Cart") {
          return (
            <TouchableOpacity
              onPress={() => {
                if (isAdmin) {
                  navigation.navigate("ManagerDash");
                } else {
                  navigation.navigate("Profile");
                }
              }}
            >
              <View style={styles.cartIconContainer}>
                <MaterialCommunityIcons
                  name={isAdmin ? "crown" : "account-circle"}
                  size={30}
                  color="#F1D4D6"
                />
              </View>
            </TouchableOpacity>
          );
        }
        if (route.name === "AllMenus" && !user) {
          return (
            <TouchableOpacity
              onPress={() => {
                if (isAdmin) {
                  navigation.navigate("ManagerDash");
                }
                navigation.navigate("Profile");
              }}
            >
              <View style={styles.cartIconContainer}>
                <MaterialCommunityIcons
                  name={isAdmin ? "crown" : "account-circle"}
                  size={30}
                  color="#F1D4D6"
                />
              </View>
            </TouchableOpacity>
          );
        }
        if (route.name === "AllMenus") {
          return (
            <TouchableOpacity
              onPress={() => {
                if (isAdmin) {
                  navigation.navigate("ManagerDash");
                } else {
                  navigation.navigate("Profile");
                }
              }}
            >
              <View style={styles.cartIconContainer}>
                <MaterialCommunityIcons
                  name={isAdmin ? "crown" : "account-circle"}
                  size={30}
                  color="#F1D4D6"
                />
              </View>
            </TouchableOpacity>
          );
        }
        if (route.name === "ManagerDash") {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ManagerDash");
              }}
            >
              <View style={styles.cartIconContainer}>
                <MaterialCommunityIcons
                  name={"account-supervisor"}
                  size={30}
                  color="#F1D4D6"
                />
              </View>
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");
              }}
            >
              <View style={styles.cartIconContainer}>
                <View style={styles.cartItemCountContainer}>
                  <Text style={styles.cartItemCount}>{cartItemCount}</Text>
                </View>
                <MaterialCommunityIcons
                  name="table-clock"
                  size={20}
                  color="#F1D4D6"
                />
              </View>
            </TouchableOpacity>
          );
        }
      },
    }),
  };
}

const styles = StyleSheet.create({
  cartIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  cartItemCountContainer: {
    backgroundColor: "#F2DC99",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 1,
  },
  cartItemCount: {
    color: "#124033",
    fontSize: 12,
    fontWeight: "bold",
  },
});

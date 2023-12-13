import * as React from "react";
import { View, Text, Image, TouchableOpacity, Modal, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../../Components/ButtonsHomePage";
import ButtonLogOut from "../../Components/CartScreenComponents/ButtonLogOut";
import { FIREBASE_AUTH} from "../../../firebaseconfig";
import { getFirestore, collection, getDocs, query, where, updateDoc } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ProfileScreenStyles } from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { FetchUserProfile } from "../../Components/ProfileScreenComponents/FetchUserProfile/FetchUserProfile";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export function ProfileScreen() {
  const user = FIREBASE_AUTH.currentUser;
  const ProfilePhoto = require("../../Assets/Generic-Profile.jpg");
  if (user) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FetchUserProfile/>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>

        <Text style={{color: "#9384D7", fontWeight: "600"}}>Você ainda não possui nenhuma interação </Text>
        <MaterialCommunityIcons
                  name={ "emoticon-sad-outline"}
                  size={30}
                  color="#9384D7"
                  />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonLogOut />
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.profileInformation}>
          <View style={styles.profileImageContainer}>
            <Image source={ProfilePhoto} style={styles.profileImage} />
          </View>
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileText}>Nome de usuário: ---</Text>
            <Text style={styles.profileText}>Email: ---</Text>
            <Text style={styles.profileText}>Telefone: ---</Text>
          </View>
        </View>
        <View style={styles.warningsContainer}>

        <Text style={styles.noAccessText}>Faça Login para ter acesso!</Text>
        <Button label={"Ir para o login"} theme="redirectlogin" />
        </View>
        <ButtonLogOut/>
      </View>
    );
  }
}


const styles = ProfileScreenStyles

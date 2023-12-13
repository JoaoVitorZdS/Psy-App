import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { FIREBASE_AUTH } from "../../../../firebaseconfig";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { ProfileScreenStyles } from "../../../Pages/ProfileScreen/styles";
import * as ImagePicker from 'expo-image-picker';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();

export function FetchUserProfile() {
  const [userData, setUserData] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [updatedPhone, setUpdatedPhone] = useState("");
  const [updatedUsername, setUpdatedUsername] = useState("");

  const [selectedImage, setSelectedImage] = useState(
    userData?.profileImageURL || null
  );
  const user = FIREBASE_AUTH.currentUser;
  const firestore = getFirestore();
  const ProfilePhoto = require("../../../Assets/Generic-Profile.jpg");

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

          if (userData.profileImageURL) {
            setSelectedImage(userData.profileImageURL);
          }
        }
      }
    };
    fetchUserProfile();
  }, [user]);

    const updateProfile = async () => {
      const updatedData = {};

      if (updatedUsername) {
        updatedData.displayName = updatedUsername;
        updateProfile(auth.currentUser, {
          displayName: updatedUsername
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
      }

      if (updatedPhone) {
        updatedData.phone = updatedPhone;
        updateProfile(auth.currentUser, {
          phone: updatedPhone
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
      }

      if (Object.keys(updatedData).length === 0) {
        return; // No changes to update
      }

      if (userData && userData.email) {
        const usersQuery = query(
          collection(firestore, "users"),
          where("email", "==", userData.email)
        );
        const querySnapshot = await getDocs(usersQuery);

        if (!querySnapshot.empty) {
          const userDocRef = querySnapshot.docs[0].ref;
          await updateDoc(userDocRef, updatedData);

          setUserData({ ...userData, ...updatedData });
          setModalVisible(false); // Close the modal after updating
        }
      }
    };

  const pickImageAndSave = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,

    });

    if (!result.canceled) {
      const storage = getStorage();
      const imageRef = ref(storage, `profile_images/${user.email}.jpg`); // Usar o email como nome do arquivo

      const response = await fetch(result.assets[0].uri);

      const blob = await response.blob();

      // Verificar se já existe uma imagem com o mesmo nome no Storage
      try {
        const existingImageRef = ref(
          storage,
          `profile_images/${user.email}.jpg`
        );
        await getDownloadURL(existingImageRef); // Verificar se a URL da imagem existe
        // Se não ocorrer erro, a imagem já existe, então excluímos a imagem existente antes de fazer o upload da nova imagem
        await deleteObject(existingImageRef);
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "❌  Erro",
          text2: error.message,
        });
      }
    
    
    

      await uploadBytes(imageRef, blob);

      const imageURL = await getDownloadURL(imageRef);

      // Atualizar o documento do usuário no Firestore
      if (userData && userData.email) {
        const usersQuery = query(
          collection(firestore, "users"),
          where("email", "==", userData.email)
        );
        const querySnapshot = await getDocs(usersQuery);

        if (!querySnapshot.empty) {
          const userDocRef = querySnapshot.docs[0].ref;
          await updateDoc(userDocRef, {
            profileImageURL: imageURL, // Defina o caminho correto da imagem no Storage
          });
          setSelectedImage(imageURL);
        }
        Toast.show({
          type: "success",
          text1: "✔️ Sucesso",
          text2: "Imagem Alterada",})
      }
    } else {
      Toast.show({
        type: "error",
        text1: "❌  Nenhuma imagem selecionada.",
        text2: "",
      });
    }
  };

  return (
    <View style={ProfileScreenStyles.profileInformation}>
      <View style={ProfileScreenStyles.profileImageContainer}>
        <TouchableOpacity
          onPress={pickImageAndSave}
          style={ProfileScreenStyles.profileImageContainer}
        >
          {selectedImage != null ? (
            <Image
              source={{ uri: selectedImage }}
              style={ProfileScreenStyles.profileImage}
            />
          ) : (
            <Image
              source={ProfilePhoto}
              style={ProfileScreenStyles.profileImage}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={ProfileScreenStyles.profileTextContainer}>
        <Text style={ProfileScreenStyles.profileText}>
          Nome de usuário: {userData?.displayName}
        </Text>
        <Text style={ProfileScreenStyles.profileText}>Email: {user.email}</Text>
        <Text style={ProfileScreenStyles.profileText}>
          Telefone: {userData?.phone || "---"}
        </Text>
        <Text style={ProfileScreenStyles.profileText}>
          Aniversário: {userData?.birthdate || "---"}
        </Text>
        <Text style={ProfileScreenStyles.profileText}>
          CPF: {userData?.doc || "---"}
        </Text>
      </View>
       <TouchableOpacity style={ProfileScreenStyles.editPenContainer} onPress={() => setModalVisible(true)}>
    <MaterialCommunityIcons name="pen" size={24} color="white" />
  </TouchableOpacity> 
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={ProfileScreenStyles.modalWrapper} >
          
        <View style={ProfileScreenStyles.modalContainer}>
        <TouchableOpacity style={ProfileScreenStyles.editPenContainer} onPress={() => setModalVisible(false)}>
          <MaterialCommunityIcons name="close-circle-outline" size={30} color="#9384D7"  />
        </TouchableOpacity> 
          <Text style={ProfileScreenStyles.textOk}>
            Atualizar dados de perfil
          </Text>
          <TextInput
            style={ProfileScreenStyles.modalInput}
            placeholder="Atualizar nome"
            value={updatedUsername}
            onChangeText={(text) => setUpdatedUsername(text)}
            onBlur={updateProfile} // Update profile on blur
            />

          <TextInput
            style={ProfileScreenStyles.modalInput}
            placeholder="Atualizar número de telefone"
            value={updatedPhone}
            onChangeText={(text) => setUpdatedPhone(text)}
            onBlur={updateProfile} // Update profile on blur
            />

          <TouchableOpacity
            style={ProfileScreenStyles.buttonOk}
            onPress={() => setModalVisible(false)}
            >
            <Text style={ProfileScreenStyles.textOk}>Concluir</Text>
          </TouchableOpacity>
          {/* Add other input fields for updating other profile data */}
        </View>
            </View>
      </Modal>
    </View>
  );
}

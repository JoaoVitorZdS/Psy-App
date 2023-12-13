import * as React from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Modal } from "react-native";
import { StatusBar } from "expo-status-bar";
import Button from "../../Components/ButtonsHomePage";
import ButtonLogOut from "../../Components/CartScreenComponents/ButtonLogOut";
import { FIREBASE_AUTH} from "../../../firebaseconfig";
import { getFirestore, collection, getDocs, query, where, updateDoc, addDoc, doc } from "firebase/firestore";
import * as ImagePicker from 'expo-image-picker';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ManagerScreenStyles } from "./styles";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { FetchUserProfile } from "../../Components/ProfileScreenComponents/FetchUserProfile/FetchUserProfile";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ScrollView as GestureScrollView } from 'react-native-gesture-handler';
export function ManagerScreen() {
  const user = FIREBASE_AUTH.currentUser;
  const ProfilePhoto = require("../../Assets/Generic-Profile.jpg");
  const [professionalName, setprofessionalName] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [label, setLabel] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [products, setProducts] = React.useState([]); // State for products list
  const [modalVisible, setModalVisible] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      // Extract restaurant name from user's email
      const userEstablishment = user.displayName;
      
      setprofessionalName(userEstablishment);

      // Fetch products from the Firestore collection
      const fetchProducts = async () => {
        const db = getFirestore();
        const productsCollection = collection(db, `${userEstablishment}products`);
        const productsSnapshot = await getDocs(productsCollection);
        const productsData = productsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
        
      };

      fetchProducts();
    }
  }, [user]);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  
  const handleImagePick = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Toast.show({
        type: "error",
        text1: "❌ Erro ao acessar galeria!",
        text2: "Permissão é necessária para continuar",
      });
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (!pickerResult.canceled) {
      setImage(pickerResult.uri);
    }
  };

  const handleCreateProduct = async () => {
    const db = getFirestore();
    const productsCollection = collection(db, `${professionalName}products`);

    try {
      if (!label) {
        Toast.show({
          type: "error",
          text1: "❌  Preencha o campo de Título.",
          text2: "",
          
        });
        return;
      }

      if (!description) {
        Toast.show({
          type: "error",
          text1: "❌  Preencha o campo de descrição",
          text2: "",
        });
        return;
      }
      if (!price) {
        Toast.show({
          type: "error",
          text1: "❌  Preencha o campo de Preço.",
          text2: "",
        });
        return;
      }
      if (!image) {
        Toast.show({
          type: "error",
          text1: "❌  Selecione uma imagem.",
          text2: "",
        });
        return;
      }
      const docRef = await addDoc(productsCollection, {
        label,
        description,
        price,
        image: null,
      });

      // Upload the image to Firebase Storage and update the product document
      if (image) {
        const storage = getStorage();
        const imageRef = ref(storage, `productImages/${docRef.id}`);
        const response = await fetch(image);
        const blob = await response.blob(); // Convert the fetched response to a Blob
        await uploadBytes(imageRef, blob); // Upload the Blob data
        const imageUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(productsCollection, docRef.id), {
          image: imageUrl,
        });
      }
      setModalVisible(false)

      Toast.show({
        type: "success",
        text1: "✔️ Serviço Criado!",
        text2: `${label} foi criado para ${professionalName}`,
      });
      // Clear the form fields
      setLabel("");
      setDescription("");
      setPrice("");
      setImage(null);

    } catch (error) {
      Toast.show({
        type: "error",
        text1: "❌ Ocorreu um erro ao criar o serviço!",
        text2: "",
      });
    }
  };

  if (user) {
    return (
      <ScrollView contentContainerStyle={styles.container} >
        <StatusBar style="auto" />
        <FetchUserProfile/>
        <Text style={styles.profileText}>Administração para {professionalName}</Text>
        <Modal visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
        >
        <View style={styles.modalWrapper} >
      <ScrollView
      style={{ flex: 1 }} // Ou estilize de acordo com suas necessidades
      keyboardShouldPersistTaps="handled" // Mantém o comportamento padrão de toques no teclado
      contentContainerStyle={{ paddingVertical: 20 }} // Estilo para o conteúdo da ScrollView
    >
          <View style={styles.closeButtonModal}>
            <TouchableOpacity onPress={handleCloseModal}>
              <MaterialCommunityIcons name="close-circle-outline" size={30} color="#9384D7" />
            </TouchableOpacity>
          </View>
          <Text style={styles.formHeaderText}>Criar novo Serviço para {professionalName}</Text>
          {image && <Image source={{ uri: image }} style={styles.selectedImage} />}
          
          <TextInput
            placeholder="Título"
            placeholderTextColor={"#9384D7"}
            value={label}
            onChangeText={setLabel}
            style={styles.productInput}
            />
          <TextInput
          placeholder="Descrição (Até 180 caracteres)"
          placeholderTextColor={"#9384D7"}
          value={description}
          onChangeText={setDescription}
            style={styles.productInput}
            numberOfLines={undefined}
            multiline={true}
            maxLength={180}
            />
          <TextInput
          placeholder="Preço"
          placeholderTextColor={"#9384D7"}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={styles.productInput}
          />
          <View style={styles.buttonsFormContainer}>

          <TouchableOpacity onPress={handleImagePick} style={styles.createButton}>
            <Text style={styles.createButtonText}>Selecioar Imagem</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCreateProduct} style={styles.createButton}>
            <Text style={styles.createButtonText}>Criar Serviço</Text>
          </TouchableOpacity>
          </View>
          </ScrollView>
          </View>
          </Modal>
          <View style={{flexDirection: "row", width: "33%", marginLeft: "-65%"}}>
            <TouchableOpacity onPress={handleOpenModal} style={styles.addProductButtonContainer}>
              <MaterialCommunityIcons name="sticker-plus-outline" size={36} color="#9384D7" />
              <Text style={{color: "#9384D7"}}>Adicionar Serviço</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenModal} style={styles.addProductButtonContainer}>
              <MaterialCommunityIcons name="sticker-plus-outline" size={36} color="#9384D7" />
              <Text style={{color: "#9384D7"}}>Adicionar Serviço</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOpenModal} style={styles.addProductButtonContainer}>
              <MaterialCommunityIcons name="sticker-plus-outline" size={36} color="#9384D7" />
              <Text style={{color: "#9384D7"}}>Adicionar Serviço</Text>
            </TouchableOpacity>  
          </View>
        <View style={styles.productsListWrapper}>
          <GestureScrollView  contentContainerStyle={styles.productsListContainer} horizontal={true}>
          {products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
                <Text style={styles.productTitle}>{product.label}</Text>
                <Text style={styles.productDescription}>{product.description}</Text>
                <Text style={styles.productPrice}>R${product.price}</Text>
            </View>))}
          </GestureScrollView >
        </View>
        <View style={styles.buttonContainer}>
          <ButtonLogOut />
        </View>
      </ScrollView>
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


const styles = ManagerScreenStyles

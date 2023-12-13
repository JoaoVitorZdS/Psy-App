import React, { useEffect, useState } from "react";
import { View, StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import { AllMenusScreenStyles } from "./styles";
import RestaurantButton from "../../Components/AllMenusComponents/RestaurantsMainButtons";
import { FIREBASE_DB } from "../../../firebaseconfig"; // Import your Firebase configuration
import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useFocusEffect, useRoute } from "@react-navigation/native";
const firestore = getFirestore();

export function AllMenusScreen({ navigation }) {
  const route = useRoute();
  const [refreshing, setRefreshing] = React.useState(false);
  const [menuData, setMenuData] = React.useState([]); // Initialize as an empty array
  
    
     
  
  const fetchData = async () => {
    try {
      const usersQuery = query(collection(firestore, "AllCategories"));
      const querySnapshot = await getDocs(usersQuery);

      if (!querySnapshot.empty) {
        const fetchedData = querySnapshot.docs.map((doc) => doc.data()); // Use map() to extract data from each document
        setMenuData(fetchedData);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const refreshPage = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100); // Adjust the delay as needed
  };

  useEffect(() => {
    if (route.params && route.params.refresh) {
      // Perform any necessary data fetching or actions here
      // After finishing, setRefreshing(false) to stop the refresh
      setRefreshing(true);
      
      // Example: Fetch data or perform actions, then setRefreshing(false)
      fetchData().then(() => setRefreshing(false));
    }
    
    fetchData();
  }, [route.params]);
  useFocusEffect(() => {
    refreshPage();
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {menuData.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <RestaurantButton label={item.category} icon={item.icon}  />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = AllMenusScreenStyles;

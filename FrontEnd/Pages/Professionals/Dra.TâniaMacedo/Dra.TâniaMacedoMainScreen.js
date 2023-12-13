import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  StatusBar,
  SectionList,
  Pressable,
  Image,
} from "react-native";
import Button from "../../../Components/ButtonsHomePage";
const PlaceholderImage = require("../../../Assets/doctors/doc1.jpg");
const mapImage = require("../../../Assets/doctors/map.png");
const agendaImage = require("../../../Assets/doctors/marcar.png");
export function TaniaMacedoMainScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profilecontainer}>
        <View style={styles.profileimageContainer}>
          <Image source={PlaceholderImage} style={styles.profileimage} />
        </View>
        <View style={styles.profiledescriptionContainer}>
          <Text style={styles.profiledescription}>
            Formada em Psicologia pela UFPR desde 2010, a Dra. Tânia macedo atua
            com amor pela profissão.
          </Text>
        </View>
      </View>
      <View style={styles.appointmentContainer}>
        <View style={styles.dateList}>
          <MaterialCommunityIcons name={"calendar"} size={40} color="#9384D7" />
          <Text style={styles.date}>10/11</Text>
          <Text style={styles.date}>13/11</Text>
          <Text style={styles.date}>15/11</Text>
          <Text style={styles.date}>17/11</Text>
          <Text style={styles.date}>20/11</Text>
          <Text style={styles.date}>22/11</Text>
        </View>
        <View style={styles.info}>
          <Button label="Marcar Consulta" theme="consulta" />
        </View>
      </View>
      <View style={styles.mapimageContainer}>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name={"pin-outline"}
            size={30}
            color="#9384D7"
          />
          <Text style={{ color: "#9384D7" }}>Mostrar no mapa</Text>
        </View>
        <Image source={mapImage} style={styles.mapImage} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1D4D6",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  profilecontainer: {
    height: "30%",
    flexDirection: "row",
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#9384D7",
    borderBottomWidth: 3,
    borderStyle: "dotted",
  },
  mapimageContainer: {
    height: "30%",
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  appointmentContainer: {
    height: "30%",
    marginTop: 25,
    justifyContent: "space-around",
    alignItems: "center",
  },
  dateList: {
    flexDirection: "row",
    gap: 15,
  },
  date: {
    height: 40,
    width: 40,
    color: "#9384D7",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#9384D7",
    textAlign: "center",
    textAlignVertical: "center",
  },
  profileimageContainer: {
    width: "45%",
    height: "98%",
    borderRadius: 15,
  },
  mapImage: {
    width: "90%",
    height: "100%",
    borderRadius: 15,
  },
  profileimage: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  profiledescriptionContainer: {
    width: "45%",
  },
  profiledescription: {
    color: "#9384D7",
  },
});

import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { BaseColors } from "./GlobalValues";
export default function Button({ label, theme, onPressAction }) {
  const navigation = useNavigation();

  if (theme === "redirectlogin") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderColor: "#9384D7",
            borderRadius: 18,
            margin: 10,
            width: 150,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialCommunityIcons name={"login"} size={20} />

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "consulta") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderColor: "#9384D7",
            borderRadius: 18,
            margin: 10,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => navigation.navigate("Login")}
        >
          <MaterialCommunityIcons name={"progress-clock"} size={20} />

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "redirectprofile") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderColor: "#9384D7",
            borderRadius: 18,
            margin: 10,
            width: 150,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => navigation.navigate("Profile")}
        >
          <MaterialCommunityIcons name={"login"} size={20} />

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "register") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderColor: "#9384D7",
            borderRadius: 18,
            margin: 10,
            width: 150,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPressAction}
        >
          <MaterialCommunityIcons name={"signature-freehand"} size={20} />

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "login") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderColor: "#9384D7",
            borderRadius: 18,
            margin: 10,
            width: 150,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPressAction}
        >
          <MaterialCommunityIcons name={"signature-freehand"} size={20} />

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "menu") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 4,
            borderColor: "#9384D7",
            borderRadius: 18,
            width: 150,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={() => navigation.navigate("AllMenus")}
        >
          <MaterialCommunityIcons name={"menu"} size={20} />

          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "home") {
    return (
      <View style={[styles.buttonContainer]}>
        <Pressable
          style={[styles.button]}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialCommunityIcons
            name={"keyboard-backspace"}
            size={20}
            color={"#8C79E4"}
          />

          <Text style={[styles.buttonLabel, { color: "#8C79E4" }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "blog") {
    return (
      <View
        style={[
          styles.buttonContainer,
          {
            borderWidth: 2,
            borderColor: "#9384D7",
            borderRadius: 18,
            margin: 10,
            minWidth: 100,
            width: "20%",
            height: 50,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: BaseColors.secondary }]}
          onPress={onPressAction}
        >
          <MaterialCommunityIcons
            name={"notebook-multiple"}
            size={20}
            color={"white"}
          />

          <Text style={[styles.buttonLabel, { color: "white" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }
  if (theme === "returnTop") {
    return (
      <View
        style={[
          {
            width: 40,
            height: 20,
            marginHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 2,
            borderColor: "#9384D7",
            borderRadius: 18,
            margin: 10,
          },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: BaseColors.secondary }]}
          onPress={onPressAction}
        >
          <MaterialCommunityIcons
            name={"upload-multiple"}
            size={20}
            color={"white"}
          />

          <Text style={[styles.buttonLabel, { color: "white" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    borderRadius: 10,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: "#8C79E4",
    fontSize: 16,
  },
});

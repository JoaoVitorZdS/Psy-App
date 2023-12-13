import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { BaseColors } from "../GlobalValues";

const BlogPostModal = ({ visible, closeModal, post }) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00000080",
        }}
      >
        <View style={styles.blogPostImageContainer}>
          <View style={styles.closeContainer}>
            <TouchableOpacity onPress={closeModal}>
              <MaterialCommunityIcons
                name={"close"}
                size={20}
                color={BaseColors.secondary}
              />
            </TouchableOpacity>
          </View>
          <Image
            style={styles.blogPostImage}
            source={require("../../Assets/Candle.jpg")}
          ></Image>
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            width: "80%",
            marginTop: 25,
          }}
        >
          <Text>{post.title}</Text>
          <Text>{post.content}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default BlogPostModal;

const styles = StyleSheet.create({
  blogPostImageContainer: {
    width: "90%",
    height: "50%",
    borderRadius: 9,
    justifyContent: "center",
    alignItems: "center",
  },
  blogPostImage: {
    width: "90%",
    height: "100%",
    borderRadius: 9,
  },
  closeContainer: {
    backgroundColor: BaseColors.primary,
    zIndex: 1,
    width: 25,
    height: 25,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: "5%",
    top: 4,
  },
});

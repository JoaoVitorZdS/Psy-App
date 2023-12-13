import React, { useEffect, useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { FIREBASE_AUTH } from "../../../../firebaseconfig";
import { HomeScreenWebStyles } from "./stylesWeb";
import HeaderWeb from "../../Web/HeaderWeb.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { BaseColors } from "../../GlobalValues";
import Button from "../../ButtonsHomePage";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import BlogPostModal from "../../Web/ModalPost";

const stylesWeb = HomeScreenWebStyles;
export default function WebHomePage() {
  const user = FIREBASE_AUTH.currentUser;
  const [refreshing, setRefreshing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user); // Check user's login status initially
  const [expandedItems, setExpandedItems] = useState({
    tests: false,
    tests2: false,
    help: false,
    help2: false,
    // Add more keys if needed for other sections
  });
  const [blogPosts, setBlogPosts] = useState([]);
  const firestore = getFirestore();
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const refreshPage = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 100); // Adjust the delay as needed

    // Update the isLoggedIn state based on user's login status
    setIsLoggedIn(!!user);
  }, [user]); // Include user in the dependency array

  useEffect(() => {
    // Set the isLoggedIn state initially when the component mounts
    setIsLoggedIn(!!user);
  }, [user]);

  useFocusEffect(refreshPage); // Run the effect when the screen comes into focus

  const toggleItemExpansion = (itemKey) => {
    setExpandedItems(" ");
    setExpandedItems((prevState) => ({
      ...prevState,
      [itemKey]: !prevState[itemKey],
    }));
  };

  useEffect(() => {
    // Fetch data from Firestore
    const fetchBlogPosts = async () => {
      try {
        const usersQuery = query(collection(firestore, "Articles"));
        const querySnapshot = await getDocs(usersQuery);

        if (!querySnapshot.empty) {
          const postData = querySnapshot.docs.map((doc) => doc.data());
          setBlogPosts(postData);
        }
      } catch (error) {
        console.error("Error fetching blog posts: ", error);
      }
    };

    fetchBlogPosts();
  }, []);

  const openModal = (post) => {
    setSelectedPost(post);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const renderBlogPostCards = () => {
    console.log(blogPosts);
    return blogPosts.map((post) => (
      <TouchableOpacity
        key={post.title}
        style={stylesWeb.blogPostCard}
        onPress={() => openModal(post)}
      >
        <Image
          style={stylesWeb.blogPostImage}
          source={require("../../../Assets/Candle.jpg")}
        ></Image>
        <Text style={stylesWeb.blogPostTitle}>{post.title}</Text>
        <Text
          numberOfLines={4}
          ellipsizeMode="tail"
          style={stylesWeb.blogPostContent}
        >
          {post.content}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView style={stylesWeb.container}>
      <HeaderWeb />
      <View style={stylesWeb.contentBlocks}>
        <View style={stylesWeb.firstBlock}>
          <Image
            style={stylesWeb.backgroundFirstBlock}
            source={require("../../../Assets/FeminineEnergy2.png")}
          ></Image>
          <View
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          ></View>
          <View style={stylesWeb.containerimageFirstBlock}>
            <View
              style={{
                width: "35%",
                height: "100%",
                paddingHorizontal: 25,
                borderRadius: 25,
                justifyContent: "space-between",
                marginLeft: "15%",
                paddingTop: "1%",

                backgroundColor: "#0000009f",
              }}
            >
              <Text style={stylesWeb.titleFirstBlock}>
                Aqui você encontra a ajuda que tanto precisa!
              </Text>
              <Text style={stylesWeb.textFirstBlock}>
                Desde artigos no nosso{" "}
                <Text style={{ color: BaseColors.tertiary }}>Blog</Text>, à{" "}
                <Text
                  style={{
                    textDecorationStyle: "solid",
                    textDecorationLine: "underline",
                    textDecorationColor: BaseColors.tertiary,
                  }}
                >
                  testes rápidos
                </Text>{" "}
                para te colocar no caminho certo com ajuda profissional!
              </Text>
              <View style={stylesWeb.buttonContainerFirstBlock}>
                <Button theme="blog" label={"Blog"} onPress={refreshPage} />
                <Button theme="blog" label={"Blog"} onPress={refreshPage} />
                <Button theme="blog" label={"Blog"} onPress={refreshPage} />
              </View>
            </View>
          </View>
        </View>
        <View style={stylesWeb.secondBlock}>
          <View
            style={{
              width: "100%",
              height: "10%",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Text style={stylesWeb.titleSecondBlock}>PARA VOCÊ</Text>
          </View>
          <View style={stylesWeb.secondBlockCardContainer}>
            <View style={stylesWeb.secondBlockCards}>
              <View style={stylesWeb.secondBlockCardsTitlesContainer}>
                <Text style={stylesWeb.secondBlockCardsTitles}>
                  <MaterialCommunityIcons name={"clipboard-list"} size={30} />
                  TESTES RÁPIDOS
                </Text>
              </View>
              <TouchableOpacity
                style={stylesWeb.secondBlockCardsContentShrinked}
                onPress={() => toggleItemExpansion("tests")}
              >
                <MaterialCommunityIcons
                  name={"arrow-down-bold-hexagon-outline"}
                  size={30}
                  color="white"
                />
                <Text style={stylesWeb.textCardShrinked}>Teste Psicologia</Text>
              </TouchableOpacity>
              {expandedItems["tests"] && (
                <>
                  <TouchableOpacity
                    style={stylesWeb.secondBlockCardsContentExpanded}
                  >
                    <View style={{ width: 30 }}>
                      <MaterialCommunityIcons
                        name={"arrow-right-bold-hexagon-outline"}
                        size={30}
                        color="white"
                        onPress={() => toggleItemExpansion("")}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* Additional content when expanded */}
                  {/* ... */}
                </>
              )}
              <TouchableOpacity
                style={stylesWeb.secondBlockCardsContentShrinked}
                onPress={() => toggleItemExpansion("tests2")}
              >
                <MaterialCommunityIcons
                  name={"arrow-down-bold-hexagon-outline"}
                  size={30}
                  color="white"
                />
                <Text style={stylesWeb.textCardShrinked}>Teste Advocacia</Text>
              </TouchableOpacity>
              {expandedItems["tests2"] && (
                <>
                  <TouchableOpacity
                    style={stylesWeb.secondBlockCardsContentExpanded}
                  >
                    <View style={{ width: 30 }}>
                      <MaterialCommunityIcons
                        name={"arrow-right-bold-hexagon-outline"}
                        size={30}
                        color="white"
                        onPress={() => toggleItemExpansion("")}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* Additional content when expanded */}
                  {/* ... */}
                </>
              )}
              <TouchableOpacity
                style={stylesWeb.secondBlockCardsContentShrinked}
                onPress={() => toggleItemExpansion("tests3")}
              >
                <MaterialCommunityIcons
                  name={"arrow-down-bold-hexagon-outline"}
                  size={30}
                  color="white"
                />
                <Text style={stylesWeb.textCardShrinked}>Teste Advocacia</Text>
              </TouchableOpacity>
              {expandedItems["tests3"] && (
                <>
                  <TouchableOpacity
                    style={stylesWeb.secondBlockCardsContentExpanded}
                  >
                    <View style={{ width: 30 }}>
                      <MaterialCommunityIcons
                        name={"arrow-right-bold-hexagon-outline"}
                        size={30}
                        color="white"
                        onPress={() => toggleItemExpansion("")}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* Additional content when expanded */}
                  {/* ... */}
                </>
              )}
              <TouchableOpacity
                style={stylesWeb.secondBlockCardsContentShrinked}
                onPress={() => toggleItemExpansion("tests4")}
              >
                <MaterialCommunityIcons
                  name={"arrow-down-bold-hexagon-outline"}
                  size={30}
                  color="white"
                />
                <Text style={stylesWeb.textCardShrinked}>Teste Advocacia</Text>
              </TouchableOpacity>
              {expandedItems["tests4"] && (
                <>
                  <TouchableOpacity
                    style={stylesWeb.secondBlockCardsContentExpanded}
                  >
                    <View style={{ width: 30 }}>
                      <MaterialCommunityIcons
                        name={"arrow-right-bold-hexagon-outline"}
                        size={30}
                        color="white"
                        onPress={() => toggleItemExpansion("")}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* Additional content when expanded */}
                  {/* ... */}
                </>
              )}
            </View>
            <View style={stylesWeb.secondBlockCards}>
              <View style={stylesWeb.secondBlockCardsTitlesContainer}>
                <Text style={stylesWeb.secondBlockCardsTitles}>
                  <MaterialCommunityIcons name={"hand-heart"} size={30} />
                  AJUDA PROFISSIONAL
                </Text>
              </View>
              <TouchableOpacity
                style={stylesWeb.secondBlockCardsContentShrinked}
                onPress={() => toggleItemExpansion("help")}
              >
                <MaterialCommunityIcons
                  name={"arrow-down-bold-hexagon-outline"}
                  size={30}
                  color="white"
                />
                <Text style={stylesWeb.textCardShrinked}>
                  Agende uma consulta
                </Text>
              </TouchableOpacity>
              {expandedItems["help"] && (
                <>
                  <TouchableOpacity
                    style={stylesWeb.secondBlockCardsContentExpanded}
                  >
                    <View style={{ width: 30 }}>
                      <MaterialCommunityIcons
                        name={"arrow-right-bold-hexagon-outline"}
                        size={30}
                        color="white"
                        onPress={() => toggleItemExpansion(" ")}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* Additional content when expanded */}
                  {/* ... */}
                </>
              )}
              <TouchableOpacity
                style={stylesWeb.secondBlockCardsContentShrinked}
                onPress={() => toggleItemExpansion("help2")}
              >
                <MaterialCommunityIcons
                  name={"arrow-down-bold-hexagon-outline"}
                  size={30}
                  color="white"
                />
                <Text style={stylesWeb.textCardShrinked}>
                  Agende uma consulta
                </Text>
              </TouchableOpacity>
              {expandedItems["help2"] && (
                <>
                  <TouchableOpacity
                    style={stylesWeb.secondBlockCardsContentExpanded}
                  >
                    <View style={{ width: 30 }}>
                      <MaterialCommunityIcons
                        name={"arrow-right-bold-hexagon-outline"}
                        size={30}
                        color="white"
                        onPress={() => toggleItemExpansion(" ")}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* Additional content when expanded */}
                  {/* ... */}
                </>
              )}
              <TouchableOpacity
                style={stylesWeb.secondBlockCardsContentShrinked}
                onPress={() => toggleItemExpansion("help3")}
              >
                <MaterialCommunityIcons
                  name={"arrow-down-bold-hexagon-outline"}
                  size={30}
                  color="white"
                />
                <Text style={stylesWeb.textCardShrinked}>
                  Agende uma consulta
                </Text>
              </TouchableOpacity>
              {expandedItems["help3"] && (
                <>
                  <TouchableOpacity
                    style={stylesWeb.secondBlockCardsContentExpanded}
                  >
                    <View style={{ width: 30 }}>
                      <MaterialCommunityIcons
                        name={"arrow-right-bold-hexagon-outline"}
                        size={30}
                        color="white"
                        onPress={() => toggleItemExpansion(" ")}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* Additional content when expanded */}
                  {/* ... */}
                </>
              )}
              <TouchableOpacity
                style={stylesWeb.secondBlockCardsContentShrinked}
                onPress={() => toggleItemExpansion("help4")}
              >
                <MaterialCommunityIcons
                  name={"arrow-down-bold-hexagon-outline"}
                  size={30}
                  color="white"
                />
                <Text style={stylesWeb.textCardShrinked}>
                  Se conecte conosco!
                </Text>
              </TouchableOpacity>
              {expandedItems["help4"] && (
                <>
                  <TouchableOpacity
                    style={stylesWeb.secondBlockCardsContentExpanded}
                  >
                    <View style={{ width: 30 }}>
                      <MaterialCommunityIcons
                        name={"arrow-right-bold-hexagon-outline"}
                        size={30}
                        color="white"
                        onPress={() => toggleItemExpansion(" ")}
                      />
                    </View>
                  </TouchableOpacity>
                  {/* Additional content when expanded */}
                  {/* ... */}
                </>
              )}
            </View>
          </View>
        </View>
        <View style={stylesWeb.thirdBlock}>
          <View
            style={{
              width: "100%",
              height: "10%",
              justifyContent: "center",
              alignContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Text style={stylesWeb.titleSecondBlock}>BLOG</Text>
          </View>

          <View style={stylesWeb.blogPostContainer}>
            {renderBlogPostCards()}
            {selectedPost && ( // Check if selectedPost exists before rendering the modal
              <BlogPostModal
                visible={isModalVisible}
                closeModal={closeModal}
                post={selectedPost}
              />
            )}
          </View>
        </View>
        <View style={stylesWeb.fourthBlock}>
          <View style={stylesWeb.footerLeft}>
            <Text>© Copyright 2024 Zenit | HelpMe</Text>
          </View>
          <View style={stylesWeb.footerRight}>
            <View style={stylesWeb.socialTab}>
              <Pressable style={stylesWeb.socialIcon}>
                <MaterialCommunityIcons
                  name={"facebook"}
                  size={20}
                  color={BaseColors.secondary}
                />
              </Pressable>
              <Pressable style={stylesWeb.socialIcon}>
                <MaterialCommunityIcons
                  name={"instagram"}
                  size={20}
                  color={BaseColors.secondary}
                />
              </Pressable>
              <Pressable style={stylesWeb.socialIcon}>
                <MaterialCommunityIcons
                  name={"twitter"}
                  size={20}
                  color={BaseColors.secondary}
                />
              </Pressable>
              <Pressable style={stylesWeb.socialIcon}>
                <MaterialCommunityIcons
                  name={"gmail"}
                  size={20}
                  color={BaseColors.secondary}
                />
              </Pressable>
            </View>
            <Button theme="returnTop" onPress={refreshPage} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

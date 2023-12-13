import { StyleSheet } from "react-native";
import { BaseColors } from "../../GlobalValues";

export const HomeScreenWebStyles = StyleSheet.create({
  container: {
    backgroundColor: BaseColors.primary,
    flex: 1,
    width: "100%",
  },
  background: {
    width: "100%",
    height: "100%",
  },

  header: {
    backgroundColor: BaseColors.primary,
    position: "absolute",
    top: 0,
    zIndex: 2,
    width: "100%",
    minWidth: 320,
    minHeight: 100,
    height: 110,
    position: "relative",
    borderRadius: 10,
    display: "flex",
    flexWrap: "wrap",
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "space-between",
    shadowColor: "#000", // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 20, // Altura da sombra
    },
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    elevation: 5, // Elevação no Android para a sombra ser visível
  },
  headerLogo: {
    width: "30%",
    height: "95%",
    marginLeft: "1%",
  },
  headerNameContainer: {
    width: "50%",
    height: "95%",
    marginLeft: "1%",
  },
  headerName: {
    fontSize: 32,
    fontWeight: "700",
    fontStyle: "italic",
    fontFamily: "fantasy",
  },
  headerButtons: {
    width: "30%",
    height: "100%",
  },
  buttonContainer: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row-reverse",
    paddingRight: 45,
  },
  buttonContainerLogged: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row-reverse",
    paddingRight: "55%",
  },
  image: {
    height: "100%",
    minWidth: "12%",
    width: "50%",
    minWidth: 95,
    borderRadius: 10,
    resizeMode: "contain",
  },
  contentBlocks: {
    width: "100%",
    height: "200vh",
    display: "flex",
    gap: 100,

    alignContent: "baseline",

    flexWrap: "wrap",
    flexDirection: "row",
  },
  firstBlock: {
    backgroundColor: "transparent",
    width: "100%",
    minWidth: 320,
    height: "35%",

    shadowColor: "#000", // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 20, // Altura da sombra
    },
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 8, // Raio da sombra
    elevation: 5, // Elevação no Android para a sombra ser visível
  },
  backgroundFirstBlock: {
    position: "absolute",

    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  containerimageFirstBlock: {
    width: "100%",
    height: "100%",
    padding: 15,

    alignContent: "flex-end",
    display: "flex",
    flexWrap: "wrap",
  },
  imageFirstBlock: {
    width: "40%",
    height: "100%",
  },
  titleFirstBlock: {
    color: BaseColors.text,
    fontSize: "1.5em",
    fontWeight: 500,
    fontFamily: "Courier New",
    borderColor: BaseColors.secondary,
    borderRadius: 15,
    borderWidth: 2,
    padding: 5,
    marginBottom: 25,
    textAlign: "center",
  },
  textFirstBlock: {
    color: BaseColors.text,
    fontSize: "1.3em",
    fontFamily: "monospace",
  },
  buttonContainerFirstBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  secondBlock: {
    backgroundColor: "transparent",
    alignItems: "center",
    gap: 15,
    width: "100%",
    height: "25%",
    marginBottom: "15%",
  },
  titleSecondBlock: {
    color: BaseColors.secondary,
    fontFamily: "fantasy",
    fontSize: 26,
    borderColor: BaseColors.secondary,
    borderRadius: 16,
    borderWidth: 2,
    padding: 5,
    marginVertical: 25,
    textAlign: "center",
    width: "30%",
  },
  textCardShrinked: {
    color: BaseColors.text,
    fontSize: "22",
  },
  textCardExpanded: {
    color: BaseColors.text,
    fontSize: "22",
  },
  secondBlockCardContainer: {
    width: "100%",
    height: "98%",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    gap: 15,
  },
  secondBlockCards: {
    width: "25%",
    minWidth: 265,
    height: "99%",
    shadowColor: "#000", // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 20, // Altura da sombra
    },
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 8, // Raio da sombra
    elevation: 5, // Elevação no Android para a sombra ser visível
  },
  secondBlockCardsTitlesContainer: {
    width: "100%",
    height: "20%",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    alignContent: "center",
    justifyContent: "center",

    flexWrap: "wrap",
    backgroundColor: BaseColors.tertiary,
  },
  secondBlockCardsContentShrinked: {
    width: "100%",
    height: "20%",
    backgroundColor: BaseColors.tertiary,
    borderTopWidth: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  secondBlockCardsContentExpanded: {
    width: "100%",
    height: "40%",
    backgroundColor: BaseColors.secondary,
    borderTopWidth: 1,
    justifyContent: "center",
    paddingHorizontal: 5,
    shadowColor: "#000", // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 20, // Altura da sombra
    },
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 16, // Raio da sombra
    elevation: 5, // Elevação no Android para a sombra ser visível
  },
  secondBlockCardsTitles: {
    color: BaseColors.primary,
    justifyContent: "center",
    fontFamily: "sans-serif",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
  },
  thirdBlock: {
    backgroundColor: BaseColors.primary,
    alignItems: "center",
    width: "100%",
    height: "35%",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 15,
    paddingLeft: "2%",
  },
  blogPostContainer: {
    flexWrap: "nowrap",
    flexDirection: "row",

    gap: 15,
    width: "100%",
    height: "95%",
  },
  blogPostCard: {
    overflow: "hidden",
    flexWrap: "nowrap",
    width: "30%",
    height: "95%",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000", // Cor da sombra
    shadowOffset: {
      width: 0,
      height: 20, // Altura da sombra
    },
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 16, // Raio da sombra
    elevation: 5, // Elevação no Android para a sombra ser visível
  },
  blogPostImage: {
    width: "90%",
    height: "50%",
    borderRadius: 9,
  },
  blogPostTitle: {
    color: BaseColors.secondary,
    fontSize: 24,
  },
  blogPostContent: {
    color: BaseColors.tertiary,
    fontSize: 16,
  },
  fourthBlock: {
    backgroundColor: BaseColors.primary,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "3%",
    flexDirection: "row",
    paddingHorizontal: "10%",
    borderTopColor: BaseColors.secondary,
    borderTopWidth: 1,
    borderStyle: "dotted",
  },
  footerRight: {
    width: "50%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  socialTab: {
    flexDirection: "row-reverse",
    gap: 5,
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  footerLeft: {
    width: "50%",
    height: "100%",
  },
});

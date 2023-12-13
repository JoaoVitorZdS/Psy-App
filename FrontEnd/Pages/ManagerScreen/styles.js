import { StyleSheet } from "react-native";
export const ManagerScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1D4D6",
    alignItems: "center",
    justifyContent: "space-between",
  },
  warningsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalWrapper: {
    zIndex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#495057bf",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: "100%",
    minHeight: "80%",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#9384D7",
    borderRadius: 10,

    padding: 15,

    backgroundColor: "#F1D4D6",
  },
  formHeaderText: {
    color: "#9384D7",
    alignSelf: "center",
    paddingBottom: 50,
    fontSize: 16,
    fontWeight: 600,
  },
  createButton: {
    width: 100,
    justifyContent: "center",
    alignContent: "center",

    margin: 4,
  },
  buttonsFormContainer: {
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 10,
    flexWrap: "wrap",
  },
  closeButtonModal: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginBottom: 50,
    alignSelf: "center",
  },
  createButtonText: {
    borderBottomWidth: 2,
    borderTopWidth: 2,
    textAlign: "center",
    borderColor: "#9384D7",

    padding: 5,
    color: "#9384D7",
  },
  productInput: {
    width: "90%",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#9384D7",
    padding: 9,
    marginVertical: 5,

    backgroundColor: "#ffd33d09",
    alignSelf: "center",
    color: "#9384D7",
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
  },
  noAccessText: {
    color: "#9384D7",
    fontSize: 32,
  },
  addProductButtonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  productsListWrapper: {
    height: "45%",
  },
  productsListContainer: {
    height: "100%",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#ffd33d",

    padding: 15,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  productCard: {
    width: 250,
    height: "100%",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#ffd33d",

    padding: 10,
    alignContent: "center",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  productImage: {
    width: "60%",
    height: "50%",
    marginTop: 5,

    alignSelf: "flex-start",
  },
  productTitle: {
    color: "#9384D7",
  },
  productDescription: {
    color: "#9384D7",
  },
  productPrice: {
    color: "#9384D7",
  },

  profileImageContainer: {
    width: "40%",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
  },
  profileInformation: {
    flexDirection: "row",
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ffd33d",
    borderBottomWidth: 2,
    borderStyle: "dashed",
  },

  profileTextContainer: {
    paddingLeft: "5%",
    width: "60%",
    height: "75%",
    borderLeftWidth: 2,
    borderStyle: "dashed",
    borderLeftColor: "#ffd33d",
  },
  profileText: {
    color: "#9384D7",
  },
  editPenContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

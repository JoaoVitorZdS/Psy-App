import { StyleSheet } from "react-native";

export const ProfileScreenStyles = StyleSheet.create({
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
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  noAccessText: {
    color: "white",
    fontSize: 32,
  },

  profileImageContainer: {
    width: "30%",
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  profileInformation: {
    flexDirection: "row",
    width: "100%",
    height: 130,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#8C79E4",
  },

  profileTextContainer: {
    paddingLeft: "5%",
    width: "60%",
    height: "100%",
    padding: 10,
  },
  profileText: {
    color: "white",
    fontWeight: "600",
  },
  editPenContainer: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  modalWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "#495057bf",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    width: "95%",
    height: "50%",
    backgroundColor: "#F1D4D6",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    borderRadius: 15,
  },
  modalInput: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 15,
    borderWidth: 3,
    padding: 5,

    borderColor: "#F1D4D6",
    marginBottom: 10,
  },
  buttonOk: {
    width: 100,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: "#8C79E4",
    borderRadius: 25,
  },
  textOk: {
    color: "#8C79E4",
    fontStyle: "italic",
    fontSize: 18,
  },
});

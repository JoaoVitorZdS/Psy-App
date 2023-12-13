import { StyleSheet } from "react-native";

export const CartScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: "#F1D4D6",
    flex: 1,
    paddingTop: 20,
    overflow: "hidden",
  },
  emptyContainer: {
    alignItems: "center",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  itemInfo: {
    width: "100%",
    flex: 1,
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemLabel: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  itemQuantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: 55,
    height: 55,
  },
  itemQuantity: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  itemPriceContainer: {},
  itemPrice: {
    color: "#ffd33d",
    fontSize: 14,
    marginLeft: 10,
  },
  footer: {
    borderTopWidth: 2,
    borderTopColor: "#8C79E4",
    borderStyle: "dashed",
    height: 130,
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  footerText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#8C79E4",
    width: "100%",
    justifyContent: "space-between",
  },
  footerTextsecondary: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#8C79E4",
    width: "100%",
    justifyContent: "flex-end",
  },
  pricing: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    // marginLeft: 50,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  button: {
    borderRadius: 15,
  },
  clearButton: {
    color: "black",
  },
  buyButton: {},
  quantitybutton: {
    width: 25,
    height: 25,
    borderRadius: 30,
    backgroundColor: "#ffd33d",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#8C79E4",
    fontSize: 18,
  },
});

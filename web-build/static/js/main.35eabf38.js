/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 3295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/expo/build/launch/registerRootComponent.js + 5 modules
var registerRootComponent = __webpack_require__(4178);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(5004);
// EXTERNAL MODULE: ./node_modules/@react-navigation/native/lib/module/NavigationContainer.js + 9 modules
var NavigationContainer = __webpack_require__(8683);
// EXTERNAL MODULE: ./node_modules/@react-navigation/native-stack/lib/module/navigators/createNativeStackNavigator.js + 20 modules
var createNativeStackNavigator = __webpack_require__(5543);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(2982);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2629);
;// CONCATENATED MODULE: ./FrontEnd/contexts/CartContext.jsx
var CartContext=(0,react.createContext)();function CartProvider(_ref){var children=_ref.children;var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray["default"])(_useState,2),cartItems=_useState2[0],setCartItems=_useState2[1];var clearCart=function clearCart(){setCartItems([]);};var addToCart=function addToCart(item){setCartItems(function(prevCartItems){return[].concat((0,toConsumableArray["default"])(prevCartItems),[item]);});};return (0,jsx_runtime.jsx)(CartContext.Provider,{value:{cartItems:cartItems,addToCart:addToCart,clearCart:clearCart},children:children});}/* harmony default export */ const contexts_CartContext = (CartContext);
// EXTERNAL MODULE: ./node_modules/firebase/auth/dist/esm/index.esm.js + 3 modules
var index_esm = __webpack_require__(6664);
// EXTERNAL MODULE: ./node_modules/firebase/app/dist/esm/index.esm.js
var esm_index_esm = __webpack_require__(4541);
// EXTERNAL MODULE: ./node_modules/firebase/firestore/dist/esm/index.esm.js + 2 modules
var dist_esm_index_esm = __webpack_require__(8981);
;// CONCATENATED MODULE: ./firebaseconfig.js
var firebaseConfig={apiKey:"AIzaSyBy_VFfxAgSQVW3xPwe9H0WZN8AuuMm5t0",authDomain:"mercadoapp-5c5d0.firebaseapp.com",databaseURL:"https://mercadoapp-5c5d0-default-rtdb.firebaseio.com",projectId:"mercadoapp-5c5d0",storageBucket:"mercadoapp-5c5d0.appspot.com",messagingSenderId:"33406065441",appId:"1:33406065441:web:35d8e2a68e886c256cbc60",measurementId:"G-DP7D88D3PZ"};var FIREBASE_APP=(0,esm_index_esm.initializeApp)(firebaseConfig);var FIREBASE_AUTH=(0,index_esm.getAuth)(FIREBASE_APP);var FIREBASE_DB=(0,dist_esm_index_esm.getFirestore)(FIREBASE_APP);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/View/index.js
var View = __webpack_require__(9385);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/SafeAreaView/index.js
var SafeAreaView = __webpack_require__(7602);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/ScrollView/index.js + 2 modules
var ScrollView = __webpack_require__(4999);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StyleSheet/index.js + 6 modules
var StyleSheet = __webpack_require__(6792);
;// CONCATENATED MODULE: ./FrontEnd/Pages/AllMenusScreen/styles.js
var AllMenusScreenStyles=StyleSheet["default"].create({container:{backgroundColor:"#231F20",flex:1,width:"100%",height:"100%"},scrollContainer:{width:"100%",maxHeight:"300%",justifyContent:"center",alignItems:"center",flexDirection:"column",flexWrap:"wrap",padding:5,marginLeft:-21},itemContainer:{}});
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Pressable/index.js + 4 modules
var Pressable = __webpack_require__(2840);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Text/index.js
var Text = __webpack_require__(1054);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Image/index.js + 2 modules
var Image = __webpack_require__(3287);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Platform/index.js
var Platform = __webpack_require__(2152);
// EXTERNAL MODULE: ./node_modules/@react-navigation/core/lib/module/index.js + 62 modules
var lib_module = __webpack_require__(1318);
// EXTERNAL MODULE: ./node_modules/react-native-toast-message/lib/index.js
var lib = __webpack_require__(890);
;// CONCATENATED MODULE: ./FrontEnd/Components/AllMenusComponents/RestaurantsMainButtons.js
var isWeb=Platform["default"].OS==="web";function RestaurantButton(_ref){var label=_ref.label,image=_ref.image;var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray["default"])(_useState,2),isPressed=_useState2[0],setIsPressed=_useState2[1];var handlePressIn=function handlePressIn(){setIsPressed(true);};var handlePressOut=function handlePressOut(){setIsPressed(false);};var navigation=(0,lib_module.useNavigation)();var user=FIREBASE_AUTH.currentUser;var buttonStyle=[styles.button,isPressed&&styles.buttonPressed,isWeb&&styles.buttonWeb];var imageURL;if(typeof image==="number"){imageURL=Image["default"].resolveAssetSource(image).uri;}else{imageURL=image;}var PreventPressWithouAccount=function PreventPressWithouAccount(){if(user){navigation.navigate(label);}else{lib["default"].show({type:"error",text1:"⚠️Atenção!",text2:"Realize o Login para Continuar!"});}};return (0,jsx_runtime.jsxs)(View["default"],{style:[styles.buttonContainer,isWeb&&styles.containerWeb],children:[(0,jsx_runtime.jsx)(Pressable["default"],{style:[styles.button,isPressed&&styles.buttonPressed],onPressIn:handlePressIn,onPressOut:handlePressOut,onPress:function onPress(){PreventPressWithouAccount();},children:(0,jsx_runtime.jsx)(View["default"],{style:[styles.imageContainer],children:(0,jsx_runtime.jsx)(Image["default"],{source:{uri:imageURL},style:styles.buttonImage})})}),(0,jsx_runtime.jsx)(Text["default"],{style:[styles.buttonLabel,{color:"#fff"}],children:label})]});}var styles=StyleSheet["default"].create({buttonContainer:{height:480,width:210,marginBottom:-220,alignItems:"center"},imageContainer:{},containerWeb:{width:230},button:{width:180,height:180,borderRadius:15,overflow:"hidden"},buttonLabel:{color:"#fff",fontSize:25},buttonImage:{width:180,height:195,borderRadius:15},buttonPressed:{transform:[{scale:1.05}]},buttonWeb:{shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:0.25,shadowRadius:3.84,elevation:5}});
;// CONCATENATED MODULE: ./FrontEnd/Pages/AllMenusScreen/AllMenusScreen.jsx
var firestore=(0,dist_esm_index_esm.getFirestore)();function AllMenusScreen(_ref){var navigation=_ref.navigation;var route=(0,lib_module.useRoute)();var _React$useState=react.useState(false),_React$useState2=(0,slicedToArray["default"])(_React$useState,2),refreshing=_React$useState2[0],setRefreshing=_React$useState2[1];var _React$useState3=react.useState([]),_React$useState4=(0,slicedToArray["default"])(_React$useState3,2),menuData=_React$useState4[0],setMenuData=_React$useState4[1];var fetchData=function(){var _ref2=(0,asyncToGenerator["default"])(function*(){try{var usersQuery=(0,dist_esm_index_esm.query)((0,dist_esm_index_esm.collection)(firestore,"AllRestaurantsData"));var querySnapshot=yield (0,dist_esm_index_esm.getDocs)(usersQuery);if(!querySnapshot.empty){var fetchedData=querySnapshot.docs.map(function(doc){return doc.data();});setMenuData(fetchedData);}}catch(error){console.error("Error fetching data: ",error);}});return function fetchData(){return _ref2.apply(this,arguments);};}();var refreshPage=function refreshPage(){setRefreshing(true);setTimeout(function(){setRefreshing(false);},100);};(0,react.useEffect)(function(){if(route.params&&route.params.refresh){setRefreshing(true);fetchData().then(function(){return setRefreshing(false);});}fetchData();},[route.params]);(0,lib_module.useFocusEffect)(function(){refreshPage();});return (0,jsx_runtime.jsx)(SafeAreaView["default"],{style:AllMenusScreen_styles.container,children:(0,jsx_runtime.jsx)(ScrollView["default"],{contentContainerStyle:AllMenusScreen_styles.scrollContainer,children:menuData.map(function(item,index){return (0,jsx_runtime.jsx)(View["default"],{style:AllMenusScreen_styles.itemContainer,children:(0,jsx_runtime.jsx)(RestaurantButton,{label:item.title,image:item.logo})},index);})})});}var AllMenusScreen_styles=AllMenusScreenStyles;
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__(4942);
;// CONCATENATED MODULE: ./FrontEnd/Pages/CartScreen/styles.js
var CartScreenStyles=StyleSheet["default"].create({container:{backgroundColor:"#231F20",flex:1,paddingTop:20,overflow:"hidden"},emptyContainer:{alignItems:"center"},cartItem:{flexDirection:"row",alignItems:"center",paddingVertical:10,paddingHorizontal:10,borderBottomWidth:1,borderBottomColor:"#ccc"},itemImage:{width:50,height:50,borderRadius:25},itemInfo:{width:"100%",flex:1,marginLeft:20,flexDirection:"row",alignItems:"center",justifyContent:"space-between"},itemLabel:{color:"#fff",fontSize:16,fontWeight:"bold"},itemQuantityContainer:{flexDirection:"row",alignItems:"center",width:55,height:55},itemQuantity:{color:"#fff",fontSize:18,fontWeight:"bold",marginHorizontal:10},itemPriceContainer:{},itemPrice:{color:"#ffd33d",fontSize:14,marginLeft:10},footer:{borderTopWidth:2,borderTopColor:"#ccc",borderStyle:"dashed",height:130,width:"100%",paddingVertical:15,paddingHorizontal:15,alignItems:"center"},footerText:{fontWeight:"bold",fontSize:16,color:"#fff",width:"100%",justifyContent:"space-between"},footerTextsecondary:{fontWeight:"bold",fontSize:10,color:"#fff",width:"100%",justifyContent:"flex-end"},pricing:{flexDirection:"row",justifyContent:"space-between",width:"100%"},buttonContainer:{width:"100%",flexDirection:"row",justifyContent:"space-between",marginTop:10},button:{borderRadius:15},clearButton:{color:"black"},buyButton:{},quantitybutton:{width:25,height:25,borderRadius:30,backgroundColor:"#ffd33d",justifyContent:"center",alignItems:"center"},emptyCart:{flex:1,justifyContent:"center",alignItems:"center",color:"#fff",fontSize:18}});
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Button/index.js
var Button = __webpack_require__(3693);
;// CONCATENATED MODULE: ./FrontEnd/Pages/CartScreen/CartScreen.jsx
function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){(0,defineProperty["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function CartScreen(){var _useContext=(0,react.useContext)(contexts_CartContext),cartItems=_useContext.cartItems,setCartItems=_useContext.setCartItems;var uniqueCartItems=Array.from(new Set(cartItems.map(function(item){return item.label;}))).map(function(label){var itemsWithLabel=cartItems.filter(function(item){return item.label===label;});var quantity=itemsWithLabel.length;return _objectSpread(_objectSpread({},itemsWithLabel[0]),{},{quantity:quantity});});var handleClearCart=function handleClearCart(){setCartItems([]);lib["default"].show({type:"info",text1:"♻️ O Carrinho está vazio!"});};var handleFinishPurchase=function handleFinishPurchase(){var user=FIREBASE_AUTH.currentUser;if(user){lib["default"].show({type:"success",text1:"✔️ Seu pedido foi realizado!",text2:""});}else{lib["default"].show({type:"error",text1:"⚠️ Atenção!",text2:"Realize o Login para Continuar!"});}};var handleIncrementQuantity=function handleIncrementQuantity(item){var updatedCartItems=(0,toConsumableArray["default"])(cartItems);var existingItemIndex=updatedCartItems.findIndex(function(cartItem){return cartItem.label===item.label;});if(existingItemIndex===-1){updatedCartItems[existingItemIndex].quantity+=1;}else{updatedCartItems.push(_objectSpread(_objectSpread({},item),{},{quantity:1}));}setCartItems(updatedCartItems);};var handleDecrementQuantity=function handleDecrementQuantity(item){var updatedCartItems=(0,toConsumableArray["default"])(cartItems);for(var i=updatedCartItems.length-1;i>=0;i--){if(updatedCartItems[i].label===item.label){if(updatedCartItems[i].quantity>1){updatedCartItems[i].quantity-=1;}else{updatedCartItems.splice(i,1);}break;}}setCartItems(updatedCartItems);};return (0,jsx_runtime.jsxs)(SafeAreaView["default"],{style:[CartScreen_styles.container,cartItems.length===0&&CartScreen_styles.emptyContainer],children:[cartItems.length===0?(0,jsx_runtime.jsx)(Text["default"],{style:CartScreen_styles.emptyCart,children:"Carrinho vazio"}):(0,jsx_runtime.jsx)(ScrollView["default"],{children:uniqueCartItems.map(function(item,index){return (0,jsx_runtime.jsxs)(View["default"],{style:CartScreen_styles.cartItem,children:[(0,jsx_runtime.jsx)(Image["default"],{source:item.image,style:CartScreen_styles.itemImage}),(0,jsx_runtime.jsxs)(View["default"],{style:CartScreen_styles.itemInfo,children:[(0,jsx_runtime.jsxs)(View["default"],{style:CartScreen_styles.itemQuantityContainer,children:[(0,jsx_runtime.jsx)(Pressable["default"],{onPress:function onPress(){return handleDecrementQuantity(item);},style:CartScreen_styles.quantitybutton,children:(0,jsx_runtime.jsx)(Text["default"],{children:"-"})}),(0,jsx_runtime.jsx)(Text["default"],{style:CartScreen_styles.itemQuantity,children:item.quantity}),(0,jsx_runtime.jsx)(Pressable["default"],{onPress:function onPress(){return handleIncrementQuantity(item);},style:CartScreen_styles.quantitybutton,children:(0,jsx_runtime.jsx)(Text["default"],{children:"+"})})]}),(0,jsx_runtime.jsx)(Text["default"],{style:CartScreen_styles.itemLabel,children:item.label}),(0,jsx_runtime.jsx)(View["default"],{style:CartScreen_styles.itemPriceContainer,children:(0,jsx_runtime.jsxs)(Text["default"],{style:CartScreen_styles.itemPrice,children:["R$",item.price*item.quantity]})})]})]},index);})}),(0,jsx_runtime.jsxs)(View["default"],{style:CartScreen_styles.footer,children:[(0,jsx_runtime.jsxs)(View["default"],{style:CartScreen_styles.pricing,children:[(0,jsx_runtime.jsxs)(View["default"],{children:[(0,jsx_runtime.jsx)(Text["default"],{style:CartScreen_styles.footerTextsecondary,children:"Subtotal:"}),(0,jsx_runtime.jsx)(Text["default"],{style:CartScreen_styles.footerTextsecondary,children:"Taxa de servi\xE7o:"}),(0,jsx_runtime.jsx)(Text["default"],{style:CartScreen_styles.footerText,children:"Total:"})]}),(0,jsx_runtime.jsxs)(View["default"],{children:[(0,jsx_runtime.jsxs)(Text["default"],{style:CartScreen_styles.footerTextsecondary,children:["R$ ",calculateSubTotal(uniqueCartItems)]}),(0,jsx_runtime.jsxs)(Text["default"],{style:CartScreen_styles.footerTextsecondary,children:["R$ ",calculateTax(uniqueCartItems)]}),(0,jsx_runtime.jsxs)(Text["default"],{style:CartScreen_styles.footerText,children:["R$ ",calculateTotal(uniqueCartItems)]})]})]}),(0,jsx_runtime.jsxs)(View["default"],{style:CartScreen_styles.buttonContainer,children:[(0,jsx_runtime.jsx)(Button["default"],{title:"Limpar Carrinho",onPress:handleClearCart,color:"#FF0000",style:CartScreen_styles.clearButton}),(0,jsx_runtime.jsx)(Button["default"],{title:"Finalizar Compra",onPress:function onPress(){return handleFinishPurchase();},color:"#008000",style:CartScreen_styles.buyButton})]})]})]});}function calculateTotal(cartItems){var total=cartItems.reduce(function(total,item){return total+Number(item.price)*item.quantity*1.03;},0);return total.toFixed(2);}function calculateSubTotal(cartItems){var total=cartItems.reduce(function(total,item){return total+Number(item.price)*item.quantity;},0);return total.toFixed(2);}function calculateTax(cartItems){var tax=calculateTotal(cartItems)-calculateSubTotal(cartItems);return tax.toFixed(2);}var CartScreen_styles=CartScreenStyles;
// EXTERNAL MODULE: ./node_modules/expo-status-bar/build/ExpoStatusBar.js
var ExpoStatusBar = __webpack_require__(3426);
// EXTERNAL MODULE: ./node_modules/@expo/vector-icons/MaterialCommunityIcons.js
var MaterialCommunityIcons = __webpack_require__(8653);
;// CONCATENATED MODULE: ./FrontEnd/Components/ButtonsHomePage.js
function ButtonsHomePage_Button(_ref){var label=_ref.label,theme=_ref.theme,onPressAction=_ref.onPressAction;var navigation=(0,lib_module.useNavigation)();if(theme==="redirectlogin"){return (0,jsx_runtime.jsx)(View["default"],{style:[ButtonsHomePage_styles.buttonContainer,{borderWidth:4,borderColor:"#ffd33d",borderRadius:18,margin:10}],children:(0,jsx_runtime.jsxs)(Pressable["default"],{style:[ButtonsHomePage_styles.button,{backgroundColor:"#fff"}],onPress:function onPress(){return navigation.navigate("Login");},children:[(0,jsx_runtime.jsx)(MaterialCommunityIcons["default"],{name:"login",size:20}),(0,jsx_runtime.jsx)(Text["default"],{style:[ButtonsHomePage_styles.buttonLabel,{color:"#25292e"}],children:label})]})});}if(theme==="redirectprofile"){return (0,jsx_runtime.jsx)(View["default"],{style:[ButtonsHomePage_styles.buttonContainer,{borderWidth:4,borderColor:"#ffd33d",borderRadius:18,margin:10}],children:(0,jsx_runtime.jsxs)(Pressable["default"],{style:[ButtonsHomePage_styles.button,{backgroundColor:"#fff"}],onPress:function onPress(){return navigation.navigate("Profile");},children:[(0,jsx_runtime.jsx)(MaterialCommunityIcons["default"],{name:"login",size:20}),(0,jsx_runtime.jsx)(Text["default"],{style:[ButtonsHomePage_styles.buttonLabel,{color:"#25292e"}],children:label})]})});}if(theme==="register"){return (0,jsx_runtime.jsx)(View["default"],{style:[ButtonsHomePage_styles.buttonContainer,{borderWidth:4,borderColor:"#ffd33d",borderRadius:18,margin:10}],children:(0,jsx_runtime.jsxs)(Pressable["default"],{style:[ButtonsHomePage_styles.button,{backgroundColor:"#fff"}],onPress:onPressAction,children:[(0,jsx_runtime.jsx)(MaterialCommunityIcons["default"],{name:"signature-freehand",size:20}),(0,jsx_runtime.jsx)(Text["default"],{style:[ButtonsHomePage_styles.buttonLabel,{color:"#25292e"}],children:label})]})});}if(theme==="login"){return (0,jsx_runtime.jsx)(View["default"],{style:[ButtonsHomePage_styles.buttonContainer,{borderWidth:4,borderColor:"#ffd33d",borderRadius:18,margin:10}],children:(0,jsx_runtime.jsxs)(Pressable["default"],{style:[ButtonsHomePage_styles.button,{backgroundColor:"#fff"}],onPress:onPressAction,children:[(0,jsx_runtime.jsx)(MaterialCommunityIcons["default"],{name:"signature-freehand",size:20}),(0,jsx_runtime.jsx)(Text["default"],{style:[ButtonsHomePage_styles.buttonLabel,{color:"#25292e"}],children:label})]})});}if(theme==="menu"){return (0,jsx_runtime.jsx)(View["default"],{style:[ButtonsHomePage_styles.buttonContainer,{borderWidth:4,borderColor:"#ffd33d",borderRadius:18}],children:(0,jsx_runtime.jsxs)(Pressable["default"],{style:[ButtonsHomePage_styles.button,{backgroundColor:"#fff"}],onPress:function onPress(){return navigation.navigate("AllMenus");},children:[(0,jsx_runtime.jsx)(MaterialCommunityIcons["default"],{name:"menu",size:20}),(0,jsx_runtime.jsx)(Text["default"],{style:[ButtonsHomePage_styles.buttonLabel,{color:"#25292e"}],children:label})]})});}if(theme==="home"){return (0,jsx_runtime.jsx)(View["default"],{style:[ButtonsHomePage_styles.buttonContainer],children:(0,jsx_runtime.jsxs)(Pressable["default"],{style:[ButtonsHomePage_styles.button],onPress:function onPress(){return navigation.navigate("Home");},children:[(0,jsx_runtime.jsx)(MaterialCommunityIcons["default"],{name:"keyboard-backspace",size:20,color:"white"}),(0,jsx_runtime.jsx)(Text["default"],{style:[ButtonsHomePage_styles.buttonLabel,{color:"#fff"}],children:label})]})});}return (0,jsx_runtime.jsx)(View["default"],{style:ButtonsHomePage_styles.buttonContainer,children:(0,jsx_runtime.jsx)(Pressable["default"],{style:ButtonsHomePage_styles.button,onPress:function onPress(){return navigation.navigate("Register");},children:(0,jsx_runtime.jsx)(Text["default"],{style:ButtonsHomePage_styles.buttonLabel,children:label})})});}var ButtonsHomePage_styles=StyleSheet["default"].create({buttonContainer:{width:320,height:68,marginHorizontal:20,alignItems:"center",justifyContent:"center",padding:3},button:{borderRadius:10,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"},buttonIcon:{paddingRight:8},buttonLabel:{color:"#fff",fontSize:16}});
;// CONCATENATED MODULE: ./FrontEnd/Pages/HomeScreen/styles.js
var HomeScreenStyles=StyleSheet["default"].create({container:{flex:1,backgroundColor:"#231F20",alignItems:"center",justifyContent:"space-evenly"},buttonContainer:{alignItems:"center",justifyContent:"center"},imageContainer:{flex:1/8,paddingTop:58},image:{width:350,height:200,borderRadius:10}});
;// CONCATENATED MODULE: ./FrontEnd/Pages/HomeScreen/HomeScreen.jsx
var PlaceholderImage=__webpack_require__(900);function HomeScreen(_ref){var navigation=_ref.navigation,route=_ref.route;var user=FIREBASE_AUTH.currentUser;var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray["default"])(_useState,2),refreshing=_useState2[0],setRefreshing=_useState2[1];var _useState3=(0,react.useState)(!!user),_useState4=(0,slicedToArray["default"])(_useState3,2),isLoggedIn=_useState4[0],setIsLoggedIn=_useState4[1];var refreshPage=(0,react.useCallback)(function(){setRefreshing(true);setTimeout(function(){setRefreshing(false);},100);setIsLoggedIn(!!user);},[user]);(0,react.useEffect)(function(){setIsLoggedIn(!!user);},[user]);(0,lib_module.useFocusEffect)(refreshPage);return (0,jsx_runtime.jsxs)(View["default"],{style:HomeScreen_styles.container,children:[(0,jsx_runtime.jsx)(ExpoStatusBar["default"],{style:"auto"}),(0,jsx_runtime.jsx)(View["default"],{style:HomeScreen_styles.imageContainer,children:(0,jsx_runtime.jsx)(Image["default"],{source:PlaceholderImage,style:HomeScreen_styles.image})}),(0,jsx_runtime.jsxs)(View["default"],{style:HomeScreen_styles.buttonContainer,children:[(0,jsx_runtime.jsxs)(Text["default"],{style:{color:"#fff",alignSelf:"center",paddingBottom:50,fontSize:23,fontWeight:700},children:["BEM VINDO \xC0 MERCADOTECA, ",user?user.displayName:":)","!"]}),refreshing?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}):!isLoggedIn?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{label:"Menu",theme:"menu",onPress:refreshPage}),(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{label:"Login",theme:"redirectlogin",onPress:refreshPage}),(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{label:"Cadastrar",onPress:refreshPage})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{label:"Menu",theme:"menu",onPress:refreshPage}),(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{label:"Perfil",theme:"redirectprofile",onPress:refreshPage})]})]})]});}var HomeScreen_styles=HomeScreenStyles;
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__(5671);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits = __webpack_require__(136);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(2963);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(1120);
;// CONCATENATED MODULE: ./FrontEnd/Pages/LoginScreen/styles.js
var styles_LoginScreenStyles=StyleSheet["default"].create({container:{flex:1,backgroundColor:"#231F20",alignItems:"center",justifyContent:"center"},input:{width:310,height:44,padding:10,borderWidth:1,backgroundColor:"#fff",color:"black",borderColor:"#231F20",marginBottom:10,borderRadius:10},imageContainer:{flex:1,paddingTop:100,paddingBottom:10},inputContainer:{flex:1/2,paddingBottom:300,alignItems:"center"},image:{width:250,height:200,borderRadius:10},text:{color:"#fff",alignSelf:"center",paddingBottom:15,fontSize:30,fontWeight:700}});
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/TextInput/index.js
var TextInput = __webpack_require__(6591);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/ActivityIndicator/index.js
var ActivityIndicator = __webpack_require__(229);
// EXTERNAL MODULE: ./node_modules/react-native-toast-message/lib/src/Toast.js + 20 modules
var Toast = __webpack_require__(4832);
;// CONCATENATED MODULE: ./FrontEnd/Components/LoginScreenComponents/Login/Login.js
var Login_PlaceholderImage=__webpack_require__(900);var Login=function Login(){var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray["default"])(_useState,2),loading=_useState2[0],setLoading=_useState2[1];var _useState3=(0,react.useState)(""),_useState4=(0,slicedToArray["default"])(_useState3,2),email=_useState4[0],setEmail=_useState4[1];var _useState5=(0,react.useState)(""),_useState6=(0,slicedToArray["default"])(_useState5,2),password=_useState6[0],setPassword=_useState6[1];var _useState7=(0,react.useState)(null),_useState8=(0,slicedToArray["default"])(_useState7,2),userData=_useState8[0],setUserData=_useState8[1];var _useState9=(0,react.useState)(false),_useState10=(0,slicedToArray["default"])(_useState9,2),refreshing=_useState10[0],setRefreshing=_useState10[1];var auth=FIREBASE_AUTH;var navigation=(0,lib_module.useNavigation)();var user=FIREBASE_AUTH.currentUser;var refreshPage=react.useCallback(function(){setRefreshing(true);setTimeout(function(){setRefreshing(false);},100);},[]);(0,lib_module.useFocusEffect)(refreshPage);if(user){navigation.navigate("AllMenus",{refresh:true});}(0,react.useEffect)(function(){if(userData){if(userData.isAdm){Toast.Toast.show({type:"success",text1:"✔️ ADM Login bem sucedido!",text2:""});navigation.navigate("ManagerDash",{refresh:true});}else{Toast.Toast.show({type:"success",text1:"✔️ Login bem Sucedido!",text2:""});navigation.navigate("AllMenus",{refresh:true});}}},[userData]);var signIn=function(){var _ref=(0,asyncToGenerator["default"])(function*(){setLoading(true);var firestore=(0,dist_esm_index_esm.getFirestore)();try{var response=yield (0,index_esm.signInWithEmailAndPassword)(auth,email,password);var _user=response.user;var usersQuery=(0,dist_esm_index_esm.query)((0,dist_esm_index_esm.collection)(firestore,"users"),(0,dist_esm_index_esm.where)("email","==",_user.email));var querySnapshot=yield (0,dist_esm_index_esm.getDocs)(usersQuery);if(!querySnapshot.empty){var _userData=querySnapshot.docs[0].data();setUserData(_userData);}else{Toast.Toast.show({type:"error",text1:"❌ Dados de Usuário não encontrado",text2:""});}}catch(error){if(error.code==="auth/user-not-found"){Toast.Toast.show({type:"error",text1:"❌ Usuário não encontrado",text2:""});}else if(error.code==="auth/invalid-email"){Toast.Toast.show({type:"error",text1:"❌ Endereço de Email Inválido!",text2:""});}else if(error.code==="auth/missing-email"){Toast.Toast.show({type:"error",text1:"❌ Digite seu endereço de Email",text2:""});}else if(error.code==="auth/missing-password"){Toast.Toast.show({type:"error",text1:"❌ Digite uma Senha!",text2:""});}else if(error.code==="auth/wrong-password"){Toast.Toast.show({type:"error",text1:"❌ Senha Incorreta!",text2:""});}else if(error.code==="auth/user-disabled"){Toast.Toast.show({type:"error",text1:"❌ Usuário desativado, entre em contato com o suporte",text2:""});}else{Toast.Toast.show({type:"error",text1:"❌ Ocorreu um erro. Tente novamente mais tarde!",text2:""});}}finally{setLoading(false);}});return function signIn(){return _ref.apply(this,arguments);};}();return (0,jsx_runtime.jsxs)(View["default"],{style:Login_styles.container,children:[(0,jsx_runtime.jsx)(View["default"],{style:Login_styles.imageContainer,children:(0,jsx_runtime.jsx)(Image["default"],{source:Login_PlaceholderImage,style:Login_styles.image})}),(0,jsx_runtime.jsxs)(View["default"],{style:Login_styles.inputContainer,children:[(0,jsx_runtime.jsx)(Text["default"],{style:Login_styles.text,children:"Login"}),(0,jsx_runtime.jsx)(TextInput["default"],{onChangeText:function onChangeText(text){return setEmail(text);},placeholder:"Email",style:Login_styles.input,value:email,autoCapitalize:"none"}),(0,jsx_runtime.jsx)(TextInput["default"],{onChangeText:function onChangeText(text){return setPassword(text);},placeholder:"Insira uma senha",secureTextEntry:true,style:Login_styles.input,value:password,autoCapitalize:"none"}),loading?(0,jsx_runtime.jsx)(ActivityIndicator["default"],{size:"large",color:"#f4f4f4"}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{theme:"login",label:"Login",onPressAction:signIn}),(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{label:"Voltar",theme:"home"})]})]})]});};var Login_styles=StyleSheet["default"].create({container:{flex:1,backgroundColor:"#231F20",alignItems:"center",justifyContent:"center"},input:{width:310,height:44,padding:10,borderWidth:1,backgroundColor:"#fff",color:"black",borderColor:"#231F20",marginBottom:10,borderRadius:10},imageContainer:{flex:1,paddingTop:150,paddingBottom:10},inputContainer:{flex:1,paddingBottom:170,alignItems:"center"},image:{width:250,height:200,borderRadius:10},text:{color:"#fff",alignSelf:"center",paddingBottom:15,fontSize:30,fontWeight:"700"}});
;// CONCATENATED MODULE: ./FrontEnd/Pages/LoginScreen/LoginScreen.jsx
function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,getPrototypeOf["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return (0,possibleConstructorReturn["default"])(this,result);};}function _isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var LoginScreen_PlaceholderImage=__webpack_require__(900);var LoginScreen=function(_Component){(0,inherits["default"])(LoginScreen,_Component);var _super=_createSuper(LoginScreen);function LoginScreen(){(0,classCallCheck["default"])(this,LoginScreen);return _super.apply(this,arguments);}(0,createClass["default"])(LoginScreen,[{key:"render",value:function render(){return (0,jsx_runtime.jsx)(Login,{});}}]);return LoginScreen;}(react.Component);var LoginScreen_styles=(/* unused pure expression or super */ null && (LoginScreenStyles));
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/TouchableOpacity/index.js
var TouchableOpacity = __webpack_require__(5288);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Modal/index.js + 4 modules
var Modal = __webpack_require__(9294);
;// CONCATENATED MODULE: ./FrontEnd/Components/CartScreenComponents/ButtonLogOut.js
function ButtonLogOut(){var user=FIREBASE_AUTH.currentUser;var navigation=(0,lib_module.useNavigation)();function handleLogOut(){FIREBASE_AUTH.signOut();navigation.navigate("Home",{forceReload:true});Toast.Toast.show({type:"success",text1:"✔️ Usuário desconectado!",text2:""});}if(user){return (0,jsx_runtime.jsx)(View["default"],{style:ButtonLogOut_styles.buttonContainer,children:(0,jsx_runtime.jsx)(Pressable["default"],{label:"Sair",style:ButtonLogOut_styles.button,onPress:function onPress(){return handleLogOut();},children:(0,jsx_runtime.jsx)(Text["default"],{style:ButtonLogOut_styles.buttonLabel,children:"Sair"})})});}return null;}var ButtonLogOut_styles=StyleSheet["default"].create({buttonContainer:{width:160,height:68,marginHorizontal:20,alignItems:"center",justifyContent:"center",borderWidth:4,borderColor:"#ffd33d",borderRadius:18,margin:10,padding:3},button:{borderRadius:10,backgroundColor:"white",width:"100%",height:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"},buttonLabel:{color:"black",fontSize:16}});
// EXTERNAL MODULE: ./node_modules/expo-image-picker/build/ImagePicker.js + 2 modules
var ImagePicker = __webpack_require__(4009);
// EXTERNAL MODULE: ./node_modules/firebase/storage/dist/esm/index.esm.js + 1 modules
var storage_dist_esm_index_esm = __webpack_require__(3653);
;// CONCATENATED MODULE: ./FrontEnd/Pages/ManagerScreen/styles.js
var ManagerScreenStyles=StyleSheet["default"].create({container:{flex:1,backgroundColor:"#231F20",alignItems:"center",justifyContent:"space-around",padding:15},warningsContainer:{flex:1,justifyContent:"center",alignItems:"center"},formContainer:{width:"100%",height:"100%",borderBottomWidth:2,borderTopWidth:2,borderColor:"#ffd33d",borderRadius:35,padding:15,flexWrap:"wrap",alignContent:"center",justifyContent:"center",alignSelf:"center",backgroundColor:"#231F20"},formHeaderText:{color:"#ffd33d",alignSelf:"center",paddingBottom:50,fontSize:16,fontWeight:600},createButton:{width:100,justifyContent:"center",alignContent:"center",margin:4},buttonsFormContainer:{width:"100%",alignContent:"center",justifyContent:"center",marginTop:10,flexWrap:"wrap"},closeButtonModal:{position:"absolute",right:20,top:20},selectedImage:{width:200,height:200,marginBottom:50,alignSelf:"center",borderRadius:18},createButtonText:{borderBottomWidth:2,borderTopWidth:2,textAlign:"center",borderColor:"#ffd33d",borderRadius:35,padding:5,color:"#ffd33d"},productInput:{width:"95%",borderBottomWidth:2,borderTopWidth:2,borderColor:"#ffd33d",borderRadius:15,padding:9,marginVertical:5,backgroundColor:"white",backgroundColor:"#ffd33d09",alignSelf:"center",color:"white"},buttonContainer:{alignItems:"center",justifyContent:"center",height:"10%"},noAccessText:{color:"white",fontSize:32},addProductButtonContainer:{width:"100%",justifyContent:"center",alignItems:"center"},productsListWrapper:{height:"45%"},productsListContainer:{height:"100%",borderBottomWidth:2,borderTopWidth:2,borderColor:"#ffd33d",borderRadius:35,padding:15,flexDirection:"row",alignContent:"center",justifyContent:"center",flexWrap:"wrap"},productCard:{width:250,height:"100%",borderBottomWidth:2,borderTopWidth:2,borderColor:"#ffd33d",borderRadius:35,padding:10,alignContent:"center",justifyContent:"space-between",marginHorizontal:15},productImage:{width:"60%",height:"50%",marginTop:5,borderRadius:15,alignSelf:"flex-start"},productTitle:{color:"white"},productDescription:{color:"white"},productPrice:{color:"white"},profileImageContainer:{width:"40%",height:110,justifyContent:"center",alignItems:"center"},profileImage:{width:100,height:100,borderRadius:10},profileInformation:{flexDirection:"row",width:"100%",height:"20%",justifyContent:"center",alignItems:"center",borderBottomColor:"#ffd33d",borderBottomWidth:2,borderStyle:"dashed"},profileTextContainer:{paddingLeft:"5%",width:"60%",height:"75%",borderLeftWidth:2,borderStyle:"dashed",borderLeftColor:"#ffd33d"},profileText:{color:"white"},editPenContainer:{position:"absolute",top:0,right:0}});
;// CONCATENATED MODULE: ./FrontEnd/Pages/ProfileScreen/styles.js
var ProfileScreenStyles=StyleSheet["default"].create({container:{flex:1,backgroundColor:"#231F20",alignItems:"center",justifyContent:"space-between",padding:15},warningsContainer:{flex:1,justifyContent:"center",alignItems:"center"},buttonContainer:{alignItems:"center",justifyContent:"center"},noAccessText:{color:"white",fontSize:32},profileImageContainer:{width:"40%",height:110,justifyContent:"center",alignItems:"center"},profileImage:{width:100,height:100,borderRadius:10},profileInformation:{flexDirection:"row",width:"100%",height:130,justifyContent:"center",alignItems:"center",borderBottomColor:"#ffd33d",borderBottomWidth:2,borderStyle:"dashed"},profileTextContainer:{paddingLeft:"5%",width:"60%",height:"75%",borderLeftWidth:2,borderStyle:"dashed",borderLeftColor:"#ffd33d"},profileText:{color:"white"},editPenContainer:{position:"absolute",top:0,right:0},modalContainer:{width:"100%",height:"100%",backgroundColor:"#231F20",alignItems:"center",justifyContent:"space-evenly"},modalInput:{backgroundColor:"white",width:"80%",borderRadius:15,borderWidth:3,padding:5,borderColor:"#ffd33d",marginBottom:10},buttonOk:{width:100,height:34,alignItems:"center",justifyContent:"center",flexDirection:"row",borderBottomWidth:1,borderTopWidth:1,borderColor:"#ffd33d",borderRadius:25},textOk:{color:"white",fontStyle:"italic",fontSize:18}});
;// CONCATENATED MODULE: ./FrontEnd/Components/ProfileScreenComponents/FetchUserProfile/FetchUserProfile.jsx
function FetchUserProfile_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function FetchUserProfile_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?FetchUserProfile_ownKeys(Object(source),!0).forEach(function(key){(0,defineProperty["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):FetchUserProfile_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function FetchUserProfile(){var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray["default"])(_useState,2),userData=_useState2[0],setUserData=_useState2[1];var _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray["default"])(_useState3,2),isModalVisible=_useState4[0],setModalVisible=_useState4[1];var _useState5=(0,react.useState)(""),_useState6=(0,slicedToArray["default"])(_useState5,2),updatedPhone=_useState6[0],setUpdatedPhone=_useState6[1];var _useState7=(0,react.useState)(""),_useState8=(0,slicedToArray["default"])(_useState7,2),updatedUsername=_useState8[0],setUpdatedUsername=_useState8[1];var _useState9=(0,react.useState)((userData==null?void 0:userData.profileImageURL)||null),_useState10=(0,slicedToArray["default"])(_useState9,2),selectedImage=_useState10[0],setSelectedImage=_useState10[1];var user=FIREBASE_AUTH.currentUser;var firestore=(0,dist_esm_index_esm.getFirestore)();var ProfilePhoto=__webpack_require__(4749);(0,react.useEffect)(function(){var fetchUserProfile=function(){var _ref=(0,asyncToGenerator["default"])(function*(){if(user){var usersQuery=(0,dist_esm_index_esm.query)((0,dist_esm_index_esm.collection)(firestore,"users"),(0,dist_esm_index_esm.where)("email","==",user.email));var querySnapshot=yield (0,dist_esm_index_esm.getDocs)(usersQuery);if(!querySnapshot.empty){var _userData=querySnapshot.docs[0].data();setUserData(_userData);if(_userData.profileImageURL){setSelectedImage(_userData.profileImageURL);}}}});return function fetchUserProfile(){return _ref.apply(this,arguments);};}();fetchUserProfile();},[user]);var updateProfile=function(){var _ref2=(0,asyncToGenerator["default"])(function*(){var updatedData={};if(updatedUsername){updatedData.displayName=updatedUsername;}if(updatedPhone){updatedData.phone=updatedPhone;}if(Object.keys(updatedData).length===0){return;}if(userData&&userData.email){var usersQuery=(0,dist_esm_index_esm.query)((0,dist_esm_index_esm.collection)(firestore,"users"),(0,dist_esm_index_esm.where)("email","==",userData.email));var querySnapshot=yield (0,dist_esm_index_esm.getDocs)(usersQuery);if(!querySnapshot.empty){var userDocRef=querySnapshot.docs[0].ref;yield (0,dist_esm_index_esm.updateDoc)(userDocRef,updatedData);setUserData(FetchUserProfile_objectSpread(FetchUserProfile_objectSpread({},userData),updatedData));setModalVisible(false);}}});return function updateProfile(){return _ref2.apply(this,arguments);};}();var pickImageAndSave=function(){var _ref3=(0,asyncToGenerator["default"])(function*(){var result=yield ImagePicker.launchImageLibraryAsync({allowsEditing:true,quality:1});if(!result.canceled){var storage=(0,storage_dist_esm_index_esm.getStorage)();var imageRef=(0,storage_dist_esm_index_esm.ref)(storage,"profile_images/"+user.email+".jpg");var response=yield fetch(result.assets[0].uri);var blob=yield response.blob();try{var existingImageRef=(0,storage_dist_esm_index_esm.ref)(storage,"profile_images/"+user.email+".jpg");yield (0,storage_dist_esm_index_esm.getDownloadURL)(existingImageRef);yield (0,storage_dist_esm_index_esm.deleteObject)(existingImageRef);}catch(error){Toast.Toast.show({type:"error",text1:"❌  Erro",text2:error.message});}yield (0,storage_dist_esm_index_esm.uploadBytes)(imageRef,blob);var imageURL=yield (0,storage_dist_esm_index_esm.getDownloadURL)(imageRef);if(userData&&userData.email){var usersQuery=(0,dist_esm_index_esm.query)((0,dist_esm_index_esm.collection)(firestore,"users"),(0,dist_esm_index_esm.where)("email","==",userData.email));var querySnapshot=yield (0,dist_esm_index_esm.getDocs)(usersQuery);if(!querySnapshot.empty){var userDocRef=querySnapshot.docs[0].ref;yield (0,dist_esm_index_esm.updateDoc)(userDocRef,{profileImageURL:imageURL});setSelectedImage(imageURL);}Toast.Toast.show({type:"success",text1:"✔️ Sucesso",text2:"Imagem Alterada"});}}else{Toast.Toast.show({type:"error",text1:"❌  Nenhuma imagem selecionada.",text2:""});}});return function pickImageAndSave(){return _ref3.apply(this,arguments);};}();return (0,jsx_runtime.jsxs)(View["default"],{style:ProfileScreenStyles.profileInformation,children:[(0,jsx_runtime.jsx)(View["default"],{style:ProfileScreenStyles.profileImageContainer,children:(0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:pickImageAndSave,style:ProfileScreenStyles.profileImageContainer,children:selectedImage!=null?(0,jsx_runtime.jsx)(Image["default"],{source:{uri:selectedImage},style:ProfileScreenStyles.profileImage}):(0,jsx_runtime.jsx)(Image["default"],{source:ProfilePhoto,style:ProfileScreenStyles.profileImage})})}),(0,jsx_runtime.jsxs)(View["default"],{style:ProfileScreenStyles.profileTextContainer,children:[(0,jsx_runtime.jsxs)(Text["default"],{style:ProfileScreenStyles.profileText,children:["Nome de usu\xE1rio: ",user.displayName]}),(0,jsx_runtime.jsxs)(Text["default"],{style:ProfileScreenStyles.profileText,children:["Email: ",user.email]}),(0,jsx_runtime.jsxs)(Text["default"],{style:ProfileScreenStyles.profileText,children:["Telefone: ",(userData==null?void 0:userData.phone)||"---"]}),(0,jsx_runtime.jsxs)(Text["default"],{style:ProfileScreenStyles.profileText,children:["Anivers\xE1rio: ",(userData==null?void 0:userData.birthdate)||"---"]}),(0,jsx_runtime.jsxs)(Text["default"],{style:ProfileScreenStyles.profileText,children:["CPF: ",(userData==null?void 0:userData.doc)||"---"]})]}),(0,jsx_runtime.jsx)(Modal["default"],{animationType:"slide",transparent:true,visible:isModalVisible,onRequestClose:function onRequestClose(){return setModalVisible(false);},children:(0,jsx_runtime.jsxs)(View["default"],{style:ProfileScreenStyles.modalContainer,children:[(0,jsx_runtime.jsx)(Text["default"],{style:ProfileScreenStyles.textOk,children:"Atualizar dados de perfil"}),(0,jsx_runtime.jsx)(TextInput["default"],{style:ProfileScreenStyles.modalInput,placeholder:"Atualizar nome",value:updatedUsername,onChangeText:function onChangeText(text){return setUpdatedUsername(text);},onBlur:updateProfile}),(0,jsx_runtime.jsx)(TextInput["default"],{style:ProfileScreenStyles.modalInput,placeholder:"Atualizar n\xFAmero de telefone",value:updatedPhone,onChangeText:function onChangeText(text){return setUpdatedPhone(text);},onBlur:updateProfile}),(0,jsx_runtime.jsx)(TouchableOpacity["default"],{style:ProfileScreenStyles.buttonOk,onPress:function onPress(){return setModalVisible(false);},children:(0,jsx_runtime.jsx)(Text["default"],{style:ProfileScreenStyles.textOk,children:"Concluir"})})]})})]});}
// EXTERNAL MODULE: ./node_modules/@expo/vector-icons/build/MaterialCommunityIcons.js + 20 modules
var build_MaterialCommunityIcons = __webpack_require__(7389);
// EXTERNAL MODULE: ./node_modules/react-native-gesture-handler/lib/module/index.js + 96 modules
var react_native_gesture_handler_lib_module = __webpack_require__(9424);
;// CONCATENATED MODULE: ./FrontEnd/Pages/ManagerScreen/ManagerScreen.jsx
function ManagerScreen_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function ManagerScreen_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ManagerScreen_ownKeys(Object(source),!0).forEach(function(key){(0,defineProperty["default"])(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ManagerScreen_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function ManagerScreen(){var user=FIREBASE_AUTH.currentUser;var ProfilePhoto=__webpack_require__(4749);var _React$useState=react.useState(""),_React$useState2=(0,slicedToArray["default"])(_React$useState,2),restaurantName=_React$useState2[0],setRestaurantName=_React$useState2[1];var _React$useState3=react.useState(null),_React$useState4=(0,slicedToArray["default"])(_React$useState3,2),image=_React$useState4[0],setImage=_React$useState4[1];var _React$useState5=react.useState(""),_React$useState6=(0,slicedToArray["default"])(_React$useState5,2),label=_React$useState6[0],setLabel=_React$useState6[1];var _React$useState7=react.useState(""),_React$useState8=(0,slicedToArray["default"])(_React$useState7,2),description=_React$useState8[0],setDescription=_React$useState8[1];var _React$useState9=react.useState(""),_React$useState10=(0,slicedToArray["default"])(_React$useState9,2),price=_React$useState10[0],setPrice=_React$useState10[1];var _React$useState11=react.useState([]),_React$useState12=(0,slicedToArray["default"])(_React$useState11,2),products=_React$useState12[0],setProducts=_React$useState12[1];var _React$useState13=react.useState(false),_React$useState14=(0,slicedToArray["default"])(_React$useState13,2),modalVisible=_React$useState14[0],setModalVisible=_React$useState14[1];react.useEffect(function(){if(user){var userEstablishment=user.displayName;setRestaurantName(userEstablishment);var fetchProducts=function(){var _ref=(0,asyncToGenerator["default"])(function*(){var db=(0,dist_esm_index_esm.getFirestore)();var productsCollection=(0,dist_esm_index_esm.collection)(db,userEstablishment+"products");var productsSnapshot=yield (0,dist_esm_index_esm.getDocs)(productsCollection);var productsData=productsSnapshot.docs.map(function(doc){return ManagerScreen_objectSpread({id:doc.id},doc.data());});setProducts(productsData);});return function fetchProducts(){return _ref.apply(this,arguments);};}();fetchProducts();}},[user]);var handleOpenModal=function handleOpenModal(){setModalVisible(true);};var handleCloseModal=function handleCloseModal(){setModalVisible(false);};var handleImagePick=function(){var _ref2=(0,asyncToGenerator["default"])(function*(){var permissionResult=yield ImagePicker.requestMediaLibraryPermissionsAsync();if(permissionResult.granted===false){Toast.Toast.show({type:"error",text1:"❌ Erro ao acessar galeria!",text2:"Permissão é necessária para continuar"});return;}var pickerResult=yield ImagePicker.launchImageLibraryAsync();if(!pickerResult.canceled){setImage(pickerResult.uri);}});return function handleImagePick(){return _ref2.apply(this,arguments);};}();var handleCreateProduct=function(){var _ref3=(0,asyncToGenerator["default"])(function*(){var db=(0,dist_esm_index_esm.getFirestore)();var productsCollection=(0,dist_esm_index_esm.collection)(db,restaurantName+"products");try{if(!label){Toast.Toast.show({type:"error",text1:"❌  Preencha o campo de Título.",text2:""});return;}if(!description){Toast.Toast.show({type:"error",text1:"❌  Preencha o campo de descrição",text2:""});return;}if(!price){Toast.Toast.show({type:"error",text1:"❌  Preencha o campo de Preço.",text2:""});return;}if(!image){Toast.Toast.show({type:"error",text1:"❌  Selecione uma imagem.",text2:""});return;}var docRef=yield (0,dist_esm_index_esm.addDoc)(productsCollection,{label:label,description:description,price:price,image:null});if(image){var storage=(0,storage_dist_esm_index_esm.getStorage)();var imageRef=(0,storage_dist_esm_index_esm.ref)(storage,"productImages/"+docRef.id);var response=yield fetch(image);var blob=yield response.blob();yield (0,storage_dist_esm_index_esm.uploadBytes)(imageRef,blob);var imageUrl=yield (0,storage_dist_esm_index_esm.getDownloadURL)(imageRef);yield (0,dist_esm_index_esm.updateDoc)((0,dist_esm_index_esm.doc)(productsCollection,docRef.id),{image:imageUrl});}setModalVisible(false);Toast.Toast.show({type:"success",text1:"✔️ Produto Criado!",text2:label+" foi criado para "+restaurantName});setLabel("");setDescription("");setPrice("");setImage(null);}catch(error){Toast.Toast.show({type:"error",text1:"❌ Ocorreu um erro ao criar o produto!",text2:""});}});return function handleCreateProduct(){return _ref3.apply(this,arguments);};}();if(user){return (0,jsx_runtime.jsxs)(ScrollView["default"],{contentContainerStyle:ManagerScreen_styles.container,children:[(0,jsx_runtime.jsx)(ExpoStatusBar["default"],{style:"auto"}),(0,jsx_runtime.jsx)(FetchUserProfile,{}),(0,jsx_runtime.jsxs)(Text["default"],{style:ManagerScreen_styles.profileText,children:["DashBoard ADM ",restaurantName]}),(0,jsx_runtime.jsx)(Modal["default"],{visible:modalVisible,transparent:true,animationType:"slide",onRequestClose:handleCloseModal,children:(0,jsx_runtime.jsxs)(View["default"],{style:ManagerScreen_styles.formContainer,children:[(0,jsx_runtime.jsx)(View["default"],{style:ManagerScreen_styles.closeButtonModal,children:(0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:handleCloseModal,children:(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:"close-circle-outline",size:30,color:"white"})})}),(0,jsx_runtime.jsxs)(Text["default"],{style:ManagerScreen_styles.formHeaderText,children:["Criar novo Produto para ",restaurantName]}),image&&(0,jsx_runtime.jsx)(Image["default"],{source:{uri:image},style:ManagerScreen_styles.selectedImage}),(0,jsx_runtime.jsx)(TextInput["default"],{placeholder:"T\xEDtulo",placeholderTextColor:"white",value:label,onChangeText:setLabel,style:ManagerScreen_styles.productInput}),(0,jsx_runtime.jsx)(TextInput["default"],{placeholder:"Descri\xE7\xE3o (At\xE9 180 caracteres)",placeholderTextColor:"white",value:description,onChangeText:setDescription,style:ManagerScreen_styles.productInput,numberOfLines:undefined,multiline:true,maxLength:180}),(0,jsx_runtime.jsx)(TextInput["default"],{placeholder:"Pre\xE7o",placeholderTextColor:"white",value:price,onChangeText:setPrice,keyboardType:"numeric",style:ManagerScreen_styles.productInput}),(0,jsx_runtime.jsxs)(View["default"],{style:ManagerScreen_styles.buttonsFormContainer,children:[(0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:handleImagePick,style:ManagerScreen_styles.createButton,children:(0,jsx_runtime.jsx)(Text["default"],{style:ManagerScreen_styles.createButtonText,children:"Selecioar Imagem"})}),(0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:handleCreateProduct,style:ManagerScreen_styles.createButton,children:(0,jsx_runtime.jsx)(Text["default"],{style:ManagerScreen_styles.createButtonText,children:"Criar Produto"})})]})]})}),(0,jsx_runtime.jsxs)(View["default"],{style:{flexDirection:"row",width:"25%",marginLeft:"-75%"},children:[(0,jsx_runtime.jsxs)(TouchableOpacity["default"],{onPress:handleOpenModal,style:ManagerScreen_styles.addProductButtonContainer,children:[(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:"sticker-plus-outline",size:36,color:"white"}),(0,jsx_runtime.jsx)(Text["default"],{style:{color:"white"},children:"Adicionar Produto"})]}),(0,jsx_runtime.jsxs)(TouchableOpacity["default"],{onPress:handleOpenModal,style:ManagerScreen_styles.addProductButtonContainer,children:[(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:"sticker-plus-outline",size:36,color:"white"}),(0,jsx_runtime.jsx)(Text["default"],{style:{color:"white"},children:"Adicionar Produto"})]}),(0,jsx_runtime.jsxs)(TouchableOpacity["default"],{onPress:handleOpenModal,style:ManagerScreen_styles.addProductButtonContainer,children:[(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:"sticker-plus-outline",size:36,color:"white"}),(0,jsx_runtime.jsx)(Text["default"],{style:{color:"white"},children:"Adicionar Produto"})]}),(0,jsx_runtime.jsxs)(TouchableOpacity["default"],{onPress:handleOpenModal,style:ManagerScreen_styles.addProductButtonContainer,children:[(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:"sticker-plus-outline",size:36,color:"white"}),(0,jsx_runtime.jsx)(Text["default"],{style:{color:"white"},children:"Adicionar Produto"})]})]}),(0,jsx_runtime.jsx)(View["default"],{style:ManagerScreen_styles.productsListWrapper,children:(0,jsx_runtime.jsx)(react_native_gesture_handler_lib_module.ScrollView,{contentContainerStyle:ManagerScreen_styles.productsListContainer,horizontal:true,children:products.map(function(product){return (0,jsx_runtime.jsxs)(View["default"],{style:ManagerScreen_styles.productCard,children:[(0,jsx_runtime.jsx)(Image["default"],{source:{uri:product.image},style:ManagerScreen_styles.productImage}),(0,jsx_runtime.jsx)(Text["default"],{style:ManagerScreen_styles.productTitle,children:product.label}),(0,jsx_runtime.jsx)(Text["default"],{style:ManagerScreen_styles.productDescription,children:product.description}),(0,jsx_runtime.jsxs)(Text["default"],{style:ManagerScreen_styles.productPrice,children:["R$",product.price]})]},product.id);})})}),(0,jsx_runtime.jsx)(View["default"],{style:ManagerScreen_styles.buttonContainer,children:(0,jsx_runtime.jsx)(ButtonLogOut,{})})]});}else{return (0,jsx_runtime.jsxs)(View["default"],{style:ManagerScreen_styles.container,children:[(0,jsx_runtime.jsxs)(View["default"],{style:ManagerScreen_styles.profileInformation,children:[(0,jsx_runtime.jsx)(View["default"],{style:ManagerScreen_styles.profileImageContainer,children:(0,jsx_runtime.jsx)(Image["default"],{source:ProfilePhoto,style:ManagerScreen_styles.profileImage})}),(0,jsx_runtime.jsxs)(View["default"],{style:ManagerScreen_styles.profileTextContainer,children:[(0,jsx_runtime.jsx)(Text["default"],{style:ManagerScreen_styles.profileText,children:"Nome de usu\xE1rio: ---"}),(0,jsx_runtime.jsx)(Text["default"],{style:ManagerScreen_styles.profileText,children:"Email: ---"}),(0,jsx_runtime.jsx)(Text["default"],{style:ManagerScreen_styles.profileText,children:"Telefone: ---"})]})]}),(0,jsx_runtime.jsxs)(View["default"],{style:ManagerScreen_styles.warningsContainer,children:[(0,jsx_runtime.jsx)(Text["default"],{style:ManagerScreen_styles.noAccessText,children:"Fa\xE7a Login para ter acesso!"}),(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{label:"Ir para o login",theme:"redirectlogin"})]}),(0,jsx_runtime.jsx)(ButtonLogOut,{})]});}}var ManagerScreen_styles=ManagerScreenStyles;
;// CONCATENATED MODULE: ./FrontEnd/Pages/ProfileScreen/ProfileScreen.jsx
function ProfileScreen(){var user=FIREBASE_AUTH.currentUser;var ProfilePhoto=__webpack_require__(4749);if(user){return (0,jsx_runtime.jsxs)(View["default"],{style:ProfileScreen_styles.container,children:[(0,jsx_runtime.jsx)(ExpoStatusBar["default"],{style:"auto"}),(0,jsx_runtime.jsx)(FetchUserProfile,{}),(0,jsx_runtime.jsx)(Text["default"],{style:ProfileScreen_styles.profileText,children:"Voc\xEA ainda n\xE3o possui nenhum pedido :("}),(0,jsx_runtime.jsx)(View["default"],{style:ProfileScreen_styles.buttonContainer,children:(0,jsx_runtime.jsx)(ButtonLogOut,{})})]});}else{return (0,jsx_runtime.jsxs)(View["default"],{style:ProfileScreen_styles.container,children:[(0,jsx_runtime.jsxs)(View["default"],{style:ProfileScreen_styles.profileInformation,children:[(0,jsx_runtime.jsx)(View["default"],{style:ProfileScreen_styles.profileImageContainer,children:(0,jsx_runtime.jsx)(Image["default"],{source:ProfilePhoto,style:ProfileScreen_styles.profileImage})}),(0,jsx_runtime.jsxs)(View["default"],{style:ProfileScreen_styles.profileTextContainer,children:[(0,jsx_runtime.jsx)(Text["default"],{style:ProfileScreen_styles.profileText,children:"Nome de usu\xE1rio: ---"}),(0,jsx_runtime.jsx)(Text["default"],{style:ProfileScreen_styles.profileText,children:"Email: ---"}),(0,jsx_runtime.jsx)(Text["default"],{style:ProfileScreen_styles.profileText,children:"Telefone: ---"})]})]}),(0,jsx_runtime.jsxs)(View["default"],{style:ProfileScreen_styles.warningsContainer,children:[(0,jsx_runtime.jsx)(Text["default"],{style:ProfileScreen_styles.noAccessText,children:"Fa\xE7a Login para ter acesso!"}),(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{label:"Ir para o login",theme:"redirectlogin"})]}),(0,jsx_runtime.jsx)(ButtonLogOut,{})]});}}var ProfileScreen_styles=ProfileScreenStyles;
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/Alert/index.js
var Alert = __webpack_require__(3624);
;// CONCATENATED MODULE: ./FrontEnd/Components/RegisterScreenComponents/Register/Register.js
var Register_PlaceholderImage=__webpack_require__(900);var Register=function Register(){var _useState=(0,react.useState)(),_useState2=(0,slicedToArray["default"])(_useState,2),loading=_useState2[0],setLoading=_useState2[1];var _useState3=(0,react.useState)(),_useState4=(0,slicedToArray["default"])(_useState3,2),username=_useState4[0],setUsername=_useState4[1];var _useState5=(0,react.useState)(),_useState6=(0,slicedToArray["default"])(_useState5,2),email=_useState6[0],setEmail=_useState6[1];var _useState7=(0,react.useState)(),_useState8=(0,slicedToArray["default"])(_useState7,2),password=_useState8[0],setPassword=_useState8[1];var _useState9=(0,react.useState)(),_useState10=(0,slicedToArray["default"])(_useState9,2),document=_useState10[0],setDocument=_useState10[1];var _useState11=(0,react.useState)(),_useState12=(0,slicedToArray["default"])(_useState11,2),phone=_useState12[0],setPhone=_useState12[1];var _useState13=(0,react.useState)(),_useState14=(0,slicedToArray["default"])(_useState13,2),birthdate=_useState14[0],setBirthdate=_useState14[1];var _useState15=(0,react.useState)(false),_useState16=(0,slicedToArray["default"])(_useState15,2),refreshing=_useState16[0],setRefreshing=_useState16[1];var auth=FIREBASE_AUTH;var user=FIREBASE_AUTH.currentUser;var navigation=(0,lib_module.useNavigation)();if(user){navigation.navigate("AllMenus",{refresh:true});}var refreshPage=react.useCallback(function(){setRefreshing(true);setTimeout(function(){setRefreshing(false);},100);},[]);(0,lib_module.useFocusEffect)(refreshPage);var formatCPF=function formatCPF(cpf){if(!cpf)return"";var cpfNumbers=cpf.replace(/\D/g,"");var parts=[];for(var i=0;i<cpfNumbers.length;i+=3){parts.push(cpfNumbers.substr(i,3));}return parts.join(".");};var formatPhone=function formatPhone(phoneNumber){if(!phoneNumber)return"";var formattedPhone=phoneNumber.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/,"($1) $2 $3-$4");return formattedPhone;};var saveProfileData=function saveProfileData(){var doc=(0,dist_esm_index_esm.addDoc)((0,dist_esm_index_esm.collection)(FIREBASE_DB,"users"),{username:username,email:email,pass:password,doc:document,phone:phone,birthdate:birthdate});};var signUp=function(){var _ref=(0,asyncToGenerator["default"])(function*(){setLoading(true);try{if(!username){Toast.Toast.show({type:"error",text1:"❌  Preencha o campo Nome de Usuário.",text2:""});return;}if(!phone){Toast.Toast.show({type:"error",text1:"❌  Preencha o campo Número de Telefone com DDD..",text2:""});return;}if(!birthdate){Toast.Toast.show({type:"error",text1:"❌  Preencha o campo Data de Nascimento.",text2:""});return;}if(!document){Toast.Toast.show({type:"error",text1:"❌  Preencha o campo Número de CPF.",text2:""});return;}if(!email){Toast.Toast.show({type:"error",text1:"❌  Preencha o campo Email.",text2:""});return;}if(!password){Toast.Toast.show({type:"error",text1:"❌  Preencha o campo Senha.",text2:""});return;}saveProfileData();var response=yield (0,index_esm.createUserWithEmailAndPassword)(auth,email,password);var _user=auth.currentUser;if(_user){yield (0,index_esm.updateProfile)(_user,{displayName:username});navigation.navigate("AllMenus",{refresh:true});Alert["default"].alert("Registro Bem Sucedido!");}else{Alert["default"].alert("Usuário não autenticado");}}catch(error){Alert["default"].alert("Registro Falhou!"+error.message);}finally{setLoading(false);}});return function signUp(){return _ref.apply(this,arguments);};}();return (0,jsx_runtime.jsxs)(View["default"],{style:Register_styles.container,children:[(0,jsx_runtime.jsx)(View["default"],{style:Register_styles.imageContainer,children:(0,jsx_runtime.jsx)(Image["default"],{source:Register_PlaceholderImage,style:Register_styles.image})}),(0,jsx_runtime.jsxs)(View["default"],{style:Register_styles.inputContainer,children:[(0,jsx_runtime.jsx)(Text["default"],{style:Register_styles.text,children:"Cadastro"}),(0,jsx_runtime.jsx)(TextInput["default"],{onChangeText:function onChangeText(text){return setUsername(text);},placeholder:"Nome de Usuário",style:Register_styles.input,value:username,autoCapitalize:"none"}),(0,jsx_runtime.jsx)(TextInput["default"],{onChangeText:function onChangeText(text){return setPhone(formatPhone(text));},placeholder:"Número de Telefone com DDD",style:Register_styles.input,value:phone,autoCapitalize:"none",keyboardType:"numeric",maxLength:16}),(0,jsx_runtime.jsx)(TextInput["default"],{onChangeText:function onChangeText(text){return setBirthdate(text);},placeholder:"Data de Nascimento",style:Register_styles.input,value:birthdate,autoCapitalize:"none"}),(0,jsx_runtime.jsx)(TextInput["default"],{onChangeText:function onChangeText(text){return setDocument(formatCPF(text));},placeholder:"CPF",style:Register_styles.input,value:document,autoCapitalize:"none",keyboardType:"numeric",maxLength:14}),(0,jsx_runtime.jsx)(TextInput["default"],{onChangeText:function onChangeText(text){return setEmail(text);},placeholder:"Email",style:Register_styles.input,value:email,autoCapitalize:"none"}),(0,jsx_runtime.jsx)(TextInput["default"],{onChangeText:function onChangeText(text){return setPassword(text);},placeholder:"Insira uma senha",secureTextEntry:true,style:Register_styles.input,value:password,autoCapitalize:"none"}),loading?(0,jsx_runtime.jsx)(ActivityIndicator["default"],{size:"large",color:"#f4f4f4"}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{theme:"register",label:"Cadastrar",onPressAction:signUp}),(0,jsx_runtime.jsx)(ButtonsHomePage_Button,{label:"Voltar",theme:"home"})]})]})]});};var Register_styles=StyleSheet["default"].create({container:{flex:1,backgroundColor:"#231F20",alignItems:"center",justifyContent:"center"},input:{width:310,height:44,padding:10,borderWidth:1,backgroundColor:"#fff",color:"black",borderColor:"#231F20",marginBottom:10,borderRadius:10},imageContainer:{flex:1,paddingTop:50,paddingBottom:10},inputContainer:{flex:1,paddingBottom:400,alignItems:"center"},image:{width:250,height:200,borderRadius:10},text:{color:"#fff",alignSelf:"center",paddingBottom:15,fontSize:30,fontWeight:700}});
;// CONCATENATED MODULE: ./FrontEnd/Pages/RegisterScreen/RegisterScreen.jsx
function RegisterScreen_createSuper(Derived){var hasNativeReflectConstruct=RegisterScreen_isNativeReflectConstruct();return function _createSuperInternal(){var Super=(0,getPrototypeOf["default"])(Derived),result;if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf["default"])(this).constructor;result=Reflect.construct(Super,arguments,NewTarget);}else{result=Super.apply(this,arguments);}return (0,possibleConstructorReturn["default"])(this,result);};}function RegisterScreen_isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;}catch(e){return false;}}var RegisterScreen=function(_Component){(0,inherits["default"])(RegisterScreen,_Component);var _super=RegisterScreen_createSuper(RegisterScreen);function RegisterScreen(){(0,classCallCheck["default"])(this,RegisterScreen);return _super.apply(this,arguments);}(0,createClass["default"])(RegisterScreen,[{key:"render",value:function render(){return (0,jsx_runtime.jsx)(Register,{});}}]);return RegisterScreen;}(react.Component);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/FlatList/index.js + 2 modules
var FlatList = __webpack_require__(5972);
// EXTERNAL MODULE: ./node_modules/react-native-web/dist/exports/StatusBar/index.js
var StatusBar = __webpack_require__(4760);
;// CONCATENATED MODULE: ./FrontEnd/Components/MenuItems.js
function MenuItemButton(_ref){var label=_ref.label,text=_ref.text,image=_ref.image,price=_ref.price;var navigation=(0,lib_module.useNavigation)();var _useContext=(0,react.useContext)(contexts_CartContext),cartItems=_useContext.cartItems,setCartItems=_useContext.setCartItems;var _useState=(0,react.useState)(false),_useState2=(0,slicedToArray["default"])(_useState,2),modalVisible=_useState2[0],setModalVisible=_useState2[1];var _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray["default"])(_useState3,2),isButtonPressed=_useState4[0],setIsButtonPressed=_useState4[1];var _useState5=(0,react.useState)(false),_useState6=(0,slicedToArray["default"])(_useState5,2),isPressed=_useState6[0],setIsPressed=_useState6[1];var handlePress=function handlePress(){setModalVisible(true);};var handleCloseModal=function handleCloseModal(){setModalVisible(false);};var handlePressIn=function handlePressIn(){setIsPressed(true);};var handlePressOut=function handlePressOut(){setIsPressed(false);};var imageSource=image;var addToCart=function addToCart(){var newItem={label:label,text:text,image:image,price:price};setCartItems(function(prevCartItems){return[].concat((0,toConsumableArray["default"])(prevCartItems),[newItem]);});handleCloseModal();};var goToCartScreen=function goToCartScreen(){handleCloseModal();navigation.navigate("Cart");};return (0,jsx_runtime.jsxs)(View["default"],{style:MenuItems_styles.buttonContainer,children:[(0,jsx_runtime.jsxs)(View["default"],{style:MenuItems_styles.ImageAndLabelContainer,children:[(0,jsx_runtime.jsx)(Pressable["default"],{style:[MenuItems_styles.button,isButtonPressed&&MenuItems_styles.buttonPressed],onPress:handlePress,onPressIn:handlePressIn,onPressOut:handlePressOut,children:(0,jsx_runtime.jsx)(Image["default"],{source:imageSource,style:MenuItems_styles.buttonImage})}),(0,jsx_runtime.jsx)(Text["default"],{style:MenuItems_styles.buttonLabel,children:label})]}),(0,jsx_runtime.jsxs)(View["default"],{style:MenuItems_styles.description,children:[(0,jsx_runtime.jsx)(Text["default"],{style:MenuItems_styles.text,children:text}),(0,jsx_runtime.jsxs)(Text["default"],{style:MenuItems_styles.price,children:["R$",price]}),(0,jsx_runtime.jsxs)(View["default"],{style:MenuItems_styles.menuButtonContainer,children:[(0,jsx_runtime.jsx)(Pressable["default"],{style:MenuItems_styles.menuButton,onPress:addToCart,children:(0,jsx_runtime.jsx)(Text["default"],{style:MenuItems_styles.menuButtonText,children:"Adicionar ao carrinho"})}),(0,jsx_runtime.jsx)(Pressable["default"],{style:MenuItems_styles.menuButton,onPress:function onPress(){addToCart();goToCartScreen();},children:(0,jsx_runtime.jsx)(Text["default"],{style:MenuItems_styles.menuButtonText,children:"Comprar"})})]})]}),(0,jsx_runtime.jsx)(Modal["default"],{visible:modalVisible,transparent:true,animationType:"slide",onRequestClose:handleCloseModal,children:(0,jsx_runtime.jsxs)(View["default"],{style:MenuItems_styles.modalContainer,children:[(0,jsx_runtime.jsx)(Pressable["default"],{style:[MenuItems_styles.buttonContainerModal,isPressed&&MenuItems_styles.buttonPressed],onPressIn:handlePressIn,onPressOut:handlePressOut,children:(0,jsx_runtime.jsx)(Image["default"],{source:imageSource,style:MenuItems_styles.buttonImageModal})}),(0,jsx_runtime.jsxs)(View["default"],{style:MenuItems_styles.modalInfo,children:[(0,jsx_runtime.jsx)(Text["default"],{style:MenuItems_styles.modalTitle,children:label}),(0,jsx_runtime.jsx)(Text["default"],{style:MenuItems_styles.modalDescription,children:text}),(0,jsx_runtime.jsxs)(Text["default"],{style:MenuItems_styles.modalPrice,children:["R$",price]})]}),(0,jsx_runtime.jsxs)(View["default"],{style:MenuItems_styles.modalButtonsContainer,children:[(0,jsx_runtime.jsx)(Pressable["default"],{style:MenuItems_styles.modalButton,onPress:handleCloseModal,children:(0,jsx_runtime.jsx)(Text["default"],{style:MenuItems_styles.closeButtonText,children:"Fechar"})}),(0,jsx_runtime.jsx)(Pressable["default"],{style:MenuItems_styles.modalButton,onPress:addToCart,children:(0,jsx_runtime.jsx)(Text["default"],{style:MenuItems_styles.closeButtonText,children:"Adicionar ao carrinho"})})]})]})})]});}var MenuItems_styles=StyleSheet["default"].create({buttonContainer:{width:"100%",padding:5,height:340,alignItems:"center",justifyContent:"center",flexDirection:"row",borderBottomWidth:1,borderTopWidth:1,borderColor:"#ffd33d",borderRadius:45},ImageAndLabelContainer:{width:"50%"},buttonContainerModal:{width:"100%",padding:5,height:400,marginHorizontal:10,alignItems:"center",justifyContent:"flex-start",flexDirection:"row",borderBottomWidth:2,borderTopWidth:2,borderColor:"#ffd33d",borderRadius:35},modalInfo:{width:"100%",height:"40%"},modalButtonsContainer:{width:"80%",height:"10%",marginTop:10,alignItems:"flex-end",justifyContent:"center",flexDirection:"row"},button:{borderRadius:10,width:"100%",height:"100%",borderRadius:15,alignItems:"center",justifyContent:"center",overflow:"hidden"},buttonLabel:{width:"70%",height:150,color:"#fff",fontSize:20,alignSelf:"center",fontStyle:"italic",marginBottom:10,textAlign:"center"},description:{justifyContent:"center",alignContent:"center",width:"50%",height:"100%"},text:{color:"#fff",fontSize:17,fontStyle:"italic",marginHorizontal:10},price:{color:"#ffd33d",fontSize:15,fontStyle:"italic",alignSelf:"center"},buttonImage:{width:200,height:235,borderRadius:25,marginTop:75},buttonImageModal:{width:"100%",height:380,borderRadius:20},buttonPressed:{transform:[{scale:1.05}]},modalContainer:{flex:1,justifyContent:"center",alignItems:"center",backgroundColor:"#231F20",padding:20},modalTitle:{color:"#fff",fontSize:25,fontStyle:"italic",fontWeight:800,marginBottom:10,marginTop:50},modalDescription:{color:"#fff",fontSize:19},modalPrice:{color:"#ffd33d",fontSize:18,marginBottom:10},modalButton:{width:170,height:50,margin:20,textAlign:"center",justifyContent:"center",alignItems:"center",backgroundColor:"#ffd33d",borderRadius:5},menuButtonContainer:{width:"100%",justifyContent:"center",alignItems:"center"},menuButton:{width:170,height:40,margin:5,marginLeft:10,textAlign:"center",justifyContent:"center",alignItems:"center",backgroundColor:"#ffd33d09",borderWidth:1,borderColor:"#ffd33d",borderRadius:5},closeButtonText:{color:"#000080",fontWeight:700,fontSize:16},menuButtonText:{color:"#fff",fontWeight:600,fontSize:12,alignSelf:"center",justifyContent:"center",fontStyle:"italic"}});
;// CONCATENATED MODULE: ./BackEnd/DataBase/AllRestaurants/AllRestaurantData.js
var data=[{title:"Trovatta",data:[{name:"pasta",especs:["Massas"]},{name:"food-drumstick",especs:["Carne"]},{name:"cheese",especs:["Queijos"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(9374)},{title:"Olivença",data:[{name:"fish",especs:["Frutos-do-Mar"]},{name:"duck",especs:["Pato"]},{name:"pasta",especs:["Massas"]}],categories:["Bebidas","Porções","Hamburgueres","Sobremesas"],logo:__webpack_require__(2400)},{title:"Big Bear",data:[{name:"french-fries",especs:["Batata Frita"]},{name:"food-fork-drink",especs:["Refrigerante"]},{name:"hamburger",especs:["Hamburguer"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(4987)},{title:"Vino!",data:[{name:"glass-wine",especs:["Vinhos Tintos"]},{name:"glass-tulip",especs:["Vinhos Brancos"]},{name:"glass-flute",especs:["Espumantes"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(8864)},{title:"Pero que Sí",data:[{name:"fish",especs:["Frutos-do-Mar"]},{name:"chili-medium",especs:["Pimenta"]},{name:"leaf",especs:["Coentro"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(6214)},{title:"Doce de Moça",data:[{name:"seed",especs:["Cafés"]},{name:"candy",especs:["Doces"]},{name:"cake-layered",especs:["Bolos"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(2426)},{title:"Fantinato",data:[{name:"pig",especs:["Feijoada"]},{name:"bread-slice",especs:["Carne-de-Onça"]},{name:"bottle-soda-classic",especs:["Cerveja"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(7236)},{title:"Gelataio",data:[{name:"ice-cream",especs:["Sorvete"]},{name:"candy",especs:["Doces"]},{name:"fruit-pineapple",especs:["Frutas"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(1691)},{title:"Ponto Gin",data:[{name:"glass-cocktail",especs:["Drinks"]},{name:"glass-mug-variant",especs:["Chopp"]},{name:"glass-stange",especs:["Drinks s/ alcool"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(6554)},{title:"Gioia",data:[{name:"pizza",especs:["Pizza"]},{name:"mushroom",especs:["Cogumelos"]},{name:"cheese",especs:["Gorgonzola"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(6515)},{title:"Glasso",data:[{name:"hops",especs:["Chopp Artesanal"]},{name:"google-home",especs:["Caipirinhas"]},{name:"liquor",especs:["Drinks"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(4582)},{title:"Going Merry",data:[{name:"bread-slice",especs:["Bruschetta"]},{name:"cup",especs:["Sucos Naturais"]},{name:"cow",especs:["Burrata"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(7761)},{title:"Hawaii Poke e Wok",data:[{name:"fish",especs:["Frutos-do-Mar"]},{name:"rice",especs:["Poke"]},{name:"soy-sauce",especs:["Shoyu"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(9886)},{title:"La Vaca",data:[{name:"food-steak",especs:["Carnes"]},{name:"chili-medium",especs:["Pimenta"]},{name:"knife",especs:["Cortes Premium"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(194)},{title:"Maghitá",data:[{name:"fish",especs:["Frutos-do-Mar"]},{name:"peanut",especs:["Amendoim"]},{name:"egg-fried",especs:["Ovo"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(7859)},{title:"Milk Creamery",data:[{name:"ice-cream",especs:["Sorvete"]},{name:"candy",especs:["Doces"]},{name:"fruit-cherries",especs:["Frutas"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(5283)},{title:"Peixe In Box",data:[{name:"french-fries",especs:["porções"]},{name:"jellyfish",especs:["Polvo e Lula"]},{name:"fish",especs:["Peixes"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(2430)},{title:"Tao Sushi",data:[{name:"fish",especs:["Frutos-do-Mar"]},{name:"soy-sauce",especs:["Shoyu"]},{name:"chef-hat",especs:["Asiático"]}],categories:["Bebidas","Entradas","Principais","Sobremesas"],logo:__webpack_require__(8634)}];
;// CONCATENATED MODULE: ./BackEnd/DataBase/BigBear/MenuBigBear.js
var menu=[{title:"Rib BBB",data:"  Hambúrguer de costela Black Angus (120g), cebola caramelizada, cebola crispy, queijo cheddar e molho barbacue. ",logo:__webpack_require__(616),price:"28"},{title:"Prime Bbb",data:"  Hambúrguer de picanha Black Angus (120g), queijo cheddar, cebola crispy, alface, tomate e molho defumado. ",logo:__webpack_require__(4253),price:"29"},{title:"Veggie Bbb",data:"  Hambúrguer vegetariano de cogumelo, alface, tomate, cebola roxa, queijo prato e maionese temperada. ",logo:__webpack_require__(445),price:"29"},{title:"Rustic Fries",data:"Batata rústica com sour cream e pastrami.",logo:__webpack_require__(7298),price:"22"},{title:"Cheese Fries",data:"Fritas crinckles com cheddar e bacon.",logo:__webpack_require__(6146),price:"22"},{title:"Cheese Pillow",data:"Travesseiros crocantes. Empanados, recheados com queijo gouda.",logo:__webpack_require__(5980),price:"20"},{title:"Coca-Cola original",data:"Coca-Cola original lata 350 ml.",logo:__webpack_require__(2269),price:"5"},{title:"Coca-Cola sem açucar",data:"Coca-Cola sem açucar lata 350 ml.",logo:__webpack_require__(7725),price:"5"}];
;// CONCATENATED MODULE: ./FrontEnd/Pages/Restaurants/BigBear/BigBearMainScreen.js
function BigBearMainScreen(){var _React$useState=react.useState([]),_React$useState2=(0,slicedToArray["default"])(_React$useState,2),activeCategories=_React$useState2[0],setActiveCategories=_React$useState2[1];var _React$useState3=react.useState(0),_React$useState4=(0,slicedToArray["default"])(_React$useState3,2),visibleRestaurantIndex=_React$useState4[0],setVisibleRestaurantIndex=_React$useState4[1];var renderMenuItem=function renderMenuItem(_ref){var item=_ref.item;return (0,jsx_runtime.jsx)(MenuItemButton,{text:item.data,label:item.title,image:item.logo,price:item.price});};var renderSectionHeader=function renderSectionHeader(_ref2){var categories=_ref2.section.categories;return (0,jsx_runtime.jsx)(View["default"],{style:BigBearMainScreen_styles.categoriesContainer,children:categories.map(function(category){return (0,jsx_runtime.jsx)(Pressable["default"],{style:[BigBearMainScreen_styles.categories,activeCategories.includes(category)&&BigBearMainScreen_styles.categoriesActive],onPress:function onPress(){return toggleCategory(category);},children:(0,jsx_runtime.jsx)(Text["default"],{style:BigBearMainScreen_styles.categoriesText,children:category})},category);})});};var toggleCategory=function toggleCategory(category){setActiveCategories(function(prevActiveCategories){if(prevActiveCategories.includes(category)){return[];}else{return[category];}});};return (0,jsx_runtime.jsx)(SafeAreaView["default"],{style:BigBearMainScreen_styles.container,children:(0,jsx_runtime.jsx)(FlatList["default"],{data:menu,keyExtractor:function keyExtractor(item,index){return item+index;},ListHeaderComponent:function ListHeaderComponent(){return (0,jsx_runtime.jsx)(View["default"],{style:BigBearMainScreen_styles.header});},renderItem:renderMenuItem})});}var BigBearMainScreen_styles=StyleSheet["default"].create({container:{backgroundColor:"#231F20",flex:1,paddingTop:StatusBar["default"].currentHeight},imageContainer:{width:200,height:150,borderRadius:10,overflow:"hidden"},image:{flex:1},item:{flexDirection:"row",alignItems:"center",backgroundColor:"#F2B33D",padding:10,marginVertical:8,marginHorizontal:16,borderRadius:9},descriptionContainer:{flex:1,paddingLeft:10},header:{height:3},list:{marginVertical:10},categoriesContainer:{width:"100%",height:50,flexDirection:"row",paddingBottom:10,overflow:"hidden"},categories:{backgroundColor:"#fff",height:20,width:130,marginHorizontal:3,marginVertical:5,padding:2,borderRadius:10,justifyContent:"center"},categoriesActive:{backgroundColor:"#F2B33D"},categoriesText:{color:"#000",textAlign:"center",fontSize:12}});
;// CONCATENATED MODULE: ./BackEnd/DataBase/Olivenca/MenuOlivenca.js
var MenuOlivenca_menu=[{title:"Arroz de Pato",data:"  Pato desfiado cozido no arroz com chouriço português e favas, finalizado com cebola crocante.",logo:__webpack_require__(1810),price:"168"},{title:"Paella Marinera",data:"  O prato mais icônico da culinária espanhola! Preparado com mariscos, camarões e lula. Uma verdadeira viagem gastronômica! ",logo:__webpack_require__(9552),price:"185"},{title:"Bacalhau com Crosta",data:"  Lombo de Bacalhau (250g) com crosta de Broa de Milho, acompanhado por couve refogada e uma porção de arroz de brócolis. ",logo:__webpack_require__(4720),price:"219 "},{title:"Polvo Grelhado",data:"Para os amantes do mar, esta é a melhor escolha! Tentáculos de polvo Grelhados na brasa, acompanha Arroz de Lula OU Vegetais Grelhados.",logo:__webpack_require__(1874),price:"159 "},{title:"Arroz de Bacalhau",data:"Um arroz delicioso de Bacalhau cozido com alhoporro, azeitonas e tomates frscos.",logo:__webpack_require__(4916),price:"119"},{title:"Croquetas (5un.)",data:"Deliciosas croquetas de Pato ou Ramon Ibérico, empanadas e servidas com molho agridoce.",logo:__webpack_require__(4036),price:"34"},{title:"Coca-Cola original",data:"Coca-Cola original lata 350 ml.",logo:__webpack_require__(4752),price:"5"},{title:"Coca-Cola sem açucar",data:"Coca-Cola sem açucar lata 350 ml.",logo:__webpack_require__(2107),price:"5"}];
;// CONCATENATED MODULE: ./FrontEnd/Pages/Restaurants/Olivenca/OlivencaMainScreen.js
function OlivencaMainScreen(){var _React$useState=react.useState([]),_React$useState2=(0,slicedToArray["default"])(_React$useState,2),activeCategories=_React$useState2[0],setActiveCategories=_React$useState2[1];var _React$useState3=react.useState(0),_React$useState4=(0,slicedToArray["default"])(_React$useState3,2),visibleRestaurantIndex=_React$useState4[0],setVisibleRestaurantIndex=_React$useState4[1];var renderMenuItem=function renderMenuItem(_ref){var item=_ref.item;return (0,jsx_runtime.jsx)(MenuItemButton,{text:item.data,label:item.title,image:item.logo,price:item.price});};var renderSectionHeader=function renderSectionHeader(_ref2){var categories=_ref2.section.categories;return (0,jsx_runtime.jsx)(View["default"],{style:OlivencaMainScreen_styles.categoriesContainer,children:categories.map(function(category){return (0,jsx_runtime.jsx)(Pressable["default"],{style:[OlivencaMainScreen_styles.categories,activeCategories.includes(category)&&OlivencaMainScreen_styles.categoriesActive],onPress:function onPress(){return toggleCategory(category);},children:(0,jsx_runtime.jsx)(Text["default"],{style:OlivencaMainScreen_styles.categoriesText,children:category})},category);})});};var toggleCategory=function toggleCategory(category){setActiveCategories(function(prevActiveCategories){if(prevActiveCategories.includes(category)){return[];}else{return[category];}});};return (0,jsx_runtime.jsx)(SafeAreaView["default"],{style:OlivencaMainScreen_styles.container,children:(0,jsx_runtime.jsx)(react_native_gesture_handler_lib_module.ScrollView,{style:OlivencaMainScreen_styles.menuItemsContainer,children:MenuOlivenca_menu.map(function(item,index){return (0,jsx_runtime.jsx)(MenuItemButton,{text:item.data,label:item.title,image:item.logo,price:item.price},index);})})});}var OlivencaMainScreen_styles=StyleSheet["default"].create({container:{backgroundColor:"#231F20",flex:1,paddingTop:StatusBar["default"].currentHeight},imageContainer:{width:200,height:150,borderRadius:10,overflow:"hidden"},image:{flex:1},item:{flexDirection:"row",alignItems:"center",backgroundColor:"#F2B33D",padding:10,marginVertical:8,marginHorizontal:16,borderRadius:9},descriptionContainer:{flex:1,paddingLeft:10},header:{height:3},list:{marginVertical:10},categoriesContainer:{width:"100%",height:200,flexDirection:"row",paddingBottom:10,overflow:"hidden"},categories:{backgroundColor:"#fff",height:20,width:130,marginHorizontal:3,marginVertical:5,padding:2,borderRadius:10,justifyContent:"center"},categoriesActive:{backgroundColor:"#F2B33D"},categoriesText:{color:"#000",textAlign:"center",fontSize:12}});
;// CONCATENATED MODULE: ./BackEnd/DataBase/Trovatta/MenuTrovatta.js
var MenuTrovatta_menu=[{title:"Risoto De Mignon",data:"  Arroz italiano, cubos de filé mignon e champignon paris, refogados no vinho branco e caldo suave de legumes e cebolinha crocante para dar o toque final! ",logo:__webpack_require__(4722),price:"63 "},{title:"Risoto Tripli Funghi",data:" Os cogumelos são os protagonistas desta delícia: o funghi  italiano, o champignon Paris e o shitake se unem, oferecendo uma explosão de sabor em cada garfada.",logo:__webpack_require__(9421),price:"67 "},{title:"Risoto Milanês",data:" Arroz italiano, açafrão, vinho branco, queijo parmesão, finalizado com raspas de limão siciliano e brasato de vitelo.",logo:__webpack_require__(6658),price:"63"},{title:"Ravioli de Mussarela de Búfala",data:"Ravioli de espinafre recheado com muçarela de búfala, servido com fonduta de queijo e cogumelos shitake!",logo:__webpack_require__(6015),price:"59"},{title:"Burrata Pomodoro",data:"  Burrata servida imersa em molho Pomodoro, acompanha torradas.",logo:__webpack_require__(1421),price:"78"},{title:"Carpaccio",data:"  Fatias delicadas de Carpaccio, servido com folhas frescas e torradas ",logo:__webpack_require__(7466),price:"69"},{title:"Coca-Cola original",data:"Coca-Cola original lata 350 ml.",logo:__webpack_require__(8704),price:"7"},{title:"Coca-Cola sem açucar",data:"Coca-Cola sem açucar lata 350 ml.",logo:__webpack_require__(9356),price:"7"}];
;// CONCATENATED MODULE: ./FrontEnd/Pages/Restaurants/Trovatta/TrovattaMainScreen.jsx
function TrovattaMainScreen(){var _React$useState=react.useState([]),_React$useState2=(0,slicedToArray["default"])(_React$useState,2),activeCategories=_React$useState2[0],setActiveCategories=_React$useState2[1];var _React$useState3=react.useState(0),_React$useState4=(0,slicedToArray["default"])(_React$useState3,2),visibleRestaurantIndex=_React$useState4[0],setVisibleRestaurantIndex=_React$useState4[1];var renderMenuItem=function renderMenuItem(_ref){var item=_ref.item;return (0,jsx_runtime.jsx)(MenuItemButton,{text:item.data,label:item.title,image:item.logo,price:item.price});};var renderSectionHeader=function renderSectionHeader(_ref2){var categories=_ref2.section.categories;return (0,jsx_runtime.jsx)(View["default"],{style:TrovattaMainScreen_styles.categoriesContainer,children:categories.map(function(category){return (0,jsx_runtime.jsx)(Pressable["default"],{style:[TrovattaMainScreen_styles.categories,activeCategories.includes(category)&&TrovattaMainScreen_styles.categoriesActive],onPress:function onPress(){return toggleCategory(category);},children:(0,jsx_runtime.jsx)(Text["default"],{style:TrovattaMainScreen_styles.categoriesText,children:category})},category);})});};var toggleCategory=function toggleCategory(category){setActiveCategories(function(prevActiveCategories){if(prevActiveCategories.includes(category)){return[];}else{return[category];}});};return (0,jsx_runtime.jsx)(SafeAreaView["default"],{style:TrovattaMainScreen_styles.container,children:(0,jsx_runtime.jsx)(react_native_gesture_handler_lib_module.ScrollView,{style:TrovattaMainScreen_styles.menuItemsContainer,children:MenuTrovatta_menu.map(function(item,index){return (0,jsx_runtime.jsx)(MenuItemButton,{text:item.data,label:item.title,image:item.logo,price:item.price},index);})})});}var TrovattaMainScreen_styles=StyleSheet["default"].create({container:{backgroundColor:"#231F20",flex:1,paddingTop:StatusBar["default"].currentHeight},imageContainer:{width:200,height:150,borderRadius:10,overflow:"hidden"},image:{flex:1},item:{flexDirection:"row",alignItems:"center",backgroundColor:"#F2B33D",padding:10,marginVertical:8,marginHorizontal:16,borderRadius:9},descriptionContainer:{flex:1,paddingLeft:10},header:{height:3},list:{marginVertical:10},categoriesContainer:{width:"100%",maxHeight:200,flexDirection:"row",paddingBottom:10,overflow:"hidden",justifyContent:"center",alignItems:"center"},categories:{backgroundColor:"#fff",height:20,width:130,marginHorizontal:3,marginVertical:5,padding:2,borderRadius:10,justifyContent:"center"},categoriesActive:{backgroundColor:"#F2B33D"},categoriesText:{color:"#000",textAlign:"center",fontSize:12}});
;// CONCATENATED MODULE: ./FrontEnd/Components/MainAppComponents/CreateStackScreen.js
function createStackScreen(name,component,title){var showHeader=arguments.length>3&&arguments[3]!==undefined?arguments[3]:true;return{name:name,component:component,options:function options(_ref){var route=_ref.route;return{animation:"slide_from_right",title:title,headerStyle:{backgroundColor:"#231F20"},headerTintColor:"#fff",headerTitleStyle:{fontWeight:"bold"},headerShown:showHeader,headerRight:function headerRight(){var navigation=(0,lib_module.useNavigation)();var _useContext=(0,react.useContext)(contexts_CartContext),cartItems=_useContext.cartItems;var cartItemCount=cartItems.reduce(function(total,item){return total+1;},0);var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray["default"])(_useState,2),userData=_useState2[0],setUserData=_useState2[1];var user=FIREBASE_AUTH.currentUser;var firestore=(0,dist_esm_index_esm.getFirestore)();(0,react.useEffect)(function(){var fetchUserProfile=function(){var _ref2=(0,asyncToGenerator["default"])(function*(){if(user){var usersQuery=(0,dist_esm_index_esm.query)((0,dist_esm_index_esm.collection)(firestore,"users"),(0,dist_esm_index_esm.where)("email","==",user.email));var querySnapshot=yield (0,dist_esm_index_esm.getDocs)(usersQuery);if(!querySnapshot.empty){var _userData=querySnapshot.docs[0].data();setUserData(_userData);}}});return function fetchUserProfile(){return _ref2.apply(this,arguments);};}();fetchUserProfile();},[user]);var isAdmin=userData&&userData.isAdm===true;if(route.name==="Cart"){return (0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:function onPress(){if(isAdmin){navigation.navigate("ManagerDash");}else{navigation.navigate("Profile");}},children:(0,jsx_runtime.jsx)(View["default"],{style:CreateStackScreen_styles.cartIconContainer,children:(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:isAdmin?"crown":"account-circle",size:30,color:"white"})})});}if(route.name==="AllMenus"){return (0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:function onPress(){if(isAdmin){navigation.navigate("ManagerDash");}else{navigation.navigate("Profile");}},children:(0,jsx_runtime.jsx)(View["default"],{style:CreateStackScreen_styles.cartIconContainer,children:(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:isAdmin?"crown":"account-circle",size:30,color:"white"})})});}if(route.name==="ManagerDash"){return (0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:function onPress(){navigation.navigate("ManagerDash");},children:(0,jsx_runtime.jsx)(View["default"],{style:CreateStackScreen_styles.cartIconContainer,children:(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:"account-supervisor",size:30,color:"white"})})});}if(route.name==="AllMenus"&&!user){return (0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:function onPress(){navigation.navigate("Profile");},children:(0,jsx_runtime.jsx)(View["default"],{style:CreateStackScreen_styles.cartIconContainer,children:(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:"account-circle",size:30,color:"white"})})});}if(route.name==="AllMenus"&&!user){return (0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:function onPress(){if(isAdmin){navigation.navigate("ManagerDash");}navigation.navigate("Profile");},children:(0,jsx_runtime.jsx)(View["default"],{style:CreateStackScreen_styles.cartIconContainer,children:(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:isAdmin?"crown":"account-circle",size:30,color:"white"})})});}else{return (0,jsx_runtime.jsx)(TouchableOpacity["default"],{onPress:function onPress(){navigation.navigate("Cart");},children:(0,jsx_runtime.jsxs)(View["default"],{style:CreateStackScreen_styles.cartIconContainer,children:[(0,jsx_runtime.jsx)(View["default"],{style:CreateStackScreen_styles.cartItemCountContainer,children:(0,jsx_runtime.jsx)(Text["default"],{style:CreateStackScreen_styles.cartItemCount,children:cartItemCount})}),(0,jsx_runtime.jsx)(build_MaterialCommunityIcons["default"],{name:"cart",size:20,color:"white"})]})});}}};}};}var CreateStackScreen_styles=StyleSheet["default"].create({cartIconContainer:{flexDirection:"row",alignItems:"center",marginRight:10},cartItemCountContainer:{backgroundColor:"#FF0000",borderRadius:10,width:20,height:20,justifyContent:"center",alignItems:"center",marginRight:-5},cartItemCount:{color:"#fff",fontSize:12,fontWeight:"bold"}});
;// CONCATENATED MODULE: ./FrontEnd/Components/MainAppComponents/StackScreens.js
var stackScreens=[createStackScreen("Home",HomeScreen,"Home",false),createStackScreen("Login",LoginScreen,"Login",false),createStackScreen("Register",RegisterScreen,"Cadastro",false),createStackScreen("Profile",ProfileScreen,"Perfil"),createStackScreen("ManagerDash",ManagerScreen,"GERÊNCIA"),createStackScreen("Edit Profile",LoginScreen,"Editar Perfil",false),createStackScreen("Orders",RegisterScreen,"Seus Pedidos",false),createStackScreen("AllMenus",AllMenusScreen,"Todos os restaurantes"),createStackScreen("Cart",CartScreen,"Seu carrinho"),createStackScreen("Olivença",OlivencaMainScreen,"Olivença Cozinha Ibérica"),createStackScreen("Trovatta",TrovattaMainScreen,"Trovatta Tratoria"),createStackScreen("Big Bear",BigBearMainScreen,"Big Bear"),createStackScreen("Pero que Sí",TrovattaMainScreen,"Pero que Sí"),createStackScreen("Doce de Moça",OlivencaMainScreen,"Doce de Moça"),createStackScreen("Fantinato",TrovattaMainScreen,"Fantinato"),createStackScreen("Gelataio",OlivencaMainScreen,"Gelataio"),createStackScreen("Ponto Gin",TrovattaMainScreen,"Ponto Gin"),createStackScreen("Gioia",OlivencaMainScreen,"Gioia"),createStackScreen("Glasso",TrovattaMainScreen,"Glasso"),createStackScreen("Going Merry",OlivencaMainScreen,"Going Merry"),createStackScreen("Hawaii Poke e Wok",TrovattaMainScreen,"Hawaii Poke e Wok"),createStackScreen("La Vaca",OlivencaMainScreen,"La Vaca"),createStackScreen("Maghitá",TrovattaMainScreen,"Maghitá"),createStackScreen("Milk Creamery",OlivencaMainScreen,"Milk Creamery"),createStackScreen("Peixe In Box",TrovattaMainScreen,"Peixe In Box"),createStackScreen("Tao Sushi",OlivencaMainScreen,"Tao Sushi"),createStackScreen("Vino!",TrovattaMainScreen,"Vino!")];
;// CONCATENATED MODULE: ./App.jsx
var user=FIREBASE_AUTH.currentUser;var Stack=(0,createNativeStackNavigator["default"])();function App(){var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray["default"])(_useState,2),user=_useState2[0],setUser=_useState2[1];var _useState3=(0,react.useState)([]),_useState4=(0,slicedToArray["default"])(_useState3,2),cartItems=_useState4[0],setCartItems=_useState4[1];(0,react.useEffect)(function(){(0,index_esm.onAuthStateChanged)(FIREBASE_AUTH,function(user){setUser(user);});});return (0,jsx_runtime.jsxs)(contexts_CartContext.Provider,{value:{cartItems:cartItems,setCartItems:setCartItems},children:[(0,jsx_runtime.jsx)(NavigationContainer["default"],{children:(0,jsx_runtime.jsx)(Stack.Navigator,{children:stackScreens.map(function(screen,index){return (0,jsx_runtime.jsx)(Stack.Screen,{name:screen.name,component:screen.component,options:screen.options},index);})})}),(0,jsx_runtime.jsx)(lib["default"],{})]});}/* harmony default export */ const App_0 = (App);
;// CONCATENATED MODULE: ./index.js
(0,registerRootComponent["default"])(App_0);

/***/ }),

/***/ 4987:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/BigBearLogo.1f852bf3761976a8db53.png";

/***/ }),

/***/ 2426:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/DoceDeMocaLogo.55f92cf35808dc496326.png";

/***/ }),

/***/ 7236:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/FantinatoLogo.51b802ce085835fdfd57.png";

/***/ }),

/***/ 1691:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/GelataioLogo.689237e53b945fc75e6b.png";

/***/ }),

/***/ 4749:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Generic-Profile.0485b1b3d9fdd7d2f959.jpg";

/***/ }),

/***/ 6554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/GinLogo.fb798d9affdc3eae639c.png";

/***/ }),

/***/ 6515:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/GioiaLogo.eaabf5750f00463c71a0.png";

/***/ }),

/***/ 4582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/GlassoLogo.3a8b7b1090047d09793c.png";

/***/ }),

/***/ 7761:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/GoingMerryLogo.792ae6469031a9871cc6.png";

/***/ }),

/***/ 9886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/HawaiiLogo.31e574c63b69d38a2f52.png";

/***/ }),

/***/ 194:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/LaVacaLogo.2b4e5e2fc48b11b5ffc0.png";

/***/ }),

/***/ 7859:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/MaghitaLogo.97c66de2372b4aa005a1.png";

/***/ }),

/***/ 6146:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/BatataBacon.0659bbd802093e333908.jpg";

/***/ }),

/***/ 7298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/BatatasRusticas.5507e25f801e0b7a84df.jpg";

/***/ }),

/***/ 5980:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/CheesePillow.3408f72139b8794e33c5.jpg";

/***/ }),

/***/ 2269:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/CocaOriginal.ff13bfacda3404525e7c.jpg";

/***/ }),

/***/ 7725:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/CocaZero.aa120f02195134ad6463.jpg";

/***/ }),

/***/ 4253:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/PrimeBbb.527b58a6e6faa20b42c9.jpg";

/***/ }),

/***/ 616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/RibBbb.8438445912cfd60fce90.jpg";

/***/ }),

/***/ 445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/VeggieBbb.91df10e9d4d53fe20743.jpg";

/***/ }),

/***/ 4752:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/CocaOriginal.ff13bfacda3404525e7c.jpg";

/***/ }),

/***/ 2107:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/CocaZero.aa120f02195134ad6463.jpg";

/***/ }),

/***/ 9552:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Paella.0c755b6ff7b280e076e3.jpg";

/***/ }),

/***/ 1874:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/PolvoComVegetais.7c58ebf7de98a6f2647a.jpg";

/***/ }),

/***/ 4916:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/arrozdebacalhau.3b4cb4ce3bc04251d83b.jpg";

/***/ }),

/***/ 1810:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/arrozdepato.9c36de2398f5bfc958d8.jpg";

/***/ }),

/***/ 4720:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/bacalhauCrosta.a5b196b5f50e8b57261f.jpg";

/***/ }),

/***/ 4036:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/croqueta.73e2251ce89c1f311327.jpg";

/***/ }),

/***/ 1421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/BurrataPomodoro.06a9f2c4d09edede62eb.jpg";

/***/ }),

/***/ 8704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/CocaOriginal.ff13bfacda3404525e7c.jpg";

/***/ }),

/***/ 9356:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/CocaZero.aa120f02195134ad6463.jpg";

/***/ }),

/***/ 7466:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/carpaccio.0a342258e06df321823e.jpg";

/***/ }),

/***/ 6015:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ravioliBufala.8d247ec78e54b8bbfaf9.jpg";

/***/ }),

/***/ 4722:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/risotoMignon.4c5621962dd49900067e.jpg";

/***/ }),

/***/ 6658:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/risotoMilanes.5bc91819c77f7c95ad12.jpg";

/***/ }),

/***/ 9421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/risotoTripleFunghi.bc7915c08e3f7916bc2f.jpg";

/***/ }),

/***/ 5283:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/MilkCreameryLogo.2ac2bd1756fe87680455.png";

/***/ }),

/***/ 2400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/OlivencaLogo.228ddecbf257b19e44f7.jpg";

/***/ }),

/***/ 2430:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/PeixeInBoxLogo.34cd0594044a1c9defa6.png";

/***/ }),

/***/ 6214:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/PeroQueSiLogo.3327eca733b1f335e85e.jpeg";

/***/ }),

/***/ 8634:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/TaoSushiLogo.7a9b44908c1489240a27.png";

/***/ }),

/***/ 9374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/TrovattaLogo.1850b6dfa130b14cecca.jpg";

/***/ }),

/***/ 8864:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/VinoLogo.859480188f4ca39c5eaf.png";

/***/ }),

/***/ 900:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/mercadotecaLogo.9ae268c94d3d870281cf.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkweb"] = self["webpackChunkweb"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [882], () => (__webpack_require__(3295)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.35eabf38.js.map
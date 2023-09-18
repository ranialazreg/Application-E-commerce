import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from "./context";
import Login from "./components/LoginForm/Login";
import Home from "./components/Home/Home";
import MyCart from "./components/MyCart/MyCart";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import Profile from "./components/Profile/Profile";
import ProfileLivreur from "./components/ProfileLivreur/ProfileLivreur";
import ProfileVendeur from "./components/ProfileVendeur/ProfileVendeur";
import Commandes from "./components/Profile/Commandes/Commandes";
import Livraison from "./components/Livraison/Livraison";
import MyProducts from "./components/CrudProduit/MyProducts";
import EditProduct from "./components/CrudProduit/EditProduct";
import AddProduit from "./components/CrudProduit/AddProduit";
import Ventes from "./components/ProfileVendeur/Ventes/Ventes";
import Vendeurs from "./components/Vendeurs/Vendeurs";
import ProfileMarketPlace from "./components/ProfileMarketPlace/ProfileMarketPlace";
import AddVendeur from "./components/Vendeurs/AddVendeur";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const HomeScreen = ({ navigation, route }) => (
  <ScreenContainer>
    <Home route={route} navigation={navigation} />
  </ScreenContainer>
);
export const MyCartScreen = ({ navigation, route }) => (
  <ScreenContainer>
    <MyCart route={route} navigation={navigation} />
  </ScreenContainer>
);
export const ProductInfoScreen = ({ navigation, route }) => (
  <ScreenContainer>
    <ProductInfo route={route} navigation={navigation} />
  </ScreenContainer>
);
export const CommandesScreen = ({ navigation, route }) => (
  <ScreenContainer>
    <Commandes route={route} navigation={navigation} />
  </ScreenContainer>
);

export const Explore = () => (
  <ScreenContainer>
    <CarsList />
  </ScreenContainer>
);

export const ProfileScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Profile navigation={navigation} />
    </ScreenContainer>
  );
};
export const ProfileLivreurScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ProfileLivreur navigation={navigation} />
    </ScreenContainer>
  );
};
export const ProfileMarketPlaceScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ProfileMarketPlace navigation={navigation} />
    </ScreenContainer>
  );
};
export const ProfileVendeurScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <ProfileVendeur navigation={navigation} />
    </ScreenContainer>
  );
};
export const LivraisonScreen = ({ navigation }) => {
  return (
    <ScreenContainer>
      <Livraison navigation={navigation} />
    </ScreenContainer>
  );
};
export const MesProduitsScreen = ({ route, navigation }) => {
  return (
    <ScreenContainer>
      <MyProducts route={route} navigation={navigation} />
    </ScreenContainer>
  );
};
export const EditProductScreen = ({ route, navigation }) => {
  return (
    <ScreenContainer>
      <EditProduct route={route} navigation={navigation} />
    </ScreenContainer>
  );
};
export const AddProductScreen = ({ route, navigation }) => {
  return (
    <ScreenContainer>
      <AddProduit route={route} navigation={navigation} />
    </ScreenContainer>
  );
};
export const VentesScreen = ({ route, navigation }) => {
  return (
    <ScreenContainer>
      <Ventes route={route} navigation={navigation} />
    </ScreenContainer>
  );
};
export const VendeurScreen = ({ route, navigation }) => {
  return (
    <ScreenContainer>
      <Vendeurs route={route} navigation={navigation} />
    </ScreenContainer>
  );
};
export const AddVendeurScreen = ({ route, navigation }) => {
  return (
    <ScreenContainer>
      <AddVendeur route={route} navigation={navigation} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Login navigation={navigation} />
    </ScreenContainer>
  );
};

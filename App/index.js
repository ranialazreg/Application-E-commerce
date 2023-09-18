import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import AuthService from "./services/auth.service";
import { AuthContext } from "./context";
import {
  SignIn,
  HomeScreen,
  ProfileScreen,
  Splash,
  MyCartScreen,
  ProductInfoScreen,
  CommandesScreen,
  ProfileLivreurScreen,
  LivraisonScreen,
  AddProductScreen,
  MesProduitsScreen,
  EditProductScreen,
  VentesScreen,
  ProfileVendeurScreen,
  VendeurScreen,
  ProfileMarketPlaceScreen,
  AddVendeurScreen,
} from "./Screens";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In", headerShown: false }}
    />
  </AuthStack.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsLivreur = createBottomTabNavigator();
const TabsVendeur = createBottomTabNavigator();
const TabsMarketPlace = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const HomeLivreurStack = createStackNavigator();
const HomeVendeurStack = createStackNavigator();
const HomeMarketPlaceStack = createStackNavigator();
const CartStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeStack.Screen
      name="MyCart"
      component={MyCartScreen}
      options={({ route }) => ({
        headerShown: false,
      })}
    />
    <HomeStack.Screen
      name="ProductInfo"
      component={ProductInfoScreen}
      options={({ route }) => ({
        headerShown: false,
      })}
    />
  </HomeStack.Navigator>
);
const HomeLivreurStackScreen = () => (
  <HomeLivreurStack.Navigator>
    <HomeLivreurStack.Screen
      name="Livraison"
      component={LivraisonScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeLivreurStack.Navigator>
);
const HomeVendeurStackScreen = () => (
  <HomeVendeurStack.Navigator>
    <HomeVendeurStack.Screen
      name="MesProduits"
      component={MesProduitsScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeVendeurStack.Screen
      name="AddProduit"
      component={AddProductScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeVendeurStack.Screen
      name="EditProduit"
      component={EditProductScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeVendeurStack.Navigator>
);
const HomeMarketPlaceStackScreen = () => (
  <HomeMarketPlaceStack.Navigator>
    <HomeMarketPlaceStack.Screen
      name="Vendeurs"
      component={VendeurScreen}
      options={{
        headerShown: false,
      }}
    />
    <HomeMarketPlaceStack.Screen
      name="AddVendeur"
      component={AddVendeurScreen}
      options={{
        headerShown: false,
      }}
    />
  </HomeMarketPlaceStack.Navigator>
);

const CartStackScreen = () => (
  <CartStack.Navigator>
    <CartStack.Screen
      name="MyCart"
      component={MyCartScreen}
      options={({ route }) => ({
        headerShown: false,
      })}
    />
    <CartStack.Screen
      name="ProductInfo"
      component={ProductInfoScreen}
      options={({ route }) => ({
        headerShown: false,
      })}
    />
  </CartStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileLivreurStack = createStackNavigator();
const ProfileVendeurStack = createStackNavigator();
const ProfileMarketPlaceStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="myProfile"
      component={ProfileScreen}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name="commandes"
      component={CommandesScreen}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
);
const ProfileLivreurStackScreen = () => (
  <ProfileLivreurStack.Navigator>
    <ProfileLivreurStack.Screen
      name="ProfileLivreur"
      component={ProfileLivreurScreen}
      options={{
        headerShown: false,
      }}
    />
  </ProfileLivreurStack.Navigator>
);
const ProfileVendeurStackScreen = () => (
  <ProfileVendeurStack.Navigator>
    <ProfileVendeurStack.Screen
      name="ProfileVendeur"
      component={ProfileVendeurScreen}
      options={{
        headerShown: false,
      }}
    />
    <ProfileVendeurStack.Screen
      name="ventes"
      component={VentesScreen}
      options={{
        headerShown: false,
      }}
    />
  </ProfileVendeurStack.Navigator>
);
const ProfileMarketPlaceStackScreen = () => (
  <ProfileMarketPlaceStack.Navigator>
    <ProfileMarketPlaceStack.Screen
      name="ProfileMarketPlace"
      component={ProfileMarketPlaceScreen}
      options={{
        headerShown: false,
      }}
    />
  </ProfileMarketPlaceStack.Navigator>
);

const TabsScreen = () => (
  <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Accueil") {
          return (
            <Ionicons
              name={focused ? "home-outline" : "home-outline"}
              size={size}
              color={"black"}
            />
          );
        } else if (route.name === "Panier") {
          return (
            <Ionicons
              name={focused ? "cart-outline" : "cart-outline"}
              size={size}
              color={"black"}
            />
          );
        } else if (route.name === "Profil") {
          return (
            <Ionicons
              name={focused ? "person-outline" : "person-outline"}
              size={size}
              color={"black"}
            />
          );
        }
      },
      tabBarInactiveTintColor: "gray",
      tabBarActiveTintColor: "black",
    })}
  >
    <Tabs.Screen
      name="Accueil"
      component={HomeStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name="Panier"
      component={CartStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <Tabs.Screen
      name="Profil"
      component={ProfileStackScreen}
      options={{
        headerShown: false,
      }}
    />
  </Tabs.Navigator>
);
const TabsScreenLivreur = () => (
  <TabsLivreur.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Accueil") {
          return (
            <Ionicons
              name={focused ? "home-outline" : "home-outline"}
              size={size}
              color={"black"}
            />
          );
        } else if (route.name === "Profil") {
          return (
            <Ionicons
              name={focused ? "person-outline" : "person-outline"}
              size={size}
              color={"black"}
            />
          );
        }
      },
      tabBarInactiveTintColor: "gray",
      tabBarActiveTintColor: "black",
    })}
  >
    <TabsLivreur.Screen
      name="Accueil"
      component={HomeLivreurStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <TabsLivreur.Screen
      name="Profil"
      component={ProfileLivreurStackScreen}
      options={{
        headerShown: false,
      }}
    />
  </TabsLivreur.Navigator>
);
const TabsScreenVendeur = () => (
  <TabsVendeur.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Accueil") {
          return (
            <Ionicons
              name={focused ? "home-outline" : "home-outline"}
              size={size}
              color={"black"}
            />
          );
        } else if (route.name === "Profil") {
          return (
            <Ionicons
              name={focused ? "person-outline" : "person-outline"}
              size={size}
              color={"black"}
            />
          );
        }
      },
      tabBarInactiveTintColor: "gray",
      tabBarActiveTintColor: "black",
    })}
  >
    <TabsVendeur.Screen
      name="Accueil"
      component={HomeVendeurStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <TabsVendeur.Screen
      name="Profil"
      component={ProfileVendeurStackScreen}
      options={{
        headerShown: false,
      }}
    />
  </TabsVendeur.Navigator>
);
const TabsScreenMarketPlace = () => (
  <TabsMarketPlace.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === "Accueil") {
          return (
            <Ionicons
              name={focused ? "home-outline" : "home-outline"}
              size={size}
              color={"black"}
            />
          );
        } else if (route.name === "Profil") {
          return (
            <Ionicons
              name={focused ? "person-outline" : "person-outline"}
              size={size}
              color={"black"}
            />
          );
        }
      },
      tabBarInactiveTintColor: "gray",
      tabBarActiveTintColor: "black",
    })}
  >
    <TabsMarketPlace.Screen
      name="Accueil"
      component={HomeMarketPlaceStackScreen}
      options={{
        headerShown: false,
      }}
    />
    <TabsMarketPlace.Screen
      name="Profil"
      component={ProfileMarketPlaceStackScreen}
      options={{
        headerShown: false,
      }}
    />
  </TabsMarketPlace.Navigator>
);

// const Drawer = createDrawerNavigator()
// const DrawerScreen = () => (
//   <Drawer.Navigator initialRouteName='Home'>
//     <Drawer.Screen name='Home' component={TabsScreen} />
//     <Drawer.Screen name='Profile' component={ProfileStackScreen} />
//   </Drawer.Navigator>
// )

const RootStack = createStackNavigator();

const RootStackScreen = ({ currentUser }) => {
  if (currentUser) {
    if (currentUser.user.role == "livreur") {
      return (
        <RootStack.Navigator>
          <RootStack.Screen
            name="App2"
            component={TabsScreenLivreur}
            options={{
              animationEnabled: false,
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      );
    } else if (currentUser.user.role == "vendeur") {
      return (
        <RootStack.Navigator>
          <RootStack.Screen
            name="App3"
            component={TabsScreenVendeur}
            options={{
              animationEnabled: false,
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      );
    } else if (currentUser.user.role == "Boutique") {
      return (
        <RootStack.Navigator>
          <RootStack.Screen
            name="App4"
            component={TabsScreenMarketPlace}
            options={{
              animationEnabled: false,
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      );
    } else {
      return (
        <RootStack.Navigator>
          <RootStack.Screen
            name="App"
            component={TabsScreen}
            options={{
              animationEnabled: false,
              headerShown: false,
            }}
          />
        </RootStack.Navigator>
      );
    }
  } else {
    return (
      <RootStack.Navigator>
        <RootStack.Screen
          name="Auth"
          component={AuthStackScreen}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      </RootStack.Navigator>
    );
  }
};

export default Lun = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState(null);
  console.log(currentUser);
  const authContext = React.useMemo(() => {
    return {
      signIn: (email, motDePasse) => {
        setIsLoading(false);
        AuthService.Login(email, motDePasse)
          .then((response) => {
            setCurrentUser(response);
          })
          .catch(() => {
            Alert.alert("erreur 404 ", " Données incorrectes !!", [
              { text: "OK" },
            ]);
            setIsLoading(false);
            setCurrentUser(null);
          });
      },
      signOut: () => {
        setIsLoading(false);
        setCurrentUser(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStackScreen currentUser={currentUser} />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

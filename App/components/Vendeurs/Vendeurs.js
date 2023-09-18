import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { COLOURS } from "../Database/Database";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import ProduitService from "../../services/produit.service";
import AuthService from "../../services/auth.service";
import StyledButton from "../StyledButton/index";
import StyledButtons1 from "../StyledButton1/index";
import CommandeService from "../../services/commande.service";
const Vendeurs = ({ navigation, route }) => {
  const [vendeurs, setVendeurs] = useState([]);

  const [user, setUser] = useState();
  const retrieveUser = () => {
    AuthService.GetCurrentUser()
      .then((data) => {
        setUser(JSON.parse(data));
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    retrieveUser();
  }, []);

  const VendeurOfBoutique = () => {
    AuthService.getVendeursOfBoutique(user?.user?.id)
      .then((response) => {
        setVendeurs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    VendeurOfBoutique();
  }, [user?.user?.id]);

  const renderProducts = (data, index) => {
    return (
      <TouchableOpacity
        key={data.userId}
        // onPress={() => navigation.navigate('ProductInfo', { productID: data.id })}
        style={{
          width: "100%",
          height: 100,
          marginVertical: 6,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "30%",
            height: 100,
            padding: 14,
            justifyContent: "center",

            alignItems: "center",
            borderRadius: 10,
            marginRight: 22,
          }}
        >
          <Image
            source={require("./user.png")}
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            justifyContent: "space-around",
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 14,
                maxWidth: "100%",
                color: COLOURS.black,
                fontWeight: "600",
                letterSpacing: 1,
              }}
            >
              {data.login}
            </Text>
            <View
              style={{
                marginTop: 4,
                flexDirection: "row",
                alignItems: "center",
                opacity: 0.6,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "400",
                  maxWidth: "85%",
                  marginRight: 4,
                }}
              >
                Email : {data.email} DT 
                {"\n"} chiffre d'affaire :{" "}
     {data?.value}
              </Text>
            </View>
            <TouchableOpacity
            // onPress={() => deleteProduit(data.id)}
            >
              <MaterialCommunityIcons
                name="delete-outline"
                style={{
                  fontSize: 16,
                  color: COLOURS.backgroundDark,
                  backgroundColor: COLOURS.white,
                  padding: 8,
                  borderRadius: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate("EditProduit", {
                  produit: data,
                });
              }}
            >
              <MaterialCommunityIcons
                name="border-color"
                style={{
                  fontSize: 16,
                  color: COLOURS.backgroundDark,
                  backgroundColor: COLOURS.white,
                  padding: 8,
                  borderRadius: 100,
                  marginTop: 5,
                  marginBottom: 5,
                }}
              />
            </TouchableOpacity> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: COLOURS.white,
        position: "relative",
      }}
    >
      <ScrollView>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            marginTop: 25,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: COLOURS.black,
              fontWeight: "400",
            }}
          >
            Mes vendeurs
          </Text>
          <StyledButtons1
            type="secondary"
            content={"Ajouter vendeur"}
            onPress={() => {
              navigation.navigate("AddVendeur");
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 16 }}>
          {vendeurs ? vendeurs.map(renderProducts) : null}
        </View>
      </ScrollView>
    </View>
  );
};

export default Vendeurs;

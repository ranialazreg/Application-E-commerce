import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from "react-native";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import ProduitService from "../../services/produit.service";
import styles from "./Styles";
import { ScrollView } from "react-native";
import authService from "../../services/auth.service";
export default function AddVendeur({ navigation, route }) {
  const [user, setUser] = useState();
  const retrieveUser = () => {
    authService
      .GetCurrentUser()
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
  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      login: "",
      motDePasse: "",

    },
  });

  const retourToProduit = () => {
    navigation.navigate("Vendeurs");
  };
  const handleAddVendeur = (login, email, motDePasse) => {
    const boutiqueIdBoutique = user?.user?.id;
    authService
      .AddVendeur(login, email, motDePasse, boutiqueIdBoutique)
      .then((response) => {
        Alert.alert("Succès", "Vous avez ajouté votre vendeur !!", [
          {
            text: "Retour à la pagre des vendeur",
            onPress: () => {
              retourToProduit();
            },
          },
        ]);
      })
      .catch((error) => {
        Alert.alert("erreur 404 ", " Données incorrectes !!", [{ text: "OK" }]);
      });
  };
  const onSubmit = (data) => {
    return handleAddVendeur(
      data.login,
      data.email,
      data.motDePasse,
      data.boutiqueIdBoutique
    );
  };
  const onChange = (arg) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.centerizedView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              // height: Dimensions.get("screen").height,
              width: Dimensions.get("screen").width * 0.9,
            }}
          >
            <View style={styles.inputBox1}>
              <Text style={styles.inputLabel}>Email</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Email"
                    keyboardType="default"
                    textContentType="name"
                  />
                )}
                name="email"
                rules={{ required: true }}
              />
              {errors.email && <Text> Input Required</Text>}
            </View>
            <View style={styles.inputBox1}>
              <Text style={styles.inputLabel}>Login</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Login"
                    keyboardType="default"
                    textContentType="name"
                  />
                )}
                name="login"
                rules={{ required: true }}
              />
              {errors.login && <Text> Input Required</Text>}
            </View>

            <View style={styles.inputBox1}>
              <Text style={styles.inputLabel}>Mot de passe</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Mot de passe"
                    keyboardType="default"
                    textContentType="name"
                  />
                )}
                name="motDePasse"
                rules={{ required: true }}
              />
              {errors.motDePasse && <Text> Input Required</Text>}
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.loginButtonText}>Ajouter Vendeur</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

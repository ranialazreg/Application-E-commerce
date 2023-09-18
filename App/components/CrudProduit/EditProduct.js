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
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";
import ProduitService from "../../services/produit.service";
import styles from "./Styles";
import { ScrollView } from "react-native";
export default function EditProduct({ navigation, route }) {
  let { produit } = route.params;
  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      produitName: produit.prod_name,
      descriptionProduit: produit.description,
      prix: produit.prix,
      produiId: produit.id,
    },
  });

  const retourToProduit = () => {
    navigation.navigate("MesProduits");
  };
  const handleUpdateProduit = (
    produiId,
    descriptionProduit,
    produitName,
    prix
  ) => {
    ProduitService.updateProduit(
      produiId,
      descriptionProduit,
      produitName,
      prix
    )
      .then((response) => {
        Alert.alert("Succès", "Vous avez modifier votre produit !!", [
          {
            text: "Retour à la pagre des produits",
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
    return handleUpdateProduit(
      data.produiId,
      data.descriptionProduit,
      data.produitName,
      data.prix
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
              <Text style={styles.inputLabel}>Nom de produit</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Nom produit"
                    keyboardType="default"
                    textContentType="name"
                  />
                )}
                name="produitName"
                rules={{ required: true }}
              />
              {errors.produitName && <Text> Input Required</Text>}
            </View>

            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Description produit</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Description produit"
                    keyboardType="default"
                    textContentType="name"
                  />
                )}
                name="descriptionProduit"
                rules={{ required: true }}
              />
              {errors.descriptionProduit && <Text> Input Required</Text>}
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Prix produit</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="Prix"
                    keyboardType="number-pad"
                    textContentType="name"
                  />
                )}
                name="prix"
                rules={{ required: true }}
              />
              {errors.prix && <Text> Input Required</Text>}
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.loginButtonText}>Modifier produit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

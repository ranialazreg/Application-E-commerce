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
import * as ImagePicker from "expo-image-picker";
import AuthService from "../../services/auth.service";
export default function AddProduit({ navigation, route }) {
  const [selectedImage, setSelectedImage] = useState(null);
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
  const {
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      prod_name: "",
      description: "",
      prix: "",
      taille: "",
      categories: "",
    },
  });

  const retourToProduit = () => {
    navigation.navigate("MesProduits");
  };

  const handleImageUpload = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permissionResult.granted) {
        Alert.alert(
          "Permission Required",
          "Please grant permission to access the gallery."
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  };
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", {
        uri: selectedImage,
        name: "image.jpg",
        type: "image/jpeg",
      });
      const vendeurId = user?.user?.id;
      formData.append("description", data.description);
      formData.append("prod_name", data.prod_name);
      formData.append("prix", data.prix);
      formData.append("taille", data.taille);
      formData.append("categories", data.categories);
      formData.append("vendeurId", vendeurId);

      const response = await ProduitService.AddProduit(formData);

      Alert.alert("Succès", "Vous avez ajouté votre produit !!", [
        {
          text: "Retour à la pagre des produits",
          onPress: () => {
            retourToProduit();
          },
        },
      ]);
    } catch (error) {
      Alert.alert("erreur 404 ", " Données incorrectes !!", [{ text: "OK" }]);
    }
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
                name="prod_name"
                rules={{ required: true }}
              />
              {errors.prod_name && <Text> Input Required</Text>}
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
                name="description"
                rules={{ required: true }}
              />
              {errors.description && <Text> Input Required</Text>}
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
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Taille produit</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="taille"
                    keyboardType="default"
                    textContentType="name"
                  />
                )}
                name="taille"
                rules={{ required: true }}
              />
              {errors.taille && <Text> Input Required</Text>}
            </View>
            <View style={styles.inputBox}>
              <Text style={styles.inputLabel}>Catégorie produit</Text>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={(value) => onChange(value)}
                    value={value}
                    placeholder="catégorie"
                    keyboardType="default"
                    textContentType="name"
                  />
                )}
                name="categories"
                rules={{ required: true }}
              />
              {errors.categories && <Text> Input Required</Text>}
            </View>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleImageUpload}
            >
              <Text style={styles.loginButtonText}>Choisir Image</Text>
            </TouchableOpacity>

            {selectedImage && (
              // <Image
              //   source={{ uri: selectedImage }}
              //   style={{ width: 200, height: 200 }}
              // />
              <Text style={styles.loginButtonText}>{selectedImage}</Text>
            )}
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.loginButtonText}>Ajouter produit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

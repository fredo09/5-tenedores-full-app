import React from "react";
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "./../../../components/Autenticacion/LoginForm";
import { View, ScrollView } from "react-native";
import { Text, Image } from "react-native-elements";

import { styles } from "./LoginScreen.style";

import { Screen } from "./../../../utils/screensName";

export const LoginScreen = () => {
  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(Screen.account.registerUser);
  };

  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        {/* <LoginForm /> */}
        <LoginForm />
        <Text style={styles.textRegister}>
          ¿Aún no tienes cuenta{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Regístrarse
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

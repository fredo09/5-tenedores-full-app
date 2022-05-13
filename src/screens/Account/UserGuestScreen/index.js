/**Usuario invitado */

import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import { Screen } from "./../../../utils/screensName";

import { styles } from "./UserGuestScreen.styles";

export const UserGuestScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Usuario invitado</Text>
    </View>
  );
  /*
  const goToLogin = () => {
    navigation.navigate(Screen.account.login);
  };*/
  /*
  return (
    <ScrollView centerContent={true} style={styles.containerView}>
      <Image
        source={require("./../../../../assets/img/user-guest.jpeg")}
        style={styles.image}
      />

      <Text style={styles.title}>Consultar tu perfil en 5Tenedores </Text>

      <Text style={styles.description}>
        ¿Cómo describirías tu mejor Restaurante? Busca y encuentra los mejores
        Restaurantes de una forma sencilla, vota por el que más te ha gustado y
        comenta cual ha sido tu experiencia.
      </Text>

      <View style={styles.viewBtn}>
        <Button
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          title={"Ver tu Perfil"}
          onPress={goToLogin}
        />
      </View>
    </ScrollView>
  );*/
};

/**Usuario invitado */

import React from "react";
import { View, ScrollView } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { styles } from "../../../components/LoadingModal/LoadingModal.styles";
import { Styles } from "./UserGuestScreen.styles";

export const UserGuestScreen = () => {
  return (
    <ScrollView centerContent style={styles.containerView}>
      <Image
        source={require("./../../../../assets/img/user-guest.jpeg")}
        style={Styles.image}
      />

      <Text style={Styles.title}>Consultar tu perfil en 5Tenedores </Text>

      <Text style={Styles.description}></Text>
    </ScrollView>
  );
};

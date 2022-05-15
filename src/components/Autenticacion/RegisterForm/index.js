import React from "react";
import { View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";

import { styles } from "./RegisterForm.styles";

export const RegisterForm = () => {
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo Electronico"
        containerStyle={styles.inputForm}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.rightIcon}
          />
        }
      />

      <Input
        placeholder="Contraseña"
        secureTextEntry
        rightIcon={<Icon type="material-community" name="eye-off-outline" />}
      />
      <Input
        placeholder="Repetir Contraseña"
        secureTextEntry
        rightIcon={<Icon type="material-community" name="eye-off-outline" />}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.stylesbtn}
        onPress={() => console.log("click")}
      />
    </View>
  );
};

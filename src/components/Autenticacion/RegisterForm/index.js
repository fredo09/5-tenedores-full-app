import React, { useState } from "react";
import { View } from "react-native";
import { useFormik } from "formik";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Screen } from "./../../../utils/screensName";
import { Input, Button, Icon } from "react-native-elements";
import { initialValues, validateSchema } from "./RegisterForm.data";

import { styles } from "./RegisterForm.styles";

export const RegisterForm = () => {
  const [showPassowrd, setShowPassword] = useState(false);
  const [showRepeatPassowrd, setShowRepeatPassword] = useState(false);

  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validateSchema(),
    onSubmit: async (formData) => {
      try {
        const auth = getAuth();

        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        navigation.navigate(Screen.account.cuenta);
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1: "Error al registrarse. Intente otra vez",
        });
      }
    },
  });

  //Jugando con el valor para mostrar o no la contraseña
  const showPassowrdInput = () =>
    setShowPassword((preventState) => !preventState);

  const showRepeatPassowrdInput = () =>
    setShowRepeatPassword((preventState) => !preventState);

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
        onChangeText={(text) => formik.setFieldValue("email", text)}
        errorMessage={formik.errors.email}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry={showPassowrd ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassowrd ? "eye-outline" : "eye-off-outline"}
            onPress={showPassowrdInput}
          />
        }
        onChangeText={(text) => formik.setFieldValue("password", text)}
        errorMessage={formik.errors.password}
      />
      <Input
        placeholder="Repetir Contraseña"
        secureTextEntry={showRepeatPassowrd ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeatPassowrd ? "eye-outline" : "eye-off-outline"}
            onPress={showRepeatPassowrdInput}
          />
        }
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        errorMessage={formik.errors.repeatPassword}
      />
      <Button
        title="Unirse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.stylesbtn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
};

import React from "react";
import { Button } from "react-native-elements";
import { View, Text } from "react-native";
import { Screen } from "./../../utils/screensName";

export const RestaurantScreen = ({ navigation }) => {
  const onHandleAddRestaurant = () => {
    //navigation.navigate(Screen.restaurant.addRestaurant);
    //TODO
  };

  return (
    <View>
      <Text>Restaurant Screen</Text>
      <Button title="Crear restaurante" onPress={onHandleAddRestaurant} />
    </View>
  );
};

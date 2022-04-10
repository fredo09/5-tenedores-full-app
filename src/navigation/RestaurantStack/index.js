import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantScreen } from "../../screens/Restaurant";
import { AddRestaurantScreen } from "./../../screens/Restaurant/AddRestaurantScreen";
import { Screen } from "../../utils/screensName";

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.restaurant.restaurants}
        component={RestaurantScreen}
        options={{
          title: "Restaurantes",
        }}
      />

      <Stack.Screen
        name={Screen.restaurant.addRestaurant}
        component={AddRestaurantScreen}
        options={{
          title: "Nuevo Restaurante",
        }}
      />
    </Stack.Navigator>
  );
}

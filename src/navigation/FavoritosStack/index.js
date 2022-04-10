import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { FavoritosScreen } from "./../../screens/Favoritos";

import { Screen } from "./../../utils/screensName";

const Stack = createNativeStackNavigator();

export const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.favorites.favoritos}
        component={FavoritosScreen}
        options={{
          title: "Mis Favoritos",
        }}
      />
    </Stack.Navigator>
  );
};

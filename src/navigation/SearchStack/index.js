import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SearchScreen } from "./../../screens/Search";

import { Screen } from "./../../utils/screensName";

const Stack = createNativeStackNavigator();

export const SearchStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.search.search}
        component={SearchScreen}
        options={{
          title: "Buscador",
        }}
      />
    </Stack.Navigator>
  );
};

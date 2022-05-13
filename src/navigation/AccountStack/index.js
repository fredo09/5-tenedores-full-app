import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountScreen } from "./../../screens/Account";

import { LoginScreen } from "./../../screens/Account/LoginScreen";

import { Screen } from "./../../utils/screensName";

const Stack = createNativeStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.account.cuenta}
        component={AccountScreen}
        options={{
          title: "Mi Cuenta",
        }}
      />
      <Stack.Screen
        name={Screen.account.login}
        component={LoginScreen}
        options={{
          title: "Iniciar Sesión",
        }}
      />
    </Stack.Navigator>
  );
};

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountScreen } from "./../../screens/Account";

import { Screen } from "./../../utils/screensName";

const Stack = createNativeStackNavigator();

export const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.account.tab}
        component={AccountScreen}
        options={{
          title: "Mi Cuenta",
        }}
      />
    </Stack.Navigator>
  );
};

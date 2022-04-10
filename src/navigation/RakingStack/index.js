import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RankingScreen } from "./../../screens/Ranking";

import { Screen } from "./../../utils/screensName";

const Stack = createNativeStackNavigator();

export const RakingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.ranking.ranking}
        component={RankingScreen}
        options={{
          title: "Ranking",
        }}
      />
    </Stack.Navigator>
  );
};

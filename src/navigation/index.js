import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importando Screen
import { RestaurantScreen } from "./../screens/Restaurant";
import { FavoritosScreen } from "./../screens/Favoritos";
import { SearchScreen } from "./../screens/Search";
import { RankingScreen } from "./../screens/Ranking";
import { AccountScreen } from "./../screens/Account";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Restaurant" component={RestaurantScreen} />
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Buscador" component={SearchScreen} />
      <Tab.Screen name="Ranking" component={RankingScreen} />
      <Tab.Screen name="Cuenta" component={AccountScreen} />
    </Tab.Navigator>
  );
}

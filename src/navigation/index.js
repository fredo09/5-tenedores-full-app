import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

//Importando Screen
import { RestaurantScreen } from "./../screens/Restaurant";
import { FavoritosScreen } from "./../screens/Favoritos";
import { SearchScreen } from "./../screens/Search";
import { RankingScreen } from "./../screens/Ranking";
import { AccountScreen } from "./../screens/Account";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) =>
          screenOptionsTabsIcon(route, color, size),
      })}
    >
      <Tab.Screen name="Restaurant" component={RestaurantScreen} />
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Buscador" component={SearchScreen} />
      <Tab.Screen name="Ranking" component={RankingScreen} />
      <Tab.Screen name="Cuenta" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function screenOptionsTabsIcon(route, color, size) {
  let iconName = "";

  if (route.name === "Restaurant") {
    iconName = "compass-outline";
  }

  if (route.name === "Favoritos") {
    iconName = "heart-outline";
  }

  if (route.name === "Buscador") {
    iconName = "magnify";
  }

  if (route.name === "Ranking") {
    iconName = "star-outline";
  }

  if (route.name === "Cuenta") {
    iconName = "account";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}

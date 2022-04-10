import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";

//Importando Screen stack
import { RestaurantStack } from "./RestaurantStack";
import { FavoritesStack } from "./FavoritosStack";
import { RakingStack } from "./RakingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";

//Importando screen de forma mas simple
import { Screen } from "./../utils/screensName";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        headerShown: false,
        tabBarIcon: ({ color, size }) =>
          screenOptionsTabsIcon(route, color, size),
      })}
    >
      <Tab.Screen
        name={Screen.restaurant.tab}
        component={RestaurantStack}
        options={{
          title: "Restaurants",
        }}
      />
      <Tab.Screen
        name={Screen.favorites.tab}
        component={FavoritesStack}
        options={{
          title: "Favoritos",
        }}
      />
      <Tab.Screen
        name={Screen.search.tab}
        component={SearchStack}
        options={{
          title: "Search",
        }}
      />
      <Tab.Screen
        name={Screen.ranking.tab}
        component={RakingStack}
        options={{
          title: "Rankings",
        }}
      />
      <Tab.Screen
        name={Screen.account.tab}
        component={AccountStack}
        options={{
          title: "Account",
        }}
      />
    </Tab.Navigator>
  );
}

function screenOptionsTabsIcon(route, color, size) {
  const { restaurant, search, favorites, ranking, account } = Screen;

  let iconName = "";

  if (route.name === restaurant.tab) {
    iconName = "compass-outline";
  }

  if (route.name === favorites.tab) {
    iconName = "heart-outline";
  }

  if (route.name === search.tab) {
    iconName = "magnify";
  }

  if (route.name === ranking.tab) {
    iconName = "star-outline";
  }

  if (route.name === account.tab) {
    iconName = "account";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}

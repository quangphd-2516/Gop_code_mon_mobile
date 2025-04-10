import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Icon } from "react-native-vector-icons/MaterialIcons";

import ShopScreen from "../screens/ShopScreen";
import ExploreScreen from "../screens/ExploreScreen";
import CartScreen from "../screens/CartScreen";
import FavouriteScreen from "../screens/FavouriteScreen";
import AccountScreen from "../screens/AccountScreen";

const tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === "Shop") iconName = "storefront";
                        else if (route.name === "Explore") iconName = "explore";
                        else if (route.name === "Cart") iconName = "shopping-cart";
                        else if (route.name === "Favourite") iconName = "favorite";
                        else if (route.name === "Account") iconName = "person";
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "green",
                    tabBarInactiveTintColor: "gray"
                })}
            >
                <tab.Screen name="Shop" component={ShopScreen} />
                <tab.Screen name="Explore" component={ExploreScreen} />
                <tab.Screen name="Cart" component={CartScreen} />
                <tab.Screen name="Favourite" component={FavouriteScreen} />
                <tab.Screen name="Account" component={AccountScreen} />
            </tab.Navigator>
        </NavigationContainer>
    )
}
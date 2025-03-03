import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Scan from "./Scan";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Nav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === "Home") {
                        iconName = "home-outline";
                    } else if (route.name === "Scan") {
                        iconName = "scan-outline";
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#007AFF",
                tabBarInactiveTintColor: "gray",
                tabBarStyle: { height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 20 },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Scan" component={Scan} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default Nav;
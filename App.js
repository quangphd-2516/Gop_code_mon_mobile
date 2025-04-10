import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from './Screen/SplashScreen';
import OnboardingScreen from './Screen/OnboardingScreen';
import SignInScreen from './Screen/SignInScreen';
import NumberScreen from './Screen/NumberScreen';
import VerificationScreen from './Screen/VerificationScreen';

import SelectLocation from './Screen/SelectLocation';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import ShopScreen from './Screen/ShopScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="NumberScreen" component={NumberScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="SelectLocation" component={SelectLocation} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

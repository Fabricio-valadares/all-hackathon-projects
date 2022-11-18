import React from "react";
import { StatusBar } from "expo-status-bar";
import { HomePage } from "./src/pages/Home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginPage } from "./src/pages/Login";
import { DiaryControlPage } from "./src/pages/DiaryControl";
import { PasswordRecovery } from "./src/pages/PasswordRecovery";
import { RegisterPage } from "./src/pages/Register";

type RootStackParamList = {
  Login: undefined
  Home: undefined
  Diary: { isOutputTransaction?: boolean }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Diary" component={DiaryControlPage} />
        <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
        <Stack.Screen name="Register" component={RegisterPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

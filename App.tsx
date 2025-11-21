import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { UserScreen } from "@/presentation/screens/UserScreen";

export default function App() {
  return (
    <NavigationContainer>
      <UserScreen />
    </NavigationContainer>
  );
}
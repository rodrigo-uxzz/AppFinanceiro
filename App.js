import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/pages/Splash/index";
import Home from "./src/pages/Home/index";
import Login from "./src/pages/Login/index";
import Cadastro from "./src/pages/Cadastro/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash}
        options={{
          headerShown: false

        }}
        />
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name='Cadastro' component={Cadastro}
        options={{
          headerShown: false

        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
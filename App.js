import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import store from "./src/store";
import { setUsers } from "./src/store/users";
import { Users } from "./src/components/Users";
import { SingleUser } from "./src/components/SingleUser";
import { Provider, useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
export default function App() {
  const Stack = createNativeStackNavigator();
  const fetchUsers = async () => {
    axios.get("https://dummyjson.com/users").then((res) => {
      console.log("X", res.data);
      store.dispatch(setUsers(res.data));
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Users' component={Users} />
          <Stack.Screen name='SingleUser' component={SingleUser} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

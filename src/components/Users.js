import React, { useEffect } from "react";
import { View, Image, Text, FlatList, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
export const Users = ({ navigation }) => {
  const x = useSelector((state) => state.users.data);
  useEffect(() => {
    console.log(x);
  }, [x]);

  const Item = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ margin: 10, alignSelf: "center" }}
        onPress={() => {
          navigation.navigate("SingleUser", { item });
        }}
      >
        <View style={{ display: "flex", backgroundColor: "gray", width: 150 }}>
          <View style={{ flex: 3 }}>
            <Image
              style={{ width: "70px", height: "70px" }}
              source={item.image}
            ></Image>
          </View>
          <View style={{ flex: 1 }}>
            <Text>
              {item.firstName} {item.lastName}, {item.age}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{ display: "flex" }}>
        {x && (
          <FlatList data={x.users} numColumns={2} renderItem={Item}></FlatList>
        )}
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "blue",

          padding: 10,
        }}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
    </>
  );
};

import React from "react";
import { View, Image, Text } from "react-native";

export const SingleUser = ({ route }) => {
  const user = route.params.item;
  console.log(user);
  return (
    <View>
      <Image
        style={{ width: "70px", height: "70px" }}
        source={user.image}
      ></Image>
      <Text>
        {user.firstName} {user.lastName}, {user.age}
      </Text>
      <Text>
        {user.company.address.address}, {user.company.address.postalCode},{" "}
        {user.company.address.state}
      </Text>
    </View>
  );
};

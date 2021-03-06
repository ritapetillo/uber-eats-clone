import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
interface MenuItemProps {
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    image_url: string;
  };
}

const MenuItem = ({ item }: MenuItemProps) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Item" as never, { item } as never)}
    >
      <View style={tw`flex-row p-4`} key={item.id}>
        <View style={tw`flex-grow`}>
          <Text style={tw`text-base font-medium`}>{item.name}</Text>
          <Text style={tw`text-base font-light leading-8`}>$ {item.price}</Text>
          <Text style={tw`text-gray-500`}>{item.description}</Text>
        </View>
        <View>
          <Image
            source={{ uri: item.image_url }}
            style={tw`h-24 w-24 rounded`}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});

import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import categories, { Category } from "../../data/categories";

const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categories.map((category: Category) => (
        <View style={tw`items-center p-3 px-4`}>
          <Image source={category.image} style={tw`h-12 w-12 mb-2`} />
          <Text>{category.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({});

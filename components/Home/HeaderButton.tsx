import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import tw from "tailwind-react-native-classnames";
interface HeaderButton {
  title: string;
  setSelected: (title: string) => void;
  selected: string;
}
const HeaderButton = ({ title, setSelected, selected }: HeaderButton) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSelected(title);
      }}
      style={tw`px-3 py-2 text-white ${
        selected === title ? `bg-black` : "bg-white"
      } rounded-full`}
    >
      <Text
        style={tw`${
          selected === title ? "text-white" : "text-black"
        } font-extrabold `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({});

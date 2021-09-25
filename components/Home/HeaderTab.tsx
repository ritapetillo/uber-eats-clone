import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import HeaderButton from "./HeaderButton";

const HeaderTab = () => {
  const [selected, setSelected] = React.useState("Delivery");
  return (
    <View style={tw`flex-row justify-center py-4 bg-white`}>
      <HeaderButton
        title="Delivery"
        setSelected={setSelected}
        selected={selected}
      />
      <HeaderButton
        title="Pickup"
        setSelected={setSelected}
        selected={selected}
      />
    </View>
  );
};

export default HeaderTab;

const styles = StyleSheet.create({});

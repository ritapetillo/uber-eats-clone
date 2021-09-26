import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const CheckoutScreen = () => {
  const order = useSelector((state: RootState) => state.order);
  console.log(order);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({});

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/BusinessDetails/Header";
import MenuItem from "../components/BusinessDetails/MenuItem";
import { MenuItem as MI, menuItems } from "../data/menuItems";
import { selectedBusiness } from "../slices/restaurantSlice";
import { RootState } from "../store";

const BusinessDetails = () => {
  const business = useSelector((state: RootState) => selectedBusiness(state));

  React.useEffect(() => {
    console.log(business);
  }, []);
  return (
    <View>
      <Header />
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(item) => <MenuItem item={item.item} />}
      />
    </View>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Header from "../components/BusinessDetails/Header";
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
    </View>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({});

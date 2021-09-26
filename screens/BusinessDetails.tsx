import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import Header from "../components/BusinessDetails/Header";
import MenuItem from "../components/BusinessDetails/MenuItem";
import { MenuItem as MI, menuItems } from "../data/menuItems";
import { selectedBusiness } from "../slices/restaurantSlice";
import { RootState } from "../store";

const BusinessDetails = ({ navigation }: any) => {
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
      <View style={tw`mt-auto flex-none h-20 items-center mb-3`}>
        <TouchableOpacity
          style={tw`bg-black p-4 w-80`}
          onPress={() => navigation.navigate("Checkout")}
        >
          <Text style={tw`text-white text-center text-base`}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BusinessDetails;

const styles = StyleSheet.create({});

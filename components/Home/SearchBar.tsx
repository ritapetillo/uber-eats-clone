import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import tw from "tailwind-react-native-classnames";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Location from "../../interfaces/location";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRestaurants,
  setLocation as setLocationSearch,
} from "../../slices/restaurantSlice";
import { RootState } from "../../store";

const SearchBar = () => {
  const selectedLocation = useSelector(
    (state: RootState) => state.restaurants.location
  );

  const dispatch = useDispatch();
  const handleSearch = async () => {
    dispatch(fetchRestaurants(selectedLocation));
  };
  selectedLocation;
  return (
    <View style={tw`flex-row px-4 pb-5`}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 10,
          },
        }}
        onPress={(data, details) => {
          if (details) {
            const location = {
              lat: details!.geometry.location.lat,
              lng: details!.geometry.location.lng,
              name: details!.formatted_address,
            };
            dispatch(setLocationSearch(location));
          }
        }}
        onFail={(error) => console.log(error)}
        query={{
          key: "AIzaSyAJhI0A5w7lFrM6ILly0Khc12fSPIEaaUY",
          language: "en",
        }}
        nearbyPlacesAPI="GooglePlacesSearch"
        renderLeftButton={() => (
          <Ionicons name="location-sharp" size={24} color="black" />
        )}
        renderRightButton={() => (
          <TouchableOpacity
            style={tw`flex-row items-center bg-white p-2 mr-2 rounded-full`}
            onPress={handleSearch}
          >
            <AntDesign name="clockcircle" size={11} color="black" />
            <Text style={tw`ml-2`}>Search</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});

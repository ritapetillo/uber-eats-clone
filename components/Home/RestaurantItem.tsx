import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { localRestaurants } from "../../data/restaurants";
import { AntDesign } from "@expo/vector-icons";
import { Restaurant } from "../../interfaces/restaurants";
import { useNavigation } from "@react-navigation/core";
import { getBusinessDetails } from "../../slices/restaurantSlice";
import { useDispatch } from "react-redux";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaurantItemProps) => {
  const [favorite, setFavorite] = React.useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableWithoutFeedback
      key={restaurant.id}
      onPress={() => {
        dispatch(getBusinessDetails(restaurant.id));
        // @ts-ignore
        navigation.navigate("Details");
      }}
    >
      <View style={tw`relative py-4 px-4 `}>
        <AntDesign
          onPress={() => setFavorite(!favorite)}
          name={favorite ? "heart" : "hearto"}
          size={24}
          color="white"
          style={tw`absolute right-6 top-6 z-10`}
        />
        {restaurant.image_url ? (
          <Image
            source={{ uri: restaurant.image_url }}
            style={tw`h-44 w-full mb-3`}
            resizeMode="cover"
          />
        ) : null}
        <View style={tw`flex-row justify-between items-center`}>
          <View>
            <Text style={tw`font-bold text-base`}>{restaurant.name}</Text>
            <Text style={tw`text-gray-600`}>35-45 min</Text>
          </View>
          <View
            style={tw`bg-gray-200 h-8 w-8 rounded-full items-center justify-center`}
          >
            <Text>{restaurant.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RestaurantItem;

const styles = StyleSheet.create({});

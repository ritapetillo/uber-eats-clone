import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import Categories from "../components/Home/Categories";
import HeaderTab from "../components/Home/HeaderTab";
import RestaurantItem from "../components/Home/RestaurantItem";
import SearchBar from "../components/Home/SearchBar";
import { Restaurant } from "../interfaces/restaurants";
import { pendingSelector } from "../slices/restaurantSlice";
import { RootState } from "../store";
import Loader from "react-native-multi-loader";

const Home = () => {
  const restaurantList = useSelector(
    (state: RootState) => state.restaurants.retaurantList
  );
  const pending = useSelector((state: RootState) => pendingSelector(state));

  return (
    <SafeAreaView style={[tw`bg-gray-100 flex-grow`]}>
      <ScrollView
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={true}
        keyboardShouldPersistTaps="always"
      >
        <HeaderTab />
        <View style={tw`bg-white `}>
          <SearchBar />
        </View>
        <View>
          <Categories />
        </View>
        {/* <ScrollView showsHorizontalScrollIndicator={false}> */}
        <View>
          {pending ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader
                visible={true}
                loaderType="bars"
                textType="default"
                sizeText={14}
              />
            </View>
          ) : (
            restaurantList?.map((restaurant: Restaurant) => (
              <RestaurantItem restaurant={restaurant} key={restaurant.id} />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

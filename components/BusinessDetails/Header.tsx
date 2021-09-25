import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectedBusiness } from "../../slices/restaurantSlice";
import { RootState } from "../../store";

const Header = () => {
  const business = useSelector((state: RootState) => selectedBusiness(state));
  const categories = React.useMemo(() => {
    return (
      <Text style={tw`py-1`}>
        {business &&
          business.categories &&
          business?.categories?.map(
            (category, i) =>
              `${category.title} ${
                i !== business.categories!.length - 1 ? "• " : ""
              }`
          )}
      </Text>
    );
  }, [business]);
  return (
    <View
      style={[
        tw`shadow pb-1`,
        { borderBottomWidth: 0.5, borderColor: "lightgrey" },
      ]}
    >
      <View>
        <Image
          source={{ uri: business?.image_url }}
          resizeMode="cover"
          style={tw`h-52 w-full`}
        />
      </View>
      <View style={tw`p-3`}>
        {/* Title */}
        <Text style={tw`text-3xl mb-1 font-bold py-1`}>{business?.name}</Text>
        {/* Subtitles */}
        <View style={tw`flex-row flex-wrap`}>
          {categories}
          <Text style={tw`py-1`}>
            • {business?.price} • {business?.rating} ⭐ (
            {business?.review_count})
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

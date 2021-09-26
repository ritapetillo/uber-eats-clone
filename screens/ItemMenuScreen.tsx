import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Variation } from "../data/menuItems";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { addItem, ItemOrder } from "../slices/orderSlice";
import { useDispatch } from "react-redux";

const VariationMenu = ({
  variation: { id, name, cost },
  selected,
  setSelected,
}: {
  variation: Variation;
  selected: number;
  setSelected: (id: number) => void;
}) => {
  return (
    <TouchableOpacity onPress={() => setSelected(id)}>
      <View
        key={id}
        style={[
          tw`flex-row flex-grow py-5`,
          { borderBottomWidth: 0.5, borderBottomColor: "lightgray" },
        ]}
      >
        <View>
          {selected !== id ? (
            <Ionicons
              name="square-outline"
              size={28}
              color="lightgray"
              style={tw`mr-3`}
            />
          ) : (
            <Ionicons
              name="checkbox-outline"
              size={28}
              color="grey"
              style={tw`mr-3`}
            />
          )}
        </View>
        <Text style={tw`flex-grow text-base font-semibold`}>{name}</Text>
        <Text style={tw`text-base text-gray-500`}>+ ${cost}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ItemMenuScreen = ({ route, navigation }: any) => {
  const { item } = route.params;
  const [selected, setSelected] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const setOrder = () => {
    const orderItem: ItemOrder = {
      name: item.name,
      id: item.id,
      quantity,
      price: item.price * quantity,
      variation: selected,
    };
    dispatch(addItem(orderItem));
    navigation.goBack();
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={tw`flex-none`}>
        <Image
          source={{ uri: item?.image_url }}
          style={tw`w-full`}
          height={370}
          resizeMode="cover"
        />
      </View>
      <View style={tw`p-4 flex-none`}>
        <Text style={tw`text-4xl font-semibold mb-2`}>{item?.name}</Text>
        <Text style={tw`text-sm text-gray-500`}>{item?.description}</Text>
      </View>
      <View style={tw`flex-grow`}>
        <View style={tw`bg-gray-200 px-4 py-3`}>
          <Text style={tw`w-full text-lg font-semibold`}>Size Options</Text>
          <Text style={tw`w-full text-base text-gray-500`}>
            Required • choose one:
          </Text>
        </View>
        <View style={tw`px-4 flex-grow`}>
          <FlatList
            data={item?.variations}
            keyExtractor={(item: Variation) => item.id.toString()}
            renderItem={({ index, item }) => (
              <VariationMenu
                variation={item}
                selected={selected}
                setSelected={setSelected}
              />
            )}
          />
          <View style={tw`flex-row  py-5 justify-center items-center`}>
            <AntDesign
              onPress={() => setQuantity(quantity - 1)}
              name="minuscircleo"
              size={42}
              style={tw`font-light text-gray-300`}
            />
            <Text style={tw`text-xl font-light px-5 text-gray-600`}>
              {quantity}
            </Text>
            <AntDesign
              onPress={() => setQuantity(quantity + 1)}
              name="pluscircleo"
              size={42}
              style={tw`font-light text-gray-300`}
            />
          </View>
        </View>
      </View>
      <View style={tw`mt-auto flex-none h-20 items-center mb-3`}>
        <TouchableOpacity
          style={tw`bg-black p-4 w-80`}
          onPress={() => setOrder()}
        >
          <Text style={tw`text-white text-center text-base`}>
            Add {quantity} to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ItemMenuScreen;

const styles = StyleSheet.create({});

import {ScrollView, Image, Text, View, TouchableOpacity} from "react-native";
import React from "react";
import icons from "../../assets/icons";

const Policy = ({navigation}) => {
  return (
    <View className="h-full bg-[#EFEBEB]">
      <View className="bg-white px-4 py-3 border-b-[1px] border-[#00000033]">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Checkout");
          }}>
          <Image source={icons.cancelDark} className="h-[30px] w-[30px]" />
        </TouchableOpacity>
      </View>
      <View className="bg-white py-4 px-4">
        <Text className="font-montserrat-bold text-xl text-black">
          Refund & Cancellation
        </Text>
      </View>
      <ScrollView className="px-4 py-4">
        <Text className="text-black font-proxima-nova-regular-italic mb-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text className="text-black font-proxima-nova-regular-italic mb-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text className="text-black font-proxima-nova-regular-italic mb-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Policy;

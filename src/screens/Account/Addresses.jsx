import {Text, View, Image, TouchableOpacity, Platform} from "react-native";
import React, {useEffect, useState} from "react";
import icons from "../../assets/icons";

const Addresses = ({navigation}) => {
  return (
    <View className="h-full bg-[#F4F4F4]">
      <View className="px-3 bg-white flex flex-row items-center py-3 space-x-2 pt-4 shadow shadow-[#84767640] mb-2">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}>
          <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
        <Text className="font-montserrat-bold text-black text-lg">
          ADDRESSES
        </Text>
      </View>
    </View>
  );
};

export default Addresses;

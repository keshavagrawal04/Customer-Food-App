import {Text, View, Image, TouchableOpacity, Platform} from "react-native";
import React, {useEffect, useState} from "react";
import icons from "../../assets/icons";

const RefundStatus = ({navigation}) => {
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
          REFUND STATUS
        </Text>
      </View>
      <View className="bg-white mx-5 mt-5 rounded-2xl p-5 flex flex-row justify-between items-center">
        <Text className="text-[#00000080] font-proxima-nova-regular w-[80%]">
          Due to some ongoing enhancements to Swiggy Money, your refunds will be
          directed to the original
        </Text>
        <View className="bg-[#e9efef] shadow shadow-[#00000040] rounded-full p-2">
          <Image source={icons.refund} className="w-[22px] h-[22px]" />
        </View>
      </View>
      <Text className="text-center text-black font-proxima-nova-regular mt-4">
        You don't have any past refund
      </Text>
    </View>
  );
};

export default RefundStatus;

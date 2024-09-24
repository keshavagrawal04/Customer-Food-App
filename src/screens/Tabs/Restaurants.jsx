import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SearchInput} from "../../components/Inputs";
import icons from "../../assets/icons";

const Restaurants = () => {
  return (
    <View>
      <View className="flex gap-2 p-4 bg-slate-200 rounded-b-3xl">
        <Image source={icons.backArrowDark} className="w-[24px] h-[24px]" />
        {/* Restorant card  */}
        <View className=" bg-white px-4 py-2 flex gap-2 rounded-lg">
          <View className="flex flex-row justify-between ">
            <View>
              <View className="flex flex-row items-center space-x-1 pb-2">
                <View className="border-2 border-[#2DAD78] rounded-md p-1">
                  <Image source={icons.trophy} className="w-[14px] h-[14px]" />
                </View>
                <Text className="font-proxima-nova-bold text-[#3C3A45] text-lg">
                  Best In Paneer
                </Text>
              </View>
              <Text className="font-montserrat-bold text-black text-xl">
                Shri Gurukripa
              </Text>
            </View>
            <View className="flex justify-center items-center">
              <View className="bg-[#2DAD78] px-2 py-2 py-proxima1 rounded-lg flex flex-row items-center space-x-1">
                <Text className="text-sm text-white font-proxima-nova-bold">
                  4.2
                </Text>
                <Text className="text-white" style={{fontSize: 12}}>
                  ★
                </Text>
              </View>
              <View>
                <Text className="text-black font-proxima-nova-regular text-sm">
                  5,230 rating
                </Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row space-x-1 items-center">
            <Image source={icons.bicycle} className="w-[14px] h-[14px]" />
            <Text className="text-black font-proxima-nova-regular text-base">
              55-60 mins • 4.5 km • Bhanwar Kuwa
            </Text>
          </View>
          <View className="bg-[#FD631F40]">
            <Text className="text-[#FD631F] font-proxima-nova-regular">
              Flat $125 OFF above $249 + Free Dilevery
            </Text>
          </View>
        </View>
      </View>
      <View className="p-4"></View>
      <View className="flex p-4">
        <Text className="text-center py-4 font-montserrat-bold text-black text-lg">
          Menu
        </Text>
        <SearchInput
          placeholder={"Search..."}
          icon={icons.search}
          handleInputPress={() => {}}
        />
      </View>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({});

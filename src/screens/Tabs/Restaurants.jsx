import {Image, StyleSheet, Text, View} from "react-native";
import React from "react";
import {SearchInput} from "../../components/Inputs";
import icons from "../../assets/icons";

const Restaurants = () => {
  return (
    <View>
      <View className="flex gap-2 p-4 bg-slate-200 rounded-b-3xl">
        <Text>Back</Text>
        {/* Restorant card  */}
        <View className=" bg-white px-4 py-2 flex gap-2 rounded-lg">
          <View className="flex flex-row justify-between ">
            <View>
              <Text className="font-bold text-lg">Best In Pareer</Text>
              <Text className="font-extrabold text-2xl">Shri Gurukripa</Text>
            </View>
            <View className="flex justify-center items-center">
              <View className="bg-emerald-400 px-2 py-1 rounded-lg">
                <Text className="text-lg text-white font-bold">4.2 *</Text>
              </View>
              <View>
                <Text>5,230 rating</Text>
              </View>
            </View>
          </View>
          <Text>55-60 mins . 4.5 km . Bhanwar Kuwa</Text>
          <View className="">
            <Text className="text-red-400">
              Flat $125 OFF above $249 + Free Dilevery
            </Text>
          </View>
        </View>
      </View>
      <View className='p-4'>
      </View>
      <View className="flex p-4">

        <Text className='text-center py-4 font-bold'>Menu</Text>
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

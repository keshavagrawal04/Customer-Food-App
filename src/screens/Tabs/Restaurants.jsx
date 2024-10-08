import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, {useState} from "react";
import {SearchInput} from "../../components/Inputs";
import icons from "../../assets/icons";
import images from "../../assets/images";

const Restaurants = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilterOption, setSelectedFilterOption] = useState("");

  const filterOptions = [
    {label: "Pure Veg", value: "pureVeg", icon: icons.leave},
    {label: "Rating 4.0+", value: "rating"},
    {label: " Best Seller", value: "bestSeller"},
  ];

  return (
    <ScrollView className="bg-white">
      <View
        className="flex gap-2 p-4 bg-slate-200 pb-5"
        style={{borderBottomStartRadius: 45, borderBottomEndRadius: 45}}>
        <Image source={icons.backArrowDark} className="w-[24px] h-[24px]" />
        {/* Restorant card  */}
        <View className=" bg-white px-4 py-2 flex gap-2  mt-2 rounded-2xl">
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
              <View className="bg-[#2DAD78] px-4 py-2 py-proxima1 rounded-lg flex flex-row items-center space-x-1">
                <Text className="text-sm text-white font-proxima-nova-bold">
                  4.2
                </Text>
                <Text className="text-white" style={{fontSize: 12}}>
                  ★
                </Text>
              </View>
              <View className="mt-2">
                <Text
                  className="text-black font-proxima-nova-regular"
                  style={{fontSize: 13}}>
                  5,230 rating
                </Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row space-x-1 items-center py-4">
            <Image source={icons.bicycle} className="w-[14px] h-[14px]" />
            <Text className="text-black font-proxima-nova-regular text-base">
              55-60 mins • 4.5 km • Bhanwar Kuwa
            </Text>
          </View>
          <View className="">
            <Text className="text-[#FD631F] font-proxima-nova-regular">
              Flat $125 OFF above $249 + Free Dilevery
            </Text>
          </View>
        </View>
      </View>
      <View className="p-4 flex flex-row items-center space-x-2 border-[1px] border-[#00000033] mx-4 rounded-2xl mt-4">
        <Image source={icons.offer} className="w-[40px] h-[40px]" />
        <View>
          <View>
            <Text className="text-black text-lg font-montserrat-bold">
              50% Off upto ₹100
            </Text>
            <Text className="text-[#3C3A45] font-montserrat-regular">
              USE MISSEDYOU | ABOVE ₹179
            </Text>
          </View>
        </View>
      </View>
      <View className="flex px-4 pt-2">
        <Text className="text-center py-4 font-montserrat-bold text-black text-lg">
          Menu
        </Text>
        <SearchInput
          placeholder={"Search..."}
          icon={icons.search}
          handleInputPress={() => {}}
          isEdit={true}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
      </View>
      <View className="flex flex-row mx-5 pb-8 pt-4 space-x-3 border-b-[1px] border-[#00000033]">
        {filterOptions.map(filter => (
          <TouchableOpacity
            onPress={() => {
              setSelectedFilterOption(filter.value);
            }}
            key={filter.value}
            className={`border-[1px] px-3 py-2 rounded-full flex flex-row justify-between items-center ${
              filter.value === selectedFilterOption
                ? "border-secondary-green"
                : "border-[#00000033]"
            }`}>
            {filter.icon && (
              <Image source={filter.icon} className="w-[20px] h-[20px]" />
            )}
            <Text
              className={`font-proxima-nova-regular ${
                filter.value === selectedFilterOption
                  ? "text-secondary-green"
                  : "text-black"
              }`}>
              {filter.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text className="font-montserrat-bold text-lg text-black mx-5 py-5">
        Top Picks
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        className="mx-5 flex flex-row space-x-4">
        <View className="h-[290px] w-[290px] rounded-xl">
          <Image
            source={icons.paneerPasanda}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="border-[1px] border-secondary-green rounded-sm absolute top-3 left-3 p-1">
            <View className="w-[12px] h-[12px] bg-secondary-green rounded-full" />
          </View>
          <Text className="font-proxima-nova-bold text-white absolute top-9 text-xl left-3">
            Paneer Pasanda
          </Text>
          <View className="flex flex-row absolute items-center justify-between bottom-5 left-3 right-3">
            <Text className="font-proxima-nova-bold text-white text-xl">
              ₹352
            </Text>
            <View className="flex flex-row items-center bg-white border-[1px] border-secondary-green px-5 py-1 rounded-full space-x-1">
              <Text className="text-secondary-green text-xl font-montserrat-bold">
                +
              </Text>
              <Text className="text-secondary-green font-montserrat-bold">
                ADD
              </Text>
            </View>
          </View>
          <Text className="absolute bottom-1 right-4 font-proxima-nova-regular text-[#FFFFFF80]">
            Customizable
          </Text>
        </View>
        <View className="h-[290px] w-[290px] rounded-xl">
          <Image
            source={icons.paneerPasanda}
            className="w-full h-full"
            resizeMode="cover"
          />
          <View className="border-[1px] border-secondary-green rounded-sm absolute top-3 left-3 p-1">
            <View className="w-[12px] h-[12px] bg-secondary-green rounded-full" />
          </View>
          <Text className="font-proxima-nova-bold text-white absolute top-9 text-xl left-3">
            Paneer Pasanda
          </Text>
          <View className="flex flex-row absolute items-center justify-between bottom-5 left-3 right-3">
            <Text className="font-proxima-nova-bold text-white text-xl">
              ₹352
            </Text>
            <View className="flex flex-row items-center bg-white border-[1px] border-secondary-green px-5 py-1 rounded-full space-x-1">
              <Text className="text-secondary-green text-xl font-montserrat-bold">
                +
              </Text>
              <Text className="text-secondary-green font-montserrat-bold">
                ADD
              </Text>
            </View>
          </View>
          <Text className="absolute bottom-1 right-4 font-proxima-nova-regular text-[#FFFFFF80]">
            Customizable
          </Text>
        </View>
      </ScrollView>
      <View className="mb-52"></View>
    </ScrollView>
  );
};

export default Restaurants;

const styles = StyleSheet.create({});

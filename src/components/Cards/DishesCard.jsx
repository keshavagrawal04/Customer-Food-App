import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import icons from "../../assets/icons";
import images from "../../assets/images";

const DishesCard = ({
  title,
  price,
  originalPrice,
  discount,
  rating,
  reviews,
  imageUrl,
}) => {
  return (
    <View className="flex-row bg-white rounded-lg shadow-lg w-full border-b-[1px] border-[#0000001A] pb-4">
      <View className="flex-1">
        <View className="flex flex-row">
          <View className="border-[1px] border-secondary-green rounded-sm p-1">
            <View className="w-[12px] h-[12px] bg-secondary-green rounded-full" />
          </View>
        </View>

        <View className="flex-row justify-between items-center">
          <Text className="text-lg text-[#3C3A45] font-proxima-nova-bold">
            {title || "Special Dal Makhani"}
          </Text>
        </View>

        <View className="flex-row items-center">
          <Text className="text-lg font-proxima-nova-bold text-[#3C3A45]">
            ₹{price || 320}
          </Text>
          <Text className="text-lg text-[#3C3A4580] font-proxima-nova-regular line-through ml-2">
            ₹{originalPrice || 400}
          </Text>
        </View>
        <Text className="text-[#1A70FE] font-proxima-nova-bold text-base">
          {discount || 20}% OFF
        </Text>

        <View className="flex-row items-center">
          <View className="flex-row"></View>
          <Text className="text-[#3C3A45] font-proxima-nova-bold text-lg">
            {rating || 4.2}
          </Text>
          <Text className="font-proxima-nova-regular text-[#3C3A45] ml-1">
            ({reviews || 19683})
          </Text>
        </View>

        <Text className="text-gray-500 text-sm font-proxima-nova-regular">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, ...{" "}
          <Text className="font-proxima-nova-bold text-black">more</Text>
        </Text>
        <View className="flex flex-row pt-2">
          <TouchableOpacity className="flex flex-row items-center bg-[#FF69614D] px-3 py-3 rounded-full space-x-1">
            <Image source={icons.tag} className="w-[20px] h-[20px]" />
            <Text className="text-black font-montserrat-regular">
              Save To Eatlist
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View className="w-32 h-32 rounded-lg overflow-hidden">
          <Image
            source={images.dish}
            className="w-full h-full object-cover"
            resizeMode="contain"
          />
        </View>
        <View className="flex flex-row items-center justify-center">
          <TouchableOpacity className="flex flex-row items-center bg-white absolute border-[1px] border-secondary-green px-6 py-1 rounded-full space-x-1">
            <Text className="text-secondary-green text-xl font-montserrat-bold">
              +
            </Text>
            <Text className="text-secondary-green font-montserrat-bold">
              ADD
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DishesCard;

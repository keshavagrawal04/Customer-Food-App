import {Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import images from "../../assets/images";
import icons from "../../assets/icons";

const RestaurantCard = ({containerStyles}) => {
  return (
    <View className={`rounded-2xl bg-white ${containerStyles}`}>
      <Image
        source={images.noodles}
        className="h-[280px] w-full rounded-t-2xl"
        resizeMode="cover"
      />
      <Text className="absolute top-4 left-3 text-black font-proxima-nova-regular bg-white rounded-full py-2 px-3">
        Noodles &#8377;60
      </Text>
      <View className="absolute top-4 right-3 flex gap-2">
        <TouchableOpacity className="rounded-full bg-white p-2">
          <Image source={icons.wishlist} className="w-[22px] h-[22px]" />
        </TouchableOpacity>
        <TouchableOpacity className="rounded-full bg-white p-2">
          <Image source={icons.add} className="w-[22px] h-[22px]" />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row items-center justify-between mx-5 border-b-[1px] border-[#E3E3E3] py-3">
        <Text className="text-black font-montserrat-bold text-2xl">
          Sam Food Parlor
        </Text>
        <View className="flex flex-row items-center gap-2">
          <Image source={icons.review} className="w-[20px] h-[20px]" />
          <Text className="text-black font-montserrat-bold text-lg">4.5</Text>
        </View>
      </View>
      <View className="px-5 py-3 flex flex-row items-center gap-2">
        <Image source={icons.offer} className="w-[22px] h-[22px]" />
        <Text className="font-proxima-nova-regular text-secondary-gray">
          Flat ₹125 OFF above ₹249
        </Text>
      </View>
    </View>
  );
};

export default RestaurantCard;

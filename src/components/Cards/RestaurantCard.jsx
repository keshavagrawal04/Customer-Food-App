import {Text, View, Image, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import images from "../../assets/images";
import icons from "../../assets/icons";
import RestaurantCarousel from "../Carousels/RestaurantCarousel";

const RestaurantCard = ({containerStyles}) => {
  const dishes = [
    {
      name: "Noodles",
      price: "60",
      image: images.noodles,
      distance: "4.5 Km",
      time: "31 mins",
    },
    {
      name: "Chowmein",
      price: "50",
      image: images.noodles,
      distance: "4.5 Km",
      time: "31 mins",
    },
  ];

  return (
    <View className={`rounded-2xl bg-white ${containerStyles}`}>
      <RestaurantCarousel dishes={dishes} />
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

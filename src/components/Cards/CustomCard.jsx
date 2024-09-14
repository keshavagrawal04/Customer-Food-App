import {Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import images from "../../assets/images";
import icons from "../../assets/icons";

const CustomCard = () => {
  return (
    <View className="w-[180px] h-[240px] overflow-hidden rounded-xl">
      <Image
        source={images.masalaDosa}
        className="w-[100%] h-[100%]"
        resizeMode="cover"
      />
      <Text
        className="absolute top-3 left-2 bg-secondary-green rounded-full text-white font-proxima-nova-bold px-3 py-2"
        style={{fontSize: 12}}>
        Extra 10% Off
      </Text>
      <TouchableOpacity className="rounded-full bg-white p-1 absolute top-3 right-2">
        <Image source={icons.wishlist} className="w-[22px] h-[22px]" />
      </TouchableOpacity>
      <View className="absolute left-2 bottom-3">
        <Text className="text-white font-montserrat-bold text-lg">
          Shree Gurukripa
        </Text>
        <View className="flex flex-row gap-2">
          <Image source={icons.review} className="w-[22px] h-[22px]" />
          <Text className="text-white font-montserrat-bold">
            4.3 • 70-75 mins
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CustomCard;

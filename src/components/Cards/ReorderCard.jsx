import {Text, View, Image, TouchableOpacity} from "react-native";
import React from "react";
import images from "../../assets/images";
import icons from "../../assets/icons";

const ReorderItem = ({name, price}) => {
  return (
    <View className="flex flex-row items-center justify-between mt-3 mx-3">
      <View className="flex flex-row space-x-2">
        <View className="border-2 border-secondary-green rounded-sm flex items-center justify-center h-[22px] w-[22px]">
          <View className="h-[12px] w-[12px] bg-secondary-green rounded-full" />
        </View>
        <View>
          <Text className="text-black font-montserrat-semibold">{name}</Text>
          <Text className="text-[#00000099] font-montserrat-regular pt-1">
            ₹{price}
          </Text>
        </View>
      </View>
      <TouchableOpacity className="flex items-center justify-center border rounded-md p-1 border-secondary-green">
        <Image source={icons.addGreen} className="w-[22px] h-[22px]" />
      </TouchableOpacity>
    </View>
  );
};

const ReorderCard = ({item}) => {
  return (
    <View className="bg-white rounded-3xl p-2 border border-[#00000033]">
      <View className="bg-[#F5F5F7] flex flex-row rounded-t-3xl items-center p-2 space-x-2">
        <TouchableOpacity className="absolute top-2 right-2 bg-white rounded-full p-1">
          <Image source={icons.wishlist} className="w-[20px] h-[20px]" />
        </TouchableOpacity>
        <Image source={images.reorderImage} className="w-[60px] h-[60px]" />
        <View>
          <Text className="text-black font-proxima-nova-bold text-lg">
            {item?.restaurant} • {item?.distance}
          </Text>
          {item?.isOffer && (
            <View className="flex flex-row items-center space-x-1">
              <Image
                source={icons.offerTagPrimary}
                className="w-[10px] h-[10px]"
              />
              <Text className="text-[#00000099] font-montserrat-regular">
                {item?.offer}
              </Text>
            </View>
          )}
        </View>
      </View>
      <View className="py-5">
        {item?.dishes.map(dish => (
          <ReorderItem name={dish?.name} price={dish?.price} />
        ))}
      </View>
    </View>
  );
};

export default ReorderCard;

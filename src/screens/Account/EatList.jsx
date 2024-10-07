import {View, TouchableOpacity, Image, Text} from "react-native";
import icons from "../../assets/icons";
import React from "react";
import images from "../../assets/images";

const EatList = ({navigation}) => {
  return (
    <View>
      <View
        className="flex pt-5 px-4 flex-row items-center"
        style={{zIndex: 1}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}>
          <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
      </View>
      <View>
        <View className="flex flex-row justify-center absolute -top-16 -z-0">
          <Image
            source={images.eatlistBg}
            className="w-[100%] h-[280px]"
            resizeMode="contain"
          />
        </View>
      </View>
      <View className="flex flex-row justify-center items-center mt-5">
        <Image
          source={images.eatlist1}
          className="w-[75%] h-[220px]"
          resizeMode="contain"
        />
      </View>
      <View>
        <Text
          style={{opacity: 0.5}}
          className="text-[#000000CC] font-proxima-nova-regular text-center text-xl">
          YOUR
        </Text>
        <Text className="text-[#000000CC] font-proxima-nova-bold text-center text-4xl py-2">
          Eatlists!
        </Text>
        <Text
          className="text-[#000000CC] font-proxima-nova-regular text-center text-5xl"
          style={{opacity: 0.2}}>
          Make your
        </Text>
        <Text
          className="text-[#000000CC] font-proxima-nova-regular text-center text-5xl"
          style={{opacity: 0.2}}>
          own Eatlist?
        </Text>
      </View>
      <View className="flex flex-row justify-center">
        <Image
          source={images.eatlist2}
          className="w-[100%] h-[200px]"
          resizeMode="contain"
        />
      </View>
      <View className="mt-4">
        <Text
          className="text-black text-base font-proxima-nova-regular text-center"
          style={{opacity: 0.7}}>
          To get started
        </Text>
        <Text
          className="text-primary-orange text-base font-proxima-nova-regular text-center"
          style={{opacity: 0.7}}>
          search for your favourite restaurants
        </Text>
      </View>
    </View>
  );
};

export default EatList;

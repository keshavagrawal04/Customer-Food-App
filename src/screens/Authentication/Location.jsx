import {Image, Text, TouchableOpacity, View} from "react-native";
import icons from "../../assets/icons";
import React from "react";

const Location = ({navigation}) => {
  return (
    <View className="h-full bg-[#F5F5F5]">
      <View className="bg-white py-4 px-5 flex-row items-center">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("LocationAccess");
          }}>
          <Image
            source={icons.backArrow}
            resizeMode="contain"
            className="h-[30px] w-[30px]"
          />
        </TouchableOpacity>
        <Text className="mx-auto text-secondary-gray font-montserrat-bold text-2xl">
          Enter you area
        </Text>
      </View>
      <TouchableOpacity className="flex flex-row items-center gap-2 px-5 py-4 border-b-[1px] border-[#3c3a451a]">
        <Image
          source={icons.currentLocation}
          resizeMode="contain"
          className="w-[22px] h-[22px]"
        />
        <Text className="font-montserrat-bold text-lg text-primary-orange">
          Use my current location
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Location;

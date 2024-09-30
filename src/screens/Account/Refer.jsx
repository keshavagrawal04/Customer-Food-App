import {Text, View, Image, ScrollView} from "react-native";
import React from "react";
import icons from "../../assets/icons";
import images from "../../assets/images";
import {CustomButton} from "../../components/Buttons";

const Refer = () => {
  return (
    <ScrollView className="h-full bg-[#F4F4F4]">
      <View className="bg-[#3C2E6C] rounded-b-2xl px-5 py-3">
        <View className="pb-8">
          <Image source={icons.backArrowLight} className="w-[26px] h-[26px]" />
        </View>
        <View className="flex flex-row justify-between mb-5">
          <View>
            <Text className="text-white text-xl font-montserrat-bold">
              Refer your friends
            </Text>
            <Text className="text-white text-xl font-montserrat-bold">
              {" "}
              & Earn!
            </Text>
          </View>
          <View>
            <Image source={images.refer1} className="w-[100px] h-[90px]" />
            <Image
              source={images.refer2}
              className="absolute z-10 -top-5 -left-2 w-[38px] h-[62px]"
            />
          </View>
        </View>
      </View>
      <View className="bg-white rounded-xl py-10 mt-8 mx-4">
        <View className="flex flex-row justify-between">
          <View className="mx-auto">
            <Image source={images.bee} className="w-[60px] h-[70px]" />
          </View>
          <View>
            <Image source={images.thumbDown} className="w-[130px] h-[100px]" />
          </View>
        </View>
        <View className="mt-10">
          <Text className="text-black font-proxima-nova-bold text-center text-lg">
            Oh Sorry! Referral Program is not
          </Text>
          <Text className="text-black font-proxima-nova-bold text-center text-lg">
            live right now
          </Text>
        </View>
      </View>
      <CustomButton
        title={"Explore food app"}
        containerStyles={`mx-4 mt-6 rounded-full py-5`}
      />
    </ScrollView>
  );
};

export default Refer;

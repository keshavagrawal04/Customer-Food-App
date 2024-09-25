import {ScrollView, Image, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import images from "../../assets/images";
import icons from "../../assets/icons";

const Account = ({navigation}) => {
  const [isAccountOpening, setIsAccountOpening] = useState(false);

  return (
    <ScrollView className="mt-5">
      <View className="flex px-4 flex-row items-center justify-between">
        <TouchableOpacity>
          <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#FCDDCB] rounded-xl">
          <Text className="text-primary-orange font-proxima-nova-bold px-2 py-1">
            Help
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-4 px-4">
        <Text className="text-[#000000CC] font-proxima-nova-bold pb-2 text-lg">
          RAM
        </Text>
        <Text className="text-[#000000] font-proxima-nova-regular pb-2">
          +91-9988776655 ram.sharma@gmail.com
        </Text>
        <TouchableOpacity
          className="flex flex-row items-center space-x-2"
          onPress={() => {
            navigation.navigate("EditProfile");
          }}>
          <Text className="text-primary-orange font-proxima-nova-bold">
            Edit Profile
          </Text>
          <Image
            source={icons.primaryForwardArrow}
            className="h-[16px] w-[16px]"
            resizeMethod="contain"
          />
        </TouchableOpacity>
        <View className="">
          {/* My Account */}
          <View className="border-b-[1px] border-[#0000001A] mt-4">
            <TouchableOpacity
              className="flex flex-row justify-between items-center pb-3"
              onPress={() => {
                setIsAccountOpening(prev => !prev);
              }}>
              <View>
                <Text className="text-black font-proxima-nova-bold text-sm pb-2">
                  My Account
                </Text>
                <Text className="text-[#00000080] font-proxima-nova-regular">
                  Favourites, Hidden restaurants & Settings
                </Text>
              </View>
              <Image
                source={icons.bottomArrowGray}
                className="w-[20px] h-[20px]"
              />
            </TouchableOpacity>
            {isAccountOpening && (
              <View className="border-t-[1px] border-[#0000001A] border-dashed py-2">
                {/* Favourites */}
                <View>
                  <View className="flex flex-row items-center space-x-4">
                    <Image
                      source={icons.favourites}
                      className="w-[22px] h-[22px]"
                    />
                    <Text className="font-proxima-nova-regular py-3 text-[#00000080]">
                      Favourites
                    </Text>
                  </View>
                </View>
                {/* Hidden Restaurants */}
                <View>
                  <View className="flex flex-row items-center space-x-4">
                    <Image
                      source={icons.hiddenRestaurants}
                      className="w-[22px] h-[22px]"
                    />
                    <Text className="font-proxima-nova-regular py-3 text-[#00000080]">
                      Hidden Restaurants
                    </Text>
                  </View>
                </View>
                {/* Hidden Restaurants */}
                <View>
                  <View className="flex flex-row items-center space-x-4">
                    <Image
                      source={icons.settings}
                      className="w-[22px] h-[22px]"
                    />
                    <Text className="font-proxima-nova-regular py-3 text-[#00000080]">
                      Settings
                    </Text>
                  </View>
                </View>
              </View>
            )}
          </View>
        </View>
      </View>
      <TouchableOpacity
        className="bg-white py-4 px-4 flex flex-row justify-between mt-5 items-center"
        onPress={() => {
          navigation.navigate("LogoutOptions");
        }}>
        <Text className="text-black font-proxima-nova-bold">
          LOGOUT OPTIONS
        </Text>
        <Image source={icons.forwardArrowDark} className="w-[20px] h-[20px]" />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Account;

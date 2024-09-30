import {ScrollView, Image, Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import images from "../../assets/images";
import icons from "../../assets/icons";

const Account = ({navigation}) => {
  const [isAccountOpening, setIsAccountOpening] = useState(false);
  const [isRefundOpening, setIsRefundOpening] = useState(false);

  return (
    <ScrollView className="h-full">
      <View className="flex pt-5 px-4 flex-row items-center justify-between bg-[#FFFF]">
        <TouchableOpacity>
          <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-[#FCDDCB] rounded-xl">
          <Text className="text-primary-orange font-proxima-nova-bold px-2 py-1">
            Help
          </Text>
        </TouchableOpacity>
      </View>
      <View className="pt-4 px-4 bg-[#FFFF]">
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
                <TouchableOpacity className="flex flex-row justify-between items-center">
                  <View className="flex flex-row items-center space-x-4">
                    <Image
                      source={icons.favourites}
                      className="w-[22px] h-[22px]"
                    />
                    <Text className="font-proxima-nova-regular py-3 text-[#00000080]">
                      Favourites
                    </Text>
                  </View>
                  <Image
                    source={icons.forwardArrowDark}
                    className="w-[18px] h-[18px]"
                  />
                </TouchableOpacity>
                {/* Hidden Restaurants */}
                <TouchableOpacity className="flex flex-row justify-between items-center">
                  <View className="flex flex-row items-center space-x-4">
                    <Image
                      source={icons.hiddenRestaurants}
                      className="w-[22px] h-[22px]"
                    />
                    <Text className="font-proxima-nova-regular py-3 text-[#00000080]">
                      Hidden Restaurants
                    </Text>
                  </View>
                  <Image
                    source={icons.forwardArrowDark}
                    className="w-[18px] h-[18px]"
                  />
                </TouchableOpacity>
                {/* Settings */}
                <TouchableOpacity
                  className="flex flex-row justify-between items-center"
                  onPress={() => {
                    navigation.navigate("Settings");
                  }}>
                  <View className="flex flex-row items-center space-x-4">
                    <Image
                      source={icons.settings}
                      className="w-[22px] h-[22px]"
                    />
                    <Text className="font-proxima-nova-regular py-3 text-[#00000080]">
                      Settings
                    </Text>
                  </View>
                  <Image
                    source={icons.forwardArrowDark}
                    className="w-[18px] h-[18px]"
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
          {/* My Eatlists */}
          <View className="border-b-[1px] border-[#0000001A] mt-4">
            <TouchableOpacity
              className="flex flex-row justify-between items-center pb-3"
              onPress={() => {
                navigation.navigate("Eatlist");
              }}>
              <View>
                <View className="flex flex-row space-x-1 items-center mb-2">
                  <Text className="text-black font-proxima-nova-bold text-sm">
                    My Eatlists
                  </Text>
                  <Text className="font-proxima-nova-bold text-white bg-primary-orange px-2 text-sm rounded-md">
                    NEW
                  </Text>
                </View>
                <Text className="text-[#00000080] font-proxima-nova-regular">
                  View all your saved lists in one place
                </Text>
              </View>
              <Image
                source={icons.forwardArrowDark}
                className="w-[20px] h-[20px]"
              />
            </TouchableOpacity>
          </View>
          {/* My Address */}
          <View className="border-b-[1px] border-[#0000001A] mt-4">
            <TouchableOpacity
              className="flex flex-row justify-between items-center pb-3"
              onPress={() => {
                navigation.navigate("Addresses");
              }}>
              <View>
                <View className="flex flex-row space-x-1 items-center mb-2">
                  <Text className="text-black font-proxima-nova-bold text-sm">
                    Addresses
                  </Text>
                </View>
                <Text className="text-[#00000080] font-proxima-nova-regular">
                  Share, Edit & Add New Addresses
                </Text>
              </View>
              <Image
                source={icons.forwardArrowDark}
                className="w-[20px] h-[20px]"
              />
            </TouchableOpacity>
          </View>
          {/* Payments & Refunds */}
          <View className="mt-4">
            <TouchableOpacity
              className="flex flex-row justify-between items-center pb-3"
              onPress={() => {
                setIsRefundOpening(prev => !prev);
              }}>
              <View>
                <Text className="text-black font-proxima-nova-bold text-sm pb-2">
                  Payments & Refunds
                </Text>
                <Text className="text-[#00000080] font-proxima-nova-regular">
                  Refund Status & Payment Modes
                </Text>
              </View>
              <Image
                source={icons.bottomArrowGray}
                className="w-[20px] h-[20px]"
              />
            </TouchableOpacity>
            {isRefundOpening && (
              <View className="border-t-[1px] border-[#0000001A] border-dashed py-2">
                {/* Refund Status */}
                <TouchableOpacity
                  className="flex flex-row justify-between items-center"
                  onPress={() => {
                    navigation.navigate("RefundStatus");
                  }}>
                  <View className="flex flex-row items-center space-x-4">
                    <Image
                      source={icons.refundStatus}
                      className="w-[22px] h-[22px]"
                    />
                    <View className="flex flex-row items-center space-x-2">
                      <Text className="font-proxima-nova-regular py-3 text-[#00000080]">
                        Refund Status
                      </Text>
                      <Text className="text-[#D07B01] bg-[#F3E6C5] border py-1 border-[#D07B0199] rounded-md px-2 font-proxima-nova-regular">
                        0 active refund
                      </Text>
                    </View>
                  </View>
                  <Image
                    source={icons.forwardArrowDark}
                    className="w-[18px] h-[18px]"
                  />
                </TouchableOpacity>
                {/* Payment Modes */}
                <TouchableOpacity className="flex flex-row justify-between items-center">
                  <View className="flex flex-row items-center space-x-4">
                    <Image
                      source={icons.paymentModes}
                      className="w-[22px] h-[22px]"
                    />
                    <Text className="font-proxima-nova-regular py-3 text-[#00000080]">
                      Payment Modes
                    </Text>
                  </View>
                  <Image
                    source={icons.forwardArrowDark}
                    className="w-[18px] h-[18px]"
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
      <Text className="text-black font-proxima-nova-regular mt-4 px-4 bg-[#F4F4F4]">
        PAST ORDER
      </Text>
      <View className="bg-white py-4 px-4 mt-4">
        <View className="border-b-[1px] border-[#0000001A] border-dashed">
          <Text
            className="text-black font-proxima-nova-regular pb-2"
            style={{fontSize: 16}}>
            Krishna Restaurant
          </Text>
          <Text className="text-[#00000080] font-proxima-nova-regular pb-2">
            Indore
          </Text>
          <View className="flex flex-row items-center space-x-1 pb-5">
            <Text className="text-[#00000080] font-proxima-nova-regular">
              ₹268
            </Text>
            <Image
              source={icons.forwardArrowDark}
              className="w-[12px] h-[12px]"
            />
          </View>
        </View>
        <TouchableOpacity className="mt-4">
          <Text className="text-primary-orange font-proxima-nova-bold">
            VIEW MORE ORDERS
          </Text>
        </TouchableOpacity>
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
      <View className="mt-5">
        <Text className="text-center text-[#00000080] font-proxima-nova-regular text-sm">
          App version 5.54.2(1200)
        </Text>
      </View>
    </ScrollView>
  );
};

export default Account;

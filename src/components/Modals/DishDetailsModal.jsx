import React from "react";
import {Modal, View, Image, Text, TouchableOpacity} from "react-native";
import images from "../../assets/images";
import icons from "../../assets/icons";
import {CustomButton} from "../Buttons";

const DishDetailsModal = ({visible, handleClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View className={`flex-1 justify-end items-center bg-black/50`}>
        <View className={`bg-white w-[94%] rounded-t-3xl shadow-lg`}>
          <TouchableOpacity
            onPress={handleClose}
            className="absolute top-5 right-5 z-10">
            <Image
              source={icons.closeWhiteFill}
              className="w-[30px] h-[30px]"
            />
          </TouchableOpacity>
          <Image
            source={images.dish}
            className="h-[250px] rounded-t-3xl w-full"
            resizeMode="cover"
          />
          <View className="flex px-4 py-4">
            <CustomButton
              title={"ADD"}
              variant="secondary-outline-green"
              containerStyles={"py-3 rounded-full absolute px-5 top-5 right-5"}
              icon={icons.addGreen}
              iconStyle={`h-[24px] w-[24px]`}
            />
            <View className="border border-secondary-green h-[12px] w-[12px] p-2 flex justify-center items-center rounded-sm">
              <View className="h-[10px] w-[10px] bg-secondary-green rounded-full" />
            </View>
            <Text className="text-secondary-gray font-proxima-nova-regular text-base pt-2">
              Special Dal Makhani
            </Text>
            <View className="flex flex-row items-center gap-2">
              <Text className="text-secondary-gray font-proxima-nova-regular text-base pt-2">
                &#8377; 320
              </Text>
              <Text className="text-secondary-gray-light line-through font-proxima-nova-regular text-base pt-2">
                &#8377; 320
              </Text>
            </View>
            <Text className="text-[#1A70FE] font-montserrat-bold pt-2">
              20 %OFF
            </Text>
            <View className="flex flex-row items-center gap-2">
              <View className="bg-[#ffc7421a] rounded-lg px-2 py-1 flex flex-row">
                <Image source={icons.oneStar} className="w-[24px] h-[24px]" />
                <Image source={icons.oneStar} className="w-[24px] h-[24px]" />
                <Image source={icons.oneStar} className="w-[24px] h-[24px]" />
                <Image source={icons.oneStar} className="w-[24px] h-[24px]" />
                <Image source={icons.halfStar} className="w-[24px] h-[24px]" />
              </View>
              <Text className="text-secondary-gray font-proxima-nova-bold text-xl">
                4.2
              </Text>
              <Text className="text-secondary-gray font-proxima-nova-regular text-base">
                (19683)
              </Text>
            </View>
            <Text className="text-secondary-gray-light font-proxima-nova-regular text-base pt-2">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DishDetailsModal;

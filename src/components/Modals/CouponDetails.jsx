import React from "react";
import {Modal, View, Image, Text, TouchableOpacity} from "react-native";
import icons from "../../assets/icons";

const CouponDetails = ({visible, handleClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View className={`flex-1 justify-end items-center bg-black/50`}>
        <View className={`bg-white w-[94%] rounded-t-3xl shadow-lg pb-5`}>
          <TouchableOpacity
            onPress={handleClose}
            className="absolute top-8 right-5 z-10">
            <Image source={icons.close} className="w-[25px] h-[25px]" />
          </TouchableOpacity>
          <View className="pt-8 border-b border-light pb-4 mx-5">
            <Text className="text-secondary-gray font-montserrat-bold text-lg">
              Addition 20% discount on
            </Text>
            <Text className="text-secondary-gray font-montserrat-bold text-lg">
              this order
            </Text>
          </View>
          <View className="mx-5 mt-3 flex flex-row items-center space-x-2 pb-6">
            <View className="bg-[#00000080] h-[5px] w-[5px] rounded-full"></View>
            <Text className="text-[#00000099] font-proxima-nova-regular">
              The discount is automatically applied at checkout.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CouponDetails;

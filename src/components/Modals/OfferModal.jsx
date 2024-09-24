import React from "react";
import {Modal, View, Image, TouchableOpacity, Text} from "react-native";
import images from "../../assets/images";
import icons from "../../assets/icons";

const OfferModal = ({visible, handleClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View className={`flex-1 justify-center items-center bg-black/50`}>
        <View
          className={`w-80 p-5 bg-white rounded-3xl shadow-lg flex items-center`}>
          <TouchableOpacity
            className="absolute top-4 right-4"
            onPress={handleClose}>
            <Image source={icons.closeFill} className="w-[24px] h-[24px]" />
          </TouchableOpacity>
          <View className="flex items-center w-full">
            <Image source={images.offer} className="w-[180px] h-[180px] py-5" />
            <Text className="absolute text-black-light bottom-12 text-center font-montserrat-semibold">
              Congratulations!
            </Text>
            <Text className="absolute text-black bottom-2 text-center font-montserrat-bold text-xl">
              Instant ₹25 off!
            </Text>
          </View>
          <Text className="text-center text-black font-proxima-nova-regular py-2 text-lg px-10">
            Applicable Over & Above Coupons
          </Text>
          <Text className="font-montserrat-bold text-primary-orange text-2xl py-2">
            Woaho!!!
          </Text>
        </View>
      </View>
    </Modal>
  );
};

export default OfferModal;

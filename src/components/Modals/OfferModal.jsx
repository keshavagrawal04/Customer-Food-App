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
          <TouchableOpacity className="absolute top-4 right-4">
            <Image source={icons.closeFill} className="w-[24px] h-[24px]" />
          </TouchableOpacity>
          <View className="border flex items-center">
            <Image source={images.offer} className="w-[180px] h-[180px] py-5" />
            <Text className="absolute -bottom-2 text-black-light text-center font-montserrat-semibold text-base">
              Congratulations!
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OfferModal;

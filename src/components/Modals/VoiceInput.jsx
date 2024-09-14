import React, {useEffect, useState} from "react";
import {
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import icons from "../../assets/icons";

const VoiceInput = ({visible, handleClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View className={`flex-1 justify-end items-center bg-black/50`}>
          <View className={`w-[90%] p-5 bg-white rounded-t-3xl shadow-lg`}>
            <Text className="text-center text-secondary-gray-light pt-5 text-base font-proxima-nova-regular">
              Hi, I’m Listening. Try Saying...
            </Text>
            <View className="flex items-center justify-center my-8">
              <TouchableOpacity className="bg-primary-orange p-3 rounded-full border-[5px] border-[#fd631f33]">
                <Image
                  source={icons.microphoneLight}
                  className="w-[34px] h-[34px]"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default VoiceInput;

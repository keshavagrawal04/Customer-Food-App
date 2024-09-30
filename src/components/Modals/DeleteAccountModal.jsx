import React from "react";
import {Modal, View, Text, Image, TouchableOpacity} from "react-native";
import icons from "../../assets/icons";
import {CustomButton} from "../Buttons";

const DeleteAccountModal = ({
  visible,
  handleClose,
  title,
  message,
  handleAllow,
  closeBtnTitle = "Deny",
  allowBtnTitle = "Allow",
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View className={`flex-1 justify-center items-center bg-black/50`}>
        <View className={`w-80 p-5 bg-white rounded-3xl shadow-lg`}>
          <View className="flex flex-row items-start justify-between">
            <Text className="text-black w-[90%] font-montserrat-bold text-lg ">
              {title}
            </Text>
          </View>
          <Text className="text-secondary-gray-light font-proxima-nova-regular text-base mt-2">
            {message}
          </Text>
          <View className="flex flex-row justify-between mt-5">
            <CustomButton
              title={closeBtnTitle}
              containerStyles={`px-3 py-4 w-[48%] rounded-lg`}
              variant="primary-fill-transparent"
              handleOnPress={handleClose}
            />
            <CustomButton
              title={allowBtnTitle}
              containerStyles={`px-3 py-4 w-[48%] rounded-lg`}
              handleOnPress={handleAllow}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteAccountModal;

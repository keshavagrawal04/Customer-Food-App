import React from "react";
import {Modal, View, Text, Image, TouchableOpacity} from "react-native";

const LogoutModal = ({visible, handleClose, handleLogout}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View className={`flex-1 justify-center items-center bg-black/50`}>
        <View className={`w-80 px-6 py-10 bg-white rounded-2xl shadow-lg`}>
          <Text className="text-black font-proxima-nova-regular">
            Are you sure you want to logout of{" "}
          </Text>
          <Text className="text-black font-proxima-nova-regular">
            all devices(including the current device?)
          </Text>
          <View className="flex flex-row justify-end space-x-4 mt-8">
            <TouchableOpacity onPress={handleClose}>
              <Text className="text-primary-orange font-montserrat-bold">
                NO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <Text className="text-primary-orange font-montserrat-bold">
                YES, LOGOUT
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

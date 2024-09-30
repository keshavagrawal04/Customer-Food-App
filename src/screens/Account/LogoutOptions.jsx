import {Text, View, Image, TouchableOpacity, Platform} from "react-native";
import React, {useEffect, useState} from "react";
import icons from "../../assets/icons";
import DeviceInfo from "react-native-device-info";
import {LogoutModal} from "../../components/Modals";

const LogoutOptions = ({navigation}) => {
  const [deviceName, setDeviceName] = useState("");
  const [isLogout, setIsLogout] = useState(false);

  useEffect(() => {
    getDeviceName();
  }, []);

  const getDeviceName = async () => {
    const deviceName = await DeviceInfo.getDeviceName();
    setDeviceName(deviceName);
  };

  const handleLogout = async () => {
    navigation.navigate("Login");
  };

  return (
    <View className="h-full bg-[#F4F4F4]">
      <View className="px-3 bg-white flex flex-row items-center py-3 space-x-2 pt-4 shadow shadow-[#84767640] mb-2">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}>
          <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
        <Text className="font-montserrat-bold text-black text-lg">
          LOGOUT OPTIONS
        </Text>
      </View>
      <Text className="text-black font-proxima-nova-regular px-3 text-lg my-4">
        Current Device
      </Text>
      <View className="bg-white px-3 flex flex-row justify-between items-center py-3">
        <View>
          <Text className="text-black font-proxima-nova-regular text-lg">
            {deviceName}
          </Text>
          <Text className="text-[#00000080] font-proxima-nova-regular">
            {Platform.OS.charAt(0).toUpperCase()}
            {Platform.OS.slice(1)}, Active now
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsLogout(true);
          }}>
          <Text className="text-primary-orange font-proxima-nova-bold text-lg">
            LOGOUT
          </Text>
        </TouchableOpacity>
      </View>
      <LogoutModal
        visible={isLogout}
        handleClose={() => setIsLogout(false)}
        handleLogout={handleLogout}
      />
    </View>
  );
};

export default LogoutOptions;

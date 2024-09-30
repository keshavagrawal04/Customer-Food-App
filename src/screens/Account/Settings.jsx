import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Switch,
} from "react-native";
import React, {useEffect, useState} from "react";
import icons from "../../assets/icons";
import {CustomSwitch} from "../../components/Buttons";
import {DeleteAccountModal} from "../../components/Modals";

const Settings = ({navigation}) => {
  const [isSmsEnabled, setIsSmsEnabled] = useState(false);
  const [isWhatsappEnabled, setIsWhatsappEnabled] = useState(false);
  const [isPictureMode, setIsPictureMode] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

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
          SETTINGS
        </Text>
      </View>
      <View>
        <Text className="text-black font-proxima-nova-regular px-4 py-3">
          ORDER RELATED MESSAGES
        </Text>
        <View className="bg-white px-4 py-4">
          <Text className="text-[#00000080] font-proxima-nova-regular">
            Order related SMS cannot be disabled as
          </Text>
          <Text className="text-[#00000080] font-proxima-nova-regular">
            they are critical to provide service
          </Text>
        </View>
      </View>
      <View>
        <Text className="text-black font-proxima-nova-regular px-4 py-3">
          RECOMMENDATIONS & REMINDERS
        </Text>
        <View className="bg-white px-4 py-4">
          <Text className="text-[#00000080] font-proxima-nova-regular">
            Keep this on to receive offer
          </Text>
          <Text className="text-[#00000080] font-proxima-nova-regular">
            recommendations & timely reminders based
          </Text>
          <Text className="text-[#00000080] font-proxima-nova-regular">
            on your interests
          </Text>
        </View>
      </View>
      <View className="pt-6">
        <View className="bg-white px-4 py-4 flex flex-row justify-between items-center">
          <Text className="text-black font-proxima-nova-bold">SMS</Text>
          <CustomSwitch
            isEnabled={isSmsEnabled}
            setIsEnabled={setIsSmsEnabled}
          />
        </View>
        <View className="bg-white px-4 py-4 flex flex-row justify-between items-center">
          <Text className="text-black font-proxima-nova-bold">Whatsapp</Text>
          <CustomSwitch
            isEnabled={isWhatsappEnabled}
            setIsEnabled={setIsWhatsappEnabled}
          />
        </View>
      </View>
      <Text className="mt-5 text-black font-proxima-nova-regular px-4">
        PICTURE IN PICTURE MODE
      </Text>
      <View className="bg-white my-4">
        <View className="py-4 px-4 flex flex-row justify-between items-center border-b-[1px] border-[#0000001A]">
          <Text className="text-black font-proxima-nova-bold">
            Allow Picture in Picture Mode
          </Text>
          <CustomSwitch
            isEnabled={isPictureMode}
            setIsEnabled={setIsPictureMode}
          />
        </View>
        <View className="px-4 py-4">
          <Text className="text-[#00000080] font-proxima-nova-regular">
            PIP mode allows you to live track your order
          </Text>
          <Text className="text-[#00000080] font-proxima-nova-regular">
            in a small window pinned to one corner of
          </Text>
          <Text className="text-[#00000080] font-proxima-nova-regular">
            your screen while you navigate to other
          </Text>
          <Text className="text-[#00000080] font-proxima-nova-regular">
            apps or to the home screen.
          </Text>
        </View>
      </View>
      <Text className="mt-2 text-black font-proxima-nova-regular px-4">
        ACCOUNT DELETION
      </Text>
      <TouchableOpacity
        className="bg-white py-4 px-4 mt-5"
        onPress={() => {
          setIsDelete(true);
        }}>
        <Text className="text-[#B61919] font-proxima-nova-bold">
          Delete account
        </Text>
      </TouchableOpacity>
      <DeleteAccountModal
        visible={isDelete}
        title={"Are you sure you want to delete your account?"}
        message={
          "Once deleted, you will lose access to this account along with the saved details on Food app"
        }
        allowBtnTitle="Process"
        closeBtnTitle="Cancel"
        handleClose={() => {
          setIsDelete(false);
        }}
      />
    </View>
  );
};

export default Settings;

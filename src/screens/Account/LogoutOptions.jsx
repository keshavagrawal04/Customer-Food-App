import {Text, View, Image, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import icons from "../../assets/icons";
import {FloatingLabelTextInput} from "../../components/Inputs";
import {useFormik} from "formik";
import {CustomButton} from "../../components/Buttons";
import * as Yup from "yup";

const LogoutOptions = ({navigation}) => {
  return (
    <View className="">
      <View className="px-3 flex flex-row items-center py-3 space-x-2 pt-4 pb-8 shadow shadow-[#84767640] mb-2">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}>
          <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
        <Text className="font-montserrat-bold text-black text-lg">
          Logout Options
        </Text>
      </View>
    </View>
  );
};

export default LogoutOptions;

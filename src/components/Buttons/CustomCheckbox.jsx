import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import icons from "../../assets/icons";

const CustomCheckbox = ({label, checked = false, onChange}) => {
  return (
    <TouchableOpacity
      className="flex flex-row my-5 gap-2 items-center"
      onPress={onChange}>
      <View
        className={`${
          checked ? "bg-primary-orange" : "bg-white border border-[#00000033]"
        }`}
        style={styles.checkbox}>
        {checked && (
          <Image source={icons.whiteTick} className="w-full h-full" />
        )}
      </View>
      <Text className="text-black font-proxima-nova-regular text-base">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CustomCheckbox;

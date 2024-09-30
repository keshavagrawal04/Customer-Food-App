import React, {useState, useRef} from "react";
import {View, TouchableOpacity, Animated, StyleSheet} from "react-native";

const CustomSwitch = ({isEnabled, setIsEnabled}) => {
  const thumbAnimation = useRef(new Animated.Value(0)).current;

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);

    Animated.timing(thumbAnimation, {
      toValue: isEnabled ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const thumbTranslateX = thumbAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 15],
  });

  return (
    <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.8}>
      <View className="flex flex-row items-center w-[34px] h-[25px] bg-[#FC5001] rounded-full">
        <Animated.View
          style={[styles.thumb, {transform: [{translateX: thumbTranslateX}]}]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  thumb: {
    width: 16,
    height: 16,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
  },
});

export default CustomSwitch;

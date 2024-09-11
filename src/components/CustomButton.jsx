import {TouchableOpacity, Text, Image} from "react-native";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  handleOnPress,
  variant = "primary-fill",
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={handleOnPress}
        className={`${containerStyles} ${
          variant === "primary-fill" ? "bg-primary-orange" : "bg-light"
        }`}>
        <Text
          className={`${textStyles} font-montserrat-bold ${
            variant === "primary-fill" ? "text-white" : "text-secondary-gray"
          }`}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;

import {TouchableOpacity, Text, Image} from "react-native";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  handleOnPress,
  variant = "primary-fill",
  icon = false,
  iconStyle,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={handleOnPress}
        className={`flex flex-row items-center justify-center ${containerStyles} 
        ${variant === "primary-fill" && "bg-primary-orange"}
        ${variant === "secondary-green-fill" && "bg-secondary-green"}
        ${variant === "primary-outline" && "border border-primary-orange"}
        ${
          variant === "secondary-outline-green" &&
          "border border-secondary-green"
        }
        ${variant === "primary-fill-transparent" && "bg-light"}
        `}>
        {icon && (
          <>
            <Image source={icon} className={iconStyle} resizeMode="contain" />
            <Text>{"  "}</Text>
          </>
        )}
        <Text
          className={`${textStyles} font-montserrat-bold 
          ${variant === "primary-fill" && "text-white"}
          ${variant === "secondary-green-fill" && "text-white"}
          ${variant === "primary-outline" && "text-primary-orange"}
           ${variant === "secondary-outline-green" && "text-secondary-green"}
        ${variant === "primary-fill-transparent" && "text-primary-orange"}
          `}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default CustomButton;

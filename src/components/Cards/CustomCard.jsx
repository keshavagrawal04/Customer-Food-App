import {Text, View, Image} from "react-native";
import React from "react";
import images from "../../assets/images";

const CustomCard = () => {
  return (
    <View className="w-[200px] h-[200px] border">
      <Image
        source={images.masalaDosa}
        className="w-[100%] h-full absolute"
        resizeMode="cover"
      />
    </View>
  );
};

export default CustomCard;

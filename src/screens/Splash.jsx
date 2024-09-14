import {Text, View, Image, StatusBar} from "react-native";
import React, {useEffect} from "react";
import images from "../assets/images";

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 3000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <StatusBar hidden />
      <Image
        source={images.logo}
        className="w-[115px] h-[115px]"
        resizeMode="contain"
      />
      <Text className="text-secondary-gray font-montserrat-bold absolute text-center text-xl bottom-10">
        Version 1.0
      </Text>
    </View>
  );
};

export default Splash;

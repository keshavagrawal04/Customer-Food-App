import {View, Text, Image} from "react-native";
import images from "../assets/images";

const VegFilterPage = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Image source={images.vegPercentage} className="w-[130px] h-[130px]" />
      <Text className="text-black-light mt-4 font-montserrat-semibold text-base">
        Pure veg restaurant only
      </Text>
    </View>
  );
};

export default VegFilterPage;

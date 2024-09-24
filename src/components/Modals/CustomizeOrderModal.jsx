import React, {useState} from "react";
import {Modal, View, Image, Text, TouchableOpacity} from "react-native";
import images from "../../assets/images";
import icons from "../../assets/icons";
import {CustomButton, CustomRadioButton} from "../Buttons";

const CustomizeOrderModal = ({visible, handleClose}) => {
  const [selected, setSelected] = useState("paratha");
  const [qty, setQty] = useState(1);

  const handleIncrement = () => {
    setQty(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (qty >= 1) {
      setQty(prev => prev - 1);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View className={`flex-1 justify-end items-center bg-black/50`}>
        <View className={`bg-white w-[94%] rounded-t-3xl shadow-lg pb-5`}>
          <TouchableOpacity
            onPress={handleClose}
            className="absolute top-5 right-5 z-10">
            <Image source={icons.close} className="w-[30px] h-[30px]" />
          </TouchableOpacity>
          <View className="pt-8 border-b border-light pb-4 mx-5">
            <Text className="text-secondary-gray font-montserrat-semibold text-base">
              Special Thali Lunch/ Dinner
            </Text>
            <Text className="text-secondary-gray font-montserrat-bold text-lg">
              Customise as per your taste
            </Text>
          </View>
          <View className="mx-5 mt-3">
            <Text className="text-secondary-gray text-sm font-montserrat-semibold">
              Choice of Indian Breads
            </Text>
            <Text className="text-secondary-gray font-montserrat-regular pt-2">
              Select any 1
            </Text>
            <View className="pt-5">
              <CustomRadioButton
                start
                label={"Paratha"}
                color={"primary-orange"}
                selected={selected}
                onSelect={setSelected}
                value={"paratha"}
              />
              <CustomRadioButton
                start
                label={"Tawa Roti"}
                color={"primary-orange"}
                selected={selected}
                onSelect={setSelected}
                value={"tawaRoti"}
              />

              <View className="flex flex-row justify-between mt-5">
                <View className="border border-secondary-green rounded-full px-5 py-1 flex flex-row justify-evenly items-center">
                  <TouchableOpacity>
                    <Text
                      className="text-secondary-green font-montserrat-bold text-2xl"
                      onPress={handleDecrement}>
                      -
                    </Text>
                  </TouchableOpacity>
                  <Text className="text-secondary-green mx-6 font-montserrat-bold">
                    {qty}
                  </Text>
                  <TouchableOpacity>
                    <Text
                      className="text-secondary-green font-montserrat-bold text-2xl"
                      onPress={handleIncrement}>
                      +
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="bg-secondary-green rounded-full px-5 py-1 flex flex-row justify-evenly items-center">
                  <Text className="text-white font-montserrat-bold">
                    Add Item | &#8377; 320
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomizeOrderModal;

import React, {useState} from "react";
import {Modal, View, Image, Text, TouchableOpacity} from "react-native";
import images from "../../assets/images";
import icons from "../../assets/icons";
import {CustomButton, CustomCheckbox, CustomRadioButton} from "../Buttons";

const ReorderItem = ({
  checked = false,
  onChange,
  price,
  dishName,
  veg = true,
}) => {
  return (
    <TouchableOpacity
      className="flex flex-row my-2 justify-between items-center"
      onPress={onChange}>
      <View className="flex flex-row justify-between items-center space-x-2">
        <View className="w-[22px] h-[22px] border-2 border-secondary-green rounded-sm flex items-center justify-center">
          <View className="w-[12px] h-[12px] rounded-full bg-secondary-green" />
        </View>
        <Text className="text-[#3C3A45] font-montserrat-regular">
          {dishName}
        </Text>
      </View>
      <View className="flex flex-row items-center space-x-3">
        <Text className="text-[#00000099] font-montserrat-regular">
          +₹{price}
        </Text>
        <View
          className={`w-[24px] h-[24px] rounded-sm flex items-center justify-center ${
            checked ? "bg-primary-orange" : "bg-white border border-[#00000033]"
          }`}>
          {checked && (
            <Image source={icons.whiteTick} className="w-full h-full" />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ReorderModal = ({visible, handleClose}) => {
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
        <View className={`bg-[#EFEBEB] w-[94%] rounded-t-3xl shadow-lg pb-5`}>
          <TouchableOpacity
            onPress={handleClose}
            className="absolute top-5 right-5 z-10">
            <Image source={icons.close} className="w-[30px] h-[30px]" />
          </TouchableOpacity>
          <View className="pt-8 border-b border-light pb-4 mx-5">
            <Text className="text-secondary-gray font-montserrat-semibold text-base">
              Mixed Veg
            </Text>
            <Text className="text-secondary-gray font-montserrat-bold text-lg">
              Customise as per your taste
            </Text>
          </View>
          <View className="mx-5 mt-3">
            {/* Accompaniments */}
            <View>
              <Text className="text-secondary-gray text-sm font-montserrat-semibold">
                Accompaniments
              </Text>
              <View className="mt-4 bg-white rounded-lg px-3 py-4">
                <ReorderItem dishName={"Green Salad"} price={56} />
              </View>
            </View>
            {/* Deserts */}
            <View className="mt-4">
              <Text className="text-secondary-gray text-sm font-montserrat-semibold">
                Accompaniments
              </Text>
              <View className="mt-4 bg-white rounded-lg px-3 py-4">
                <ReorderItem dishName={"Paraths (3pcs)"} price={270} />
                <ReorderItem dishName={"Tawa Roti (5pcs)"} price={270} />
              </View>
            </View>
            <View className="pt-5">
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

export default ReorderModal;

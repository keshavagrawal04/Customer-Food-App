import React from "react";
import {Modal, View, Text, TouchableWithoutFeedback, Image} from "react-native";
import icons from "../../assets/icons";
import {CustomButton, CustomRadioButton} from "../Buttons";

const VegModeModal = ({
  visible,
  handleClose,
  vegMode,
  setVegMode,
  setSwitch,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <TouchableWithoutFeedback onPress={handleClose}>
        <View className={`flex-1 items-end bg-black/50`}>
          <View
            className={`w-[90%] absolute top-40 right-2 bg-white px-4 py-5 rounded-lg`}>
            <Image
              source={icons.dropdownUpArrow}
              className="w-[22px] h-[22px] absolute -top-3 right-5"
            />
            <Text className="text-black text-lg font-montserrat-regular">
              What is your veg food preference?
            </Text>
            <View className="py-5">
              <CustomRadioButton
                label={"Veg dishes from all retaurants"}
                value={"vegDishes"}
                selected={vegMode}
                onSelect={setVegMode}
              />
              <CustomRadioButton
                label={"Pure Veg restaurants only"}
                value={"vegRestaurants"}
                selected={vegMode}
                onSelect={setVegMode}
              />
            </View>
            <CustomButton
              title={"Apply"}
              containerStyles={`py-3 mx-3 rounded-full mb-4`}
              variant="secondary-green-fill"
              handleOnPress={() => {
                setSwitch(prev => !prev);
                handleClose();
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default VegModeModal;

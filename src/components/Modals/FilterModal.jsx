import React, {useState} from "react";
import {
  Modal,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import icons from "../../assets/icons";
import {SearchInput} from "../Inputs";
import {CustomCheckbox, CustomButton} from "../Buttons";

const FilterModal = ({visible, handleClose}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ["Asian", "Bakery", "Beverages", "Biryani", "Burger"];

  const handleCheckboxChange = option => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(prev => prev.filter(selected => selected !== option));
    } else {
      setSelectedOptions(prev => [...prev, option]);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={handleClose}>
      <View className={`flex-1 justify-end items-center bg-black/50`}>
        <View className={`w-full p-5 bg-white rounded-t-3xl shadow-lg`}>
          <View className="flex flex-row justify-between items-center pb-5">
            <Text className="text-black font-montserrat-bold text-xl">
              Cuisines
            </Text>
            <TouchableOpacity onPress={handleClose}>
              <Image source={icons.cancelDark} className="w-[30px] h-[30px]" />
            </TouchableOpacity>
          </View>
          <View className="mt-1">
            <SearchInput
              icon={icons.search}
              isMic={false}
              isEdit={true}
              placeholder={"Search"}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </View>
          <View className="mt-8">
            <FlatList
              data={options}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <CustomCheckbox
                  label={item}
                  checked={selectedOptions.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
              )}
            />
            <CustomButton
              containerStyles={`py-4 rounded-full mt-4`}
              title={"Apply"}
              variant="primary-fill"
            />
            <TouchableOpacity>
              <Text className="text-center text-black text-base font-montserrat-bold py-3">
                Clear Filters
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

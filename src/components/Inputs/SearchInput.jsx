import {TouchableOpacity, TextInput, View, Image, Text} from "react-native";
import React from "react";
import icons from "../../assets/icons";

const SearchInput = ({
  id,
  placeholder,
  isEdit = false,
  icon,
  handleInputPress,
  handleIconPress = undefined,
  handleMicrophonePress,
  setSearchTerm,
  searchTerm = "",
  isMic = true,
}) => {
  return (
    <TouchableOpacity
      onPress={handleInputPress}
      className="px-2 border border-[#00000033] rounded-full flex flex-row items-center">
      <TouchableOpacity
        onPress={
          handleIconPress === undefined ? handleInputPress : handleIconPress
        }>
        <Image source={icon} className="w-[24px] h-[24px]" />
      </TouchableOpacity>
      <TextInput
        editable={isEdit}
        className="text-secondary-gray-light w-full font-proxima-nova-regular text-lg"
        placeholderTextColor="#00000080"
        placeholder={placeholder}
        onChangeText={value => {
          if (isEdit) {
            setSearchTerm(value);
          }
        }}
        value={searchTerm}
      />
      {searchTerm && (
        <TouchableOpacity
          onPress={() => {
            setSearchTerm("");
          }}>
          <Image source={icons.cancel} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
      )}
      {isMic && (
        <TouchableOpacity
          className="absolute flex flex-row right-4 border-l-[1px] border-[#00000033]"
          onPress={handleMicrophonePress}>
          <Text>{"  "}</Text>
          <Image source={icons.microphone} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default SearchInput;

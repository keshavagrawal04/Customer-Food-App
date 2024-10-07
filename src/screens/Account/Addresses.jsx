import {Text, View, Image, TouchableOpacity} from "react-native";
import React, {useEffect, useState} from "react";
import icons from "../../assets/icons";
import {SearchInput} from "../../components/Inputs";
import {CustomButton} from "../../components/Buttons";
import {DeleteAddressModal} from "../../components/Modals";

const Addresses = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  return (
    <View className="h-full bg-[#F4F4F4]">
      <View className="px-3 bg-white flex flex-row items-center py-3 space-x-2 pt-4 shadow shadow-[#84767640] mb-2">
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}>
          <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
        <Text className="font-montserrat-bold text-black text-lg">
          ADDRESSES
        </Text>
      </View>
      <View>
        <View className="px-4 my-4">
          <SearchInput
            isMic={false}
            icon={icons.search}
            placeholder={"Search your saved addresses"}
            isEdit={true}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </View>
        <Text className="text-black font-proxima-nova-bold px-4 my-2">
          SAVED ADDRESSES
        </Text>
        <View className="bg-white px-4 mt-4">
          <View className="py-4 flex flex-row">
            <Image source={icons.home} className="w-[25px] h-[25px]" />
            <View>
              <Text className="text-black font-proxima-nova-regular">Home</Text>
              <Text
                className="text-[#00000080] font-proxima-nova-regular w-2/3 mt-2"
                style={{fontSize: 12}}>
                133 Indrapuri, Indra Nagar, Loknayak Nagar, Indore, Madhya
                Pradesh 452006, India
              </Text>
              <View className="flex flex-row space-x-4 mt-4">
                <TouchableOpacity>
                  <Text className="text-primary-orange font-proxima-nova-bold">
                    EDIT
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setIsDelete(true);
                  }}>
                  <Text className="text-primary-orange font-proxima-nova-bold">
                    DELETE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text className="text-primary-orange font-proxima-nova-bold">
                    SHARE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className="py-4 flex flex-row">
            <Image source={icons.home} className="w-[25px] h-[25px]" />
            <View>
              <Text className="text-black font-proxima-nova-regular">Home</Text>
              <Text
                className="text-[#00000080] font-proxima-nova-regular w-2/3 mt-2"
                style={{fontSize: 12}}>
                133 Indrapuri, Indra Nagar, Loknayak Nagar, Indore, Madhya
                Pradesh 452006, India
              </Text>
              <View className="flex flex-row space-x-4 mt-4">
                <TouchableOpacity>
                  <Text className="text-primary-orange font-proxima-nova-bold">
                    EDIT
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setIsDelete(true);
                  }}>
                  <Text className="text-primary-orange font-proxima-nova-bold">
                    DELETE
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text className="text-primary-orange font-proxima-nova-bold">
                    SHARE
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <CustomButton
          title={"ADD NEW ADDRESS"}
          variant="secondary-outline-green"
          containerStyles={`py-5 mt-8 mx-4 rounded-full`}
        />
      </View>
      <DeleteAddressModal
        visible={isDelete}
        handleClose={() => {
          setIsDelete(false);
        }}
      />
    </View>
  );
};

export default Addresses;

import {ScrollView, Text, View, Image} from "react-native";
import React, {useState} from "react";
import {SearchInput} from "../components/Inputs";
import icons from "../assets/icons";
import images from "../assets/images";

const SearchScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories1 = [
    {name: "Chinese", image: images.chinese},
    {name: "South In", image: images.southIndian},
    {name: "Italian", image: images.italian},
    {name: "Gujrati", image: images.gujrati},
    {name: "Marathi", image: images.marathi},
    {name: "Bihari", image: images.bihari},
    {name: "Jain Food", image: images.jainFood},
    {name: "Rajasthani", image: images.rajasthani},
    {name: "Punjabi", image: images.punjabi},
    {name: "Bangali", image: images.bangali},
  ];

  return (
    <ScrollView className="mt-8 mx-4">
      <SearchInput
        placeholder={"Restaurant name or a dish..."}
        icon={icons.backArrowPrimary}
        isEdit
        handleIconPress={() => {
          navigation.navigate("HomeScreen");
        }}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      {!searchTerm && (
        <View className="mt-4">
          <Text className="text-center text-lg font-montserrat-semibold text-[#00000080]">
            What’s on your mind?
          </Text>

          <View className="flex flex-row flex-wrap justify-start mt-2">
            {categories1?.map(item => (
              <View key={item.name} className="py-2 w-[25%] items-center">
                <Image
                  className="w-[80px] h-[80px]"
                  resizeMode="contain"
                  source={item.image}
                />
                <Text className="text-black font-proxima-nova-regular text-center">
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

export default SearchScreen;

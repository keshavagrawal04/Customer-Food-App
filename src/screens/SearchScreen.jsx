import {ScrollView, Text, View, Image, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import {SearchInput} from "../components/Inputs";
import icons from "../assets/icons";
import images from "../assets/images";
import {RestaurantCard} from "../components/Cards";

const SearchScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isRestaurants, setIsRestaurants] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("filter");
  const searchNotFound = true;

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

  const searchItems = [
    {name: "Gulab jamun with vanilla Ice cream", category: "Dish"},
    {name: "Gulab jamun combo", category: "Dish"},
    {name: "Gulab jamun cake", category: "Dish"},
    {name: "Gulab jamun Jar cake", category: "Dish"},
    {name: "Gulab jamun pastry", category: "Dish"},
    {name: "Rabri Gulab jamun", category: "Dish"},
    {name: "Kesar Gulab jamun", category: "Dish"},
    {name: "Vanila Gulab jamun cake", category: "Dish"},
  ];

  const filterOptions = [
    {
      id: "filter",
      name: "Filter",
      icon: true,
      activeIcon: icons.filterLight,
      deactiveIcon: icons.filterDark,
    },
    {
      id: "popular",
      name: "Popular",
    },
    {
      id: "bestSeller",
      name: "Best Seller",
    },
    {
      id: "greatOffers",
      name: "Great Offers",
    },
  ];

  const dishes = [
    {
      name: "Gulab Jamun",
      price: "60",
      image: images.gulabJamunBig,
      distance: "4.5 Km",
      time: "31 mins",
    },
    {
      name: "Gulab Jamun",
      price: "50",
      image: images.gulabJamunBig,
      distance: "4.5 Km",
      time: "31 mins",
    },
  ];

  const restaurant = {
    name: "New Agrawal Sweets",
    review: "4.5",
    offer: "Flat ₹125 OFF above ₹249",
  };

  return (
    <ScrollView className="pt-8 px-4 bg-[#EFEBEB]">
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
      {searchTerm && searchNotFound && (
        <View className="w-full flex items-center mt-10 justify-center">
          <Image source={images.noResultFound} className="w-full h-[330px]" />
          <Text className="text-black text-base text-center mt-4 font-proxima-nova-regular">
            No Result Found
          </Text>
        </View>
      )}
      {!searchTerm ? (
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
      ) : isRestaurants ? (
        <View>
          <TouchableOpacity className="flex flex-row gap-3 items-center mt-3">
            <Image
              source={images.gulabJamun}
              className="w-[45px] h-[45px] my-auto"
            />
            <View className="flex">
              <Text className="text-black font-proxima-nova-regular text-lg">
                Gulab Jamun
              </Text>
              <View className="flex flex-row items-center justify-center">
                <Text className="text-primary-orange font-proxima-nova-regular text-center">
                  See all restaurants
                </Text>
                <Text className="text-primary-orange font-proxima-nova-regular text-center text-lg">
                  {" "}
                  ▸
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {searchItems?.map((search, index) => (
            <TouchableOpacity
              key={index}
              className="flex flex-row gap-3 items-center py-3">
              <Image
                source={images.gulabJamun}
                className="w-[45px] h-[45px] my-auto"
              />
              <View className="flex items">
                <Text className="text-black font-proxima-nova-regular text-lg">
                  {search?.name}
                </Text>
                <Text className="text-[#00000080] font-proxima-nova-regular">
                  {search?.category}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View>
          <ScrollView
            horizontal
            className="flex flex-row gap-2 mt-4"
            showsHorizontalScrollIndicator={false}>
            {filterOptions?.map(item => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  setSelectedFilter(item.id);
                }}
                className={`px-3 py-2 rounded-full flex flex-row items-center ${
                  item.id === selectedFilter ? "bg-black" : "bg-white"
                }`}>
                <Text
                  className={`font-proxima-nova-regular ${
                    item.id === selectedFilter ? "text-white" : "text-black"
                  }`}>
                  {item.name}
                  {item?.icon && " "}
                </Text>
                {item?.icon ? (
                  <Image
                    source={
                      selectedFilter === item.id
                        ? item.activeIcon
                        : item.deactiveIcon
                    }
                    className="w-[14px] h-[14px]"
                  />
                ) : null}
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View className="my-5">
            <Text className="text-[#00000080] text-xl font-montserrat-semibold text-center">
              All Restaurant Delivering
            </Text>
            <Text className="text-[#00000080] text-xl font-montserrat-semibold text-center">
              Gulab Jamun
            </Text>
          </View>
          <RestaurantCard dishes={dishes} restaurant={restaurant} />
        </View>
      )}
    </ScrollView>
  );
};

export default SearchScreen;

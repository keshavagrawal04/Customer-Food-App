import {Text, View, ScrollView, Image, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import icons from "../../assets/icons";
import {ReorderCard} from "../../components/Cards";
import images from "../../assets/images";
import {ReorderModal} from "../../components/Modals";

const Reorder = () => {
  const [activeFilter, setActiveFilter] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  const handleFilterSelect = value => {
    if (activeFilter.length == 0)
      return setActiveFilter(prev => [...prev, value]);
    if (activeFilter.includes(value))
      setActiveFilter(prev => prev.filter(item => !(item === value)));
    else setActiveFilter(prev => [...prev, value]);
  };

  const orders = [
    {
      restaurant: "Om Namkeen",
      distance: "20-25 mins",
      dishes: [
        {name: "Mini Samosa (250 gms)", price: 70},
        {name: "Katta Meetha Mixture", price: 70},
      ],
      isOffer: false,
    },
    {
      restaurant: "Shri Gurukripa",
      distance: "20-25 mins",
      dishes: [
        {name: "Mix Veg", price: 270},
        {name: "Special Dal Butter Tadka", price: 210},
        {name: "Special Butter Khichdi", price: 155},
      ],
      isOffer: true,
      offer: "₹125 Off above ₹199+",
    },
    {
      restaurant: "Shri Gurukripa",
      distance: "20-25 mins",
      dishes: [
        {name: "Mix Veg", price: 270},
        {name: "Special Dal Butter Tadka", price: 210},
        {name: "Special Butter Khichdi", price: 155},
      ],
      isOffer: true,
      offer: "₹125 Off above ₹199+",
    },
  ];

  // const orders = [];

  const filterOptions = [
    {label: "Favorites", value: "favorites"},
    {label: "Price 149-300", value: "149-300"},
    {label: "Price>300", value: "300"},
  ];

  return (
    <View className="h-full bg-[#EFEBEB]">
      <View className="bg-white flex items-center py-5 flex-row justify-center">
        <TouchableOpacity className="absolute left-5">
          <Image source={icons.backArrowDark} className="w-[26px] h-[26px]" />
        </TouchableOpacity>
        <Text className="font-montserrat-bold text-black text-center text-2xl">
          Reorder
        </Text>
      </View>
      <ScrollView className="mx-4">
        <View className="mx-4 flex flex-row my-5 space-x-3">
          <ScrollView
            horizontal
            className="flex flex-row space-x-3"
            showsHorizontalScrollIndicator={false}>
            {filterOptions?.map((filter, index) => (
              <TouchableOpacity
                key={index}
                className={`flex flex-row rounded-full py-2 px-4 border border-[#00000033] ${
                  activeFilter.includes(filter.value)
                    ? "bg-[#0000001A] justify-between"
                    : "bg-white justify-center"
                }`}
                onPress={() => {
                  handleFilterSelect(filter.value);
                }}>
                <Text className={`font-proxima-nova-regular text-black`}>
                  {filter.label}
                </Text>
                {activeFilter.includes(filter.value) && (
                  <TouchableOpacity
                    onPress={() => {
                      handleFilterSelect(filter.value);
                    }}>
                    <Image
                      source={icons.cancelDark}
                      className="w-[16px] h-[16px]"
                    />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        {orders?.length === 0 && (
          <View className="flex items-center justify-center mt-14">
            <Image source={images.emptyBox} className="w-[120px] h-[110px]" />
            <View className="flex justify-center align-center mt-6">
              <Text className="font-montserrat-bold text-lg text-black text-center">
                We Didn’t find any matches :(
              </Text>
              <Text className="font-proxima-nova-regular text-[#00000099] text-center px-5 text-base">
                We took a deep dive but coundn’t find what you’re looking for.
                You may try a different filter.
              </Text>
            </View>
          </View>
        )}
        {orders?.map((item, index) => (
          <View key={index} className="mb-4">
            <ReorderCard item={item} />
          </View>
        ))}
        <View className="mt-5" />
      </ScrollView>
      <ReorderModal
        visible={isOpen}
        handleClose={() => {
          setIsOpen(false);
        }}
      />
    </View>
  );
};

export default Reorder;

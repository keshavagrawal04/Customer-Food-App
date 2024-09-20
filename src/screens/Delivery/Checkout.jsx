import {ScrollView, Text, TouchableOpacity, View, Image} from "react-native";
import React, {useState} from "react";
import icons from "../../assets/icons";
import images from "../../assets/images";

const Checkout = ({navigation}) => {
  const [type, setType] = useState("standard");
  const [selectedTip, setSelectedTip] = useState(20);

  const tipOptions = [20, 30, 50, "Other"];

  return (
    <ScrollView className="h-full" style={{backgroundColor: "#EFEBEB"}}>
      <View className="bg-white rounded-b-3xl px-2 py-2">
        <View className="flex flex-row justify-between">
          <Image source={icons.backArrow} className="w-[24px] h-[24px]" />
          <View>
            <Text className="text-black font-proxima-nova-regular text-base">
              20-25 mins to Home | 75, chhatri...
            </Text>
            <Text className="text-[#FFC742] font-proxima-nova-bold">
              Delivering Superfast!
            </Text>
          </View>
          <Image source={icons.bottomArrowGray} className="w-[24px] h-[24px]" />
        </View>
        <View className="bg-[#DDFBEF] mt-4 space-x-2 rounded-b-3xl p-2 flex flex-row items-center justify-center">
          <Image source={icons.bestOfferGreen} className="w-[20px] h-[20px]" />
          <Text className="text-[#2DAD78] font-proxima-nova-bold">
            ₹25 Saved !{" "}
            <Text className="font-proxima-nova-regular">on this order</Text>
          </Text>
        </View>
      </View>
      <ScrollView className="px-4">
        <View className="flex flex-row items-center gap-2 mt-4">
          <Text className="text-black font-montserrat-bold text-lg">
            Delivery Type
          </Text>
          <Text className="text-white bg-primary-orange font-montserrat-regular rounded-md px-2 py-1">
            New
          </Text>
        </View>
        <Text className="text-black-light font-montserrat-bold mt-2">
          Your food will always be fresh!
        </Text>
        <View className="flex flex-row justify-between mt-5">
          <TouchableOpacity
            onPress={() => {
              setType("standard");
            }}
            className={`bg-white border-2 w-[48%] rounded-xl px-3 py-5 ${
              type === "standard" ? "border-primary-orange" : "border-white"
            }`}>
            <View
              className={`w-[25px] h-[25px] absolute top-3 right-3 rounded-full p-1 ${
                type === "standard"
                  ? "bg-primary-orange"
                  : "bg-white border border-[#00000033]"
              }`}>
              {type === "standard" && (
                <Image source={icons.whiteTick} className="w-full h-full" />
              )}
            </View>
            <Text className="text-black-light font-proxima-nova-regular">
              Standard
            </Text>
            <Text className="text-black font-proxima-nova-bold">
              20-25 min.
            </Text>
            <Text className="text-black-light font-proxima-nova-regular pt-3">
              • Recommended if you are in a hurry
            </Text>
            <Text className="text-black-light font-proxima-nova-regular pt-2">
              • Minimal order grouping
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setType("ecoSaver");
            }}
            className={`bg-white w-[48%] rounded-xl px-3 py-4  ${
              type === "ecoSaver" && "border-2 border-primary-orange"
            }`}>
            <View
              className={`w-[25px] h-[25px] absolute top-3 right-3 rounded-full p-1 ${
                type === "ecoSaver"
                  ? "bg-primary-orange"
                  : "bg-white border border-[#00000033]"
              }`}>
              {type === "ecoSaver" && (
                <Image source={icons.whiteTick} className="w-full h-full" />
              )}
            </View>
            <Text className="text-black-light font-proxima-nova-regular">
              Eco Saver
            </Text>
            <Text className="text-black font-proxima-nova-bold">
              20-25 min.
            </Text>
            <Text className="text-black-light font-proxima-nova-regular pt-3">
              • Less fuel pollution by grouping orders
            </Text>
            <Text className="text-secondary-green font-proxima-nova-bold mt-auto">
              27% Less emissions
            </Text>
          </TouchableOpacity>
        </View>
        <View className="">
          <Text className="my-4 text-black font-montserrat-bold text-lg">
            Offers & Benefits
          </Text>
          <View className="bg-white rounded-xl">
            <View className="border rounded-t-xl px-4 py-5">
              <View className="flex flex-row items-center justify-between">
                <Text className="text-black font-montserrat-bold pb-2">
                  Unlock TRYNEW
                </Text>
                <Text className="text-primary-orange font-montserrat-bold">
                  Add Item
                </Text>
              </View>
              <Text className="font-proxima-nova-regular text-black-light mt-2">
                Add items worth ₹59 to save ₹35
              </Text>
            </View>
            <TouchableOpacity className="mx-auto my-6">
              <Text className="font-montserrat-bold text-black-light">
                View all coupons
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text className="text-black font-montserrat-bold text-lg my-3">
            Say Thanks with Tip!
          </Text>
          <View className="bg-white rounded-lg p-4">
            <View className="flex flex-row justify-between">
              <Text className="text-black-light w-[70%] font-proxima-nova-regular">
                Day & night, our delivery partners brings your favorite meals.
                Thank them with a tip.
              </Text>
              <View className="bg-[#FCECDF] rounded-lg p-2">
                <Image source={images.tip} className="w-[55px] h-[55px]" />
              </View>
            </View>
            <View className="flex flex-row justify-evenly mt-5 items-center">
              {tipOptions?.map((tip, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedTip(tip);
                  }}
                  className={`border-2 border-black-light px-5 py-4 rounded-lg ${
                    tip == selectedTip &&
                    "border-primary-orange bg-[#fd631f1a] text-primary-orange"
                  }`}>
                  <Text
                    className={`font-proxima-nova-regular ${
                      tip == selectedTip ? "text-primary-orange" : "text-black"
                    }`}>
                    &#8377; {tip}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        <View className="">
          <Text className="my-4 text-black font-montserrat-bold text-lg">
            Delivery Instructions
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="flex flex-row gap-2">
            <View className="bg-white rounded-3xl p-3 w-[100px]">
              <Image source={icons.doorBell} className="h-[28px] w-[28px]" />
              <Text className="text-black-light font-proxima-nova-regular">
                Avoid
              </Text>
              <Text className="text-black-light font-proxima-nova-regular">
                ringing bell
              </Text>
            </View>
            <View className="bg-white rounded-3xl p-3 w-[100px]">
              <Image source={icons.door} className="h-[28px] w-[28px]" />
              <Text className="text-black-light font-proxima-nova-regular">
                Leave at
              </Text>
              <Text className="text-black-light font-proxima-nova-regular">
                the door
              </Text>
            </View>
            <View className="bg-white rounded-3xl p-3 w-[100px]">
              <Image source={icons.directions} className="h-[28px] w-[28px]" />
              <Text className="text-black-light font-proxima-nova-regular">
                Directions
              </Text>
              <Text className="text-black-light font-proxima-nova-regular">
                to reach
              </Text>
            </View>
            <View className="bg-white rounded-3xl p-3 w-[100px]">
              <Image source={icons.door} className="h-[28px] w-[28px]" />
              <Text className="text-black-light font-proxima-nova-regular">
                Leave at
              </Text>
              <Text className="text-black-light font-proxima-nova-regular">
                the door
              </Text>
            </View>
            <View className="bg-white rounded-3xl p-3 w-[100px]">
              <Image source={icons.directions} className="h-[28px] w-[28px]" />
              <Text className="text-black-light font-proxima-nova-regular">
                Directions
              </Text>
              <Text className="text-black-light font-proxima-nova-regular">
                to reach
              </Text>
            </View>
          </ScrollView>
        </View>
        <View className="">
          <Text className="my-4 text-black font-montserrat-bold text-lg">
            Review your order and address details to avoid cancellations
          </Text>
          <View className="bg-white rounded-xl font-proxima-nova-regular p-5">
            <Text className="text-black-light font-proxima-nova-regular text-base">
              <Text className="text-[#000000b3] font-proxima-nova-bold">
                Note:{" "}
              </Text>
              Please ensure your address and order details are correct. This
              order , if cancelled, is non- refundable.
            </Text>
            <TouchableOpacity
              className="pt-4"
              onPress={() => {
                navigation.navigate("Policy");
              }}>
              <Text className="text-xl font-proxima-nova-bold text-primary-orange">
                READ POLICY
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Checkout;

import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";
import React, {useState} from "react";
import icons from "../../assets/icons";
import images from "../../assets/images";
import {CustomButton} from "../../components/Buttons";
import RazorpayCheckout from "react-native-razorpay";

const Checkout = ({navigation}) => {
  const KEY = "rzp_test_7HHGLjjZbxoxdt";
  const [type, setType] = useState("standard");
  const [selectedTip, setSelectedTip] = useState(20);
  const [checked, setChecked] = useState(false);
  const [selectedInstruction, setSelectedInstruction] = useState("");
  const [total, setTotal] = useState(356.9);

  const tipOptions = [20, 30, 50, "Other"];

  const instructionOptions = [
    {
      id: "avoidBell",
      icon: icons.doorBell,
      label1: "Avoid",
      label2: "ringing bell",
    },
    {
      id: "leaveAtDoor",
      icon: icons.door,
      label1: "Leave at",
      label2: "the door",
    },
    {
      id: "directionsToReach",
      icon: icons.directions,
      label1: "Directions",
      label2: "to reach",
    },
  ];

  const handlePayment = () => {
    let options = {
      description: "Food App",
      image:
        "https://res.cloudinary.com/di5uhy426/image/upload/v1726910021/uuqdhd8rnlcdvvwk5oyc.png",
      currency: "INR",
      key: KEY,
      amount: total * 100,
      name: "Customer 1",
      order_id: "",
      prefill: {
        email: "xyz@example.com",
        contact: "9191919191",
        name: "Person Name",
      },
      theme: {color: "#rgba(253, 99, 31, 1)"},
    };
    RazorpayCheckout.open(options);
    // RazorpayCheckout.open(options)
    //   .then(data => {
    //     alert(`Success: ${data.razorpay_payment_id}`);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //     alert(`Error: ${error.code} | ${error.description}`);
    //   });
  };

  return (
    <ScrollView className="h-full" style={{backgroundColor: "#EFEBEB"}}>
      <View className="bg-white rounded-b-3xl px-2 py-2">
        <View className="flex flex-row justify-between pt-2">
          <Image source={icons.backArrow} className="w-[24px] h-[24px]" />
          <View>
            <Text className="text-black font-proxima-nova-bold text-base">
              20-25 mins to Home |{" "}
              <Text className="font-proxima-nova-regular">75, chhatri...</Text>
            </Text>
            <Text className="text-[#FFC742] font-proxima-nova-bold">
              Delivering Superfast!
            </Text>
          </View>
          <Image source={icons.bottomArrowGray} className="w-[24px] h-[24px]" />
        </View>
        <View className="bg-[#DDFBEF] mt-4 space-x-2 rounded-b-3xl px-2 py-3 flex flex-row items-center justify-center">
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
            <View
              className="rounded-t-xl px-4 py-5"
              style={{
                borderWidth: 2,
                borderColor: "#00000033",
                borderStyle: "dashed",
              }}>
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
        <View className="py-3">
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
            <View className="flex flex-row justify-between mt-5 items-center">
              {tipOptions?.map((tip, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedTip(tip);
                  }}
                  className={`border-2 border-black-light flex flex-row space-x-2 items-center px-5 py-4 rounded-lg ${
                    tip == selectedTip &&
                    "border-primary-orange bg-[#fd631f1a] text-primary-orange"
                  }`}>
                  {tip == "Other" ? (
                    <>
                      <Text
                        className={`font-proxima-nova-regular ${
                          tip == selectedTip
                            ? "text-primary-orange"
                            : "text-black"
                        }`}>
                        {tip}
                      </Text>
                      {tip === selectedTip && (
                        <Image
                          source={icons.closePrimaryFill}
                          className="h-[16px] w-[16px]"
                        />
                      )}
                    </>
                  ) : (
                    <>
                      <Text
                        className={`font-proxima-nova-regular ${
                          tip == selectedTip
                            ? "text-primary-orange"
                            : "text-black"
                        }`}>
                        &#8377; {tip}
                      </Text>
                      {tip === selectedTip && (
                        <Image
                          source={icons.closePrimaryFill}
                          className="h-[16px] w-[16px]"
                        />
                      )}
                    </>
                  )}
                </TouchableOpacity>
              ))}
            </View>
            <View
              className={`border-b-[1px] border-[#00000080] ${
                !(selectedTip === "Other") && "mt-3"
              }`}>
              {selectedTip === "Other" && (
                <TextInput
                  placeholderTextColor={"black"}
                  placeholder="₹ Enter Tip Amount"
                  className={`text-black text-base font-proxima-nova-regular rounded-xl`}
                />
              )}
            </View>
            <View>
              <TouchableOpacity
                className="flex flex-row gap-2 items-center pt-3"
                onPress={() => {
                  setChecked(prev => !prev);
                }}>
                <View
                  className={`w-[14px] h-[14px] rounded-sm ${
                    checked
                      ? "bg-primary-orange"
                      : "bg-white border border-[#00000033]"
                  }`}>
                  {checked && (
                    <Image source={icons.whiteTick} className="w-full h-full" />
                  )}
                </View>
                <Text className="text-black font-proxima-nova-regular text-base">
                  Add this tip automatically to future orders.
                </Text>
              </TouchableOpacity>
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
            {instructionOptions?.map(instruction => (
              <TouchableOpacity
                key={instruction.id}
                onPress={() => {
                  setSelectedInstruction(instruction.id);
                }}
                className={`rounded-3xl border-2 px-3 py-4 w-[100px] ${
                  !(instruction.id === selectedInstruction)
                    ? "bg-white border-white"
                    : "bg-[#FD631F1A] border-primary-orange"
                }`}>
                {instruction.id === selectedInstruction && (
                  <Image
                    source={icons.closePrimaryFill}
                    className="h-[16px] w-[16px] absolute right-2 top-2"
                  />
                )}
                <Image
                  source={instruction.icon}
                  className="h-[28px] w-[28px]"
                />
                <Text className="text-black-light font-proxima-nova-regular pt-2">
                  {instruction.label1}
                </Text>
                <Text className="text-black-light font-proxima-nova-regular">
                  {instruction.label2}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View>
          <Text className="my-4 text-black font-montserrat-bold text-lg">
            Bill Details
          </Text>
          <View className="bg-white rounded-2xl px-4 py-4">
            <View className="flex flex-row justify-between">
              <Text className="text-[#3C3A45B2] font-proxima-nova-regular">
                Dal Makhani
              </Text>
              <Text className="text-[#3C3A45] font-proxima-nova-regular">
                ₹ 320
              </Text>
            </View>
            <View className="flex flex-row justify-between pt-4 mb-4">
              <Text className="text-[#3C3A45B2] font-proxima-nova-regular underline">
                Delivery Fee | 3.9Kms
              </Text>
              <Text className="text-secondary-gray font-proxima-nova-regular">
                ₹23.00
              </Text>
            </View>
            <Text className="text-[#3C3A4580] font-proxima-nova-regular w-[70%]">
              Free delivery applicable on orders above ₹400
            </Text>
            <View className="flex flex-row justify-between pt-2 mb-4">
              <Text className="text-[#3C3A45B2] font-proxima-nova-regular">
                Extra Discount for you
              </Text>
              <Text className="text-secondary-green font-proxima-nova-regular">
                -₹ 25.00
              </Text>
            </View>
            <View className="flex flex-row justify-between pt-2 border-t-[1px] border-[#0000001A] mb-4">
              <Text className="text-[#3C3A45B2] font-proxima-nova-regular">
                Delivery Tip
              </Text>
              <Text className="text-primary-orange font-proxima-nova-regular">
                Add tip
              </Text>
            </View>
            <View className="flex flex-row justify-between mb-4">
              <Text className="text-[#3C3A45B2] font-proxima-nova-regular underline">
                Platform Fee
              </Text>
              <Text className="text-[#3C3A45] font-proxima-nova-regular">
                ₹ 5.00
              </Text>
            </View>
            <View className="flex flex-row justify-between mb-4">
              <Text className="text-[#3C3A45B2] font-proxima-nova-regular underline">
                GST and Restaurant Charges
              </Text>
              <Text className="text-[#3C3A45] font-proxima-nova-regular">
                ₹ 8.90
              </Text>
            </View>

            <View className="flex flex-row justify-between py-4 border-t-[1px] border-[#0000001A]">
              <Text className="text-[#3C3A45] font-proxima-nova-bold">
                To Pay
              </Text>
              <Text className="text-[#3C3A45] font-proxima-nova-bold">
                ₹ 356.9
              </Text>
            </View>
          </View>
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
        <View className="my-4">
          <CustomButton
            variant="secondary-green-fill"
            title={`Pay |  ₹ ${total}`}
            containerStyles={`py-5 rounded-full`}
            handleOnPress={handlePayment}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default Checkout;

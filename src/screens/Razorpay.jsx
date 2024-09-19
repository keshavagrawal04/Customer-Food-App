import {Text, TouchableOpacity, View} from "react-native";
import React from "react";
import RazorpayCheckout from "react-native-razorpay";

const Razorpay = () => {
  const amount = 100;

  const handlePayment = () => {
    let options = {
      description: "Food App",
      image: "",
      currency: "INR",
      key: "rzp_test_7HHGLjjZbxoxdt",
      amount: amount * 100,
      name: "Customer 1",
      order_id: "", //Replace this with an order_id created using Orders API.
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
    <View>
      <Text>Razorpay</Text>
      <TouchableOpacity
        onPress={handlePayment}
        className="bg-primary-orange py-3 px-2 mx-5">
        <Text className="text-white text-center font-montserrat-bold text-xl">
          Pay Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Razorpay;
